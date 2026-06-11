import type { MetadataRoute } from "next";

const BASE = "https://tacofficial.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-we-do", "/who-we-serve", "/our-work", "/our-faculty", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
