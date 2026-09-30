// Writes public/sitemaps/core.xml from the route data so the sitemap never drifts
// from the pages that actually exist. Runs automatically before `npm run build`.
import { writeFileSync } from "node:fs";
import { SERVICE_DETAILS } from "../src/data/serviceDetails.js";
import { SERVICE_ITEMS } from "../src/data/serviceItems.js";
import { BLOG_POSTS } from "../src/data/blogPosts.js";

const ORIGIN = "https://www.saveoursolarclub.com";

const STATIC_PATHS = [
  "/",
  "/services",
  "/membership",
  "/insurance",
  "/insights",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

const entries = [
  ...STATIC_PATHS.map((path) => ({ path })),
  ...SERVICE_DETAILS.map((s) => ({ path: `/services/${s.slug}` })),
  ...SERVICE_ITEMS.map((i) => ({ path: `/services/${i.parentSlug}/${i.slug}` })),
  ...BLOG_POSTS.map((p) => ({ path: `/insights/${p.slug}`, lastmod: p.date })),
];

const urls = entries
  .map(({ path, lastmod }) =>
    `  <url><loc>${ORIGIN}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(new URL("../public/sitemaps/core.xml", import.meta.url), xml);
console.log(`sitemaps/core.xml: ${entries.length} URLs`);
