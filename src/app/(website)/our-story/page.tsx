import React from "react";
import AboutSection from "./components/AboutSection";
import Mission from "./components/Mission";
import { OurStoryData } from "./pageData";
import OurVillas from "./components/OurVilla";
import Confidence from "./components/Confidence";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Aroha Palms",

  description:
    "Discover the story behind Aroha Palms, a luxury villa estate in Goa, where private villas, tranquil surroundings, and timeless hospitality create unforgettable stays.",

  keywords: [
    "Aroha Palms Story",
    "About Aroha Palms",
    "Luxury Villas Goa",
    "Mandrem Goa",
    "North Goa Villas",
    "Luxury Villa Estate",
    "Private Pool Villas Goa",
    "Goa Hospitality",
    "Luxury Stay Goa",
    "Aroha Palms",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/our-story/",
  },

  openGraph: {
    title: "Our Story - Aroha Palms",
    description:
      "Learn the story behind Aroha Palms, a luxury villa estate in Goa offering elegant stays, private villas, and exceptional hospitality.",
    url: "https://arohapalms.com/our-story/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Our Story - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Story - Aroha Palms",
    description:
      "Discover the story behind Aroha Palms and our luxury villa experience in Goa.",
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

export default function OurStory() {
  return (
    <main>
      <AboutSection {...OurStoryData.about} />
      <Mission {...OurStoryData.missionData} />
      <OurVillas {...OurStoryData.villasData} />
      <Confidence {...OurStoryData.confidenceData} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}
