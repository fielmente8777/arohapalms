import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlers must reach thank-you to read its noindex meta tag.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://arohapalms.com/sitemap.xml",
    host: "https://arohapalms.com",
  };
}
