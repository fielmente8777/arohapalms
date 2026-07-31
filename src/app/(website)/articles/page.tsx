import Link from "next/link";
import Image from "next/image";
import blogPostPageData from "../[slug]/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Aroha Palms",

  description:
    "Explore travel guides, destination insights, luxury villa tips, and curated experiences from Aroha Palms to help you plan your perfect Goa getaway.",

  keywords: [
    "Aroha Palms Articles",
    "Goa Travel Guide",
    "Mandrem Travel Guide",
    "North Goa Guide",
    "Luxury Villas Goa",
    "Goa Vacation Tips",
    "Things to Do in Goa",
    "Goa Beaches",
    "Goa Travel Blog",
    "Aroha Palms Blog",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/articles/",
  },

  openGraph: {
    title: "Articles - Aroha Palms",
    description:
      "Read travel guides, destination stories, and luxury villa insights from Aroha Palms to make the most of your Goa experience.",
    url: "https://arohapalms.com/articles/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Articles",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Articles - Aroha Palms",
    description:
      "Discover travel guides, destination stories, and luxury villa insights from Aroha Palms.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};

export default function ArticlesPage() {
  return (
  
      <main>
        <SectionWithContainer sectionClassName="">
        <div className="max_width">
          {/* <h1 className="text-center mb-16">Articles</h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPostPageData.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <div className="relative md:aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-4">{post.title}</h3>

                <p className="mt-2">{post.publishedAt}</p>
              </Link>
            ))}
          </div>
        </div>
        </SectionWithContainer>
      </main>
     
  
  );
}
