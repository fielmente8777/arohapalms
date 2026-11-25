import type { MetadataRoute } from "next";
import { roomData } from "./(website)/[slug]/pageData";
import { villaPageSlugs } from "@/data/villaPhotos";
import { villaSlug } from "@/utils/villaSlug";
import blogPostPageData from "./(website)/articles/[slug]/pageData";

// Every live, indexable page (client doc L9 / S2). Ad landing pages are left out (noindex, G8).
const BASE = "https://arohapalms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority = 0.6,
    date = "2026-11-21",
    freq: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly",
  ): MetadataRoute.Sitemap[number] => ({
    url: `${BASE}${path}`,
    lastModified: new Date(date),
    changeFrequency: freq,
    priority,
  });

  const staticPages = [
    page("/", 1.0, "2026-11-25", "daily"),
    page("/our-story/", 0.7, "2026-11-15", "monthly"),
    page("/experience/", 0.7, "2026-11-15", "monthly"),
    page("/gallery/", 0.6, "2026-11-10", "monthly"),
    page("/articles/", 0.7, "2026-11-20", "weekly"),
    page("/contact-us/", 0.8, "2026-11-25", "monthly"),
    page("/destination/", 0.8, "2026-11-25", "weekly"),
    page("/faq/", 0.8, "2026-11-25", "weekly"),
    page("/arrival-instructions/mandrem/", 0.4, "2026-11-18", "monthly"),
    page("/arrival-instructions/pilerne/", 0.4, "2026-11-18", "monthly"),
    page("/house-keeping-rules/", 0.4, "2026-11-18", "monthly"),
    page("/cancellation-refund-policy/", 0.4, "2026-11-21", "monthly"),
    page("/privacy-policy/", 0.3, "2026-11-18", "yearly"),
    page("/terms-and-conditions/", 0.3, "2026-11-18", "yearly"),
  ];

  const locations = roomData.map((l) => page(`/${l.slug}/`, 0.9, "2026-11-25", "weekly"));

  const stays = roomData.flatMap((l) =>
    l.properties.cards
      .map((c) => villaSlug(c.title))
      .filter((s) => villaPageSlugs.includes(s))
      .map((s) => page(`/${l.slug}/${s}/`, 0.9, "2026-11-25", "weekly")),
  );

  const articles = blogPostPageData.map((p) => page(`/articles/${p.slug}/`, 0.6, "2026-11-10", "monthly"));

  return [...staticPages, ...locations, ...stays, ...articles];
}
