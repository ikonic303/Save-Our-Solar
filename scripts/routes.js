// Every URL the React app serves, derived from the same data the router uses.
// Shared by generate-sitemap.js (sitemaps/core.xml) and prerender.js (static HTML),
// so the sitemap and the prerendered pages can't drift apart.
import { SERVICE_DETAILS } from "../src/data/serviceDetails.js";
import { SERVICE_ITEMS } from "../src/data/serviceItems.js";
import { BLOG_POSTS } from "../src/data/blogPosts.js";

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

export const ROUTES = [
  ...STATIC_PATHS.map((path) => ({ path })),
  ...SERVICE_DETAILS.map((s) => ({ path: `/services/${s.slug}` })),
  ...SERVICE_ITEMS.map((i) => ({ path: `/services/${i.parentSlug}/${i.slug}` })),
  ...BLOG_POSTS.map((p) => ({ path: `/insights/${p.slug}`, lastmod: p.date })),
];
