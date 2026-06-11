import type { MetadataRoute } from "next";
import { faculty } from "@/lib/data";

const BASE = "https://tacofficial.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/what-we-do", "/who-we-serve", "/our-work", "/our-faculty", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const facultyRoutes = faculty.map((m) => ({
    url: `${BASE}/our-faculty/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...routes, ...facultyRoutes];
}
