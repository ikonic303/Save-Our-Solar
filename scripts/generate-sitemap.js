// Writes public/sitemaps/core.xml from the route data so the sitemap never drifts
// from the pages that actually exist. Runs automatically before `npm run build`.
import { writeFileSync } from "node:fs";
import { ROUTES } from "./routes.js";

const ORIGIN = "https://www.saveoursolarclub.com";

const urls = ROUTES
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
console.log(`sitemaps/core.xml: ${ROUTES.length} URLs`);
