// Generates public/sitemap.xml from static routes + services + blog posts.
// Run with: bunx tsx scripts/generate-sitemap.ts
import { writeFileSync } from "fs";
import { resolve } from "path";
import { services } from "../src/data/services";
import { blogPosts } from "../src/pages/Blog";

const BASE_URL = "https://digivyral.com";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/blog", changefreq: "weekly", priority: "0.9", lastmod: today },
  { path: "/careers", changefreq: "monthly", priority: "0.6", lastmod: today },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: today,
  })),
  ...blogPosts.map((b) => ({
    path: `/blog/${b.slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: b.date,
  })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
