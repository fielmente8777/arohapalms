import type { MetadataRoute } from "next";
import { roomData } from "./(website)/[slug]/pageData";
import { villaPageSlugs } from "@/data/villaPhotos";
import { villaSlug } from "@/utils/villaSlug";
import blogPostPageData from "./(website)/articles/[slug]/pageData";

// Every live, indexable page (client doc L9 / S2). Ad landing pages are left out (noindex, G8).
const BASE = "https://arohapalms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority = 0.6): MetadataRoute.Sitemap[number] => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  });

  const staticPages = [
    page("/", 1),
    page("/our-story/"),
    page("/experience/"),
    page("/gallery/"),
    page("/articles/"),
    page("/contact-us/", 0.7),
    page("/faq/"),
    page("/arrival-instructions/mandrem/", 0.3),
    page("/arrival-instructions/pilerne/", 0.3),
    page("/house-keeping-rules/", 0.3),
    page("/cancellation-refund-policy/", 0.3),
    page("/privacy-policy/", 0.3),
    page("/terms-and-conditions/", 0.3),
  ];

  const locations = roomData.map((l) => page(`/${l.slug}/`, 0.9));

  const stays = roomData.flatMap((l) =>
    l.properties.cards
      .map((c) => villaSlug(c.title))
      .filter((s) => villaPageSlugs.includes(s))
      .map((s) => page(`/${l.slug}/${s}/`, 0.8)),
  );

  const articles = blogPostPageData.map((p) => page(`/articles/${p.slug}/`, 0.5));

  return [...staticPages, ...locations, ...stays, ...articles];
}
