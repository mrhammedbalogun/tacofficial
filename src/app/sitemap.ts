import type { MetadataRoute } from "next";
import { faculty, services, engagements } from "@/lib/data";

const BASE = "https://tacofficial.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/what-we-do",
    "/who-we-serve",
    "/our-work",
    "/our-faculty",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicRoutes = [
    ...faculty.map((m) => `/our-faculty/${m.slug}`),
    ...services.map((s) => `/what-we-do/${s.slug}`),
    ...engagements.map((e) => `/our-work/${e.slug}`),
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
