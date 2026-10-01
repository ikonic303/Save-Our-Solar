// Renders every React route to static HTML after `vite build`, so search engines and
// AI crawlers that don't execute JavaScript receive real page content instead of an
// empty <div id="root">. The browser then hydrates the same markup (see src/main.jsx).
//
// Output (served by Vercel with "cleanUrls"):
//   /                -> dist/index.html
//   /services        -> dist/services.html
//   /services/repairs -> dist/services/repairs.html
//   unknown URLs     -> dist/404.html (real 404 status)
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "./routes.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const { render } = await import(new URL("../dist-ssr/entry-server.js", import.meta.url));

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("dist/index.html has no empty #root");

// React 19 emits <title>/<meta>/<link> from <Helmet> ahead of the app markup.
// Move them into <head>, tagged so src/main.jsx can drop them before React hoists its own.
const APP_START = '<div id="root-app"';

function page(url) {
  const html = render(url);
  const start = html.indexOf(APP_START);
  if (start === -1) throw new Error(`${url}: rendered output has no ${APP_START}`);
  const head = html
    .slice(0, start)
    .replace(/<(title|meta|link)\b/g, "<$1 data-prerender");
  const body = html.slice(start);
  return template
    .replace(/<title>[^<]*<\/title>/, "")
    .replace("</head>", `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const NOT_FOUND_MARKER = "We couldn&#x27;t find that page.";
let count = 0;
for (const { path } of ROUTES) {
  const html = page(path);
  // A route list entry that renders the 404 page means routes.js and App.jsx disagree.
  if (html.includes(NOT_FOUND_MARKER)) throw new Error(`${path}: rendered the 404 page`);
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  mkdirSync(dirname(join(dist, file)), { recursive: true });
  writeFileSync(join(dist, file), html);
  count++;
}

const notFound = page("/404");
if (!notFound.includes(NOT_FOUND_MARKER)) throw new Error("/404 did not render the 404 page");
writeFileSync(join(dist, "404.html"), notFound);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${count} routes + 404.html`);
