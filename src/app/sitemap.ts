import type { MetadataRoute } from "next";
import { seoRoutes, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(seoRoutes).map((route) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
