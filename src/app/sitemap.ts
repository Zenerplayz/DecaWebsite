import type { MetadataRoute } from "next";
import { seoRoutes, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(seoRoutes).map((route) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    // Omit lastModified until content update dates can be tracked reliably.
    // A deployment timestamp does not describe when each page changed.
  }));
}
