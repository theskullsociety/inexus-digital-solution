// Generates public/sitemap.xml. Parses slugs from source to avoid importing webp assets.
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://digivyral.com";
const today = new Date().toISOString().slice(0, 10);

function extractSlugs(file: string): string[] {
  const src = readFileSync(file, "utf8");
  const matches = src.matchAll(/slug:\s*"([^"]+)"/g);
  return [...matches].map((m) => m[1]);
}

const serviceSlugs = extractSlugs("src/data/services.ts");
const blogSlugs = extractSlugs("src/pages/Blog.tsx");

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
  ...serviceSlugs.map((s) => ({
    path: `/services/${s}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: today,
  })),
  ...blogSlugs.map((s) => ({
    path: `/blog/${s}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: today,
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
