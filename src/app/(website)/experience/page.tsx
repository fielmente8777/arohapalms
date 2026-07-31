import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import Activities from "./components/Activities";
import ExperienceCards from "./components/ExperienceCard";
import Intro from "./components/Intro";

import { experiencePageData } from "./pageData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Aroha Palms",

  description:
    "Immerse yourself in the tranquil experiences of Aroha Palms, where lush gardens, serene spaces, wellness, and luxury come together in Goa.",

  keywords: [
    "Aroha Palms Experiences",
    "Luxury Experiences Goa",
    "Wellness Retreat Goa",
    "Luxury Stay Goa",
    "Goa Villa Experience",
    "Mandrem Villas",
    "Pilerne Villas",
    "Private Villa Goa",
    "Luxury Holiday Goa",
    "Aroha Palms Goa",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/experience/",
  },

  openGraph: {
    title: "Experience - Aroha Palms",
    description:
      "Discover unforgettable experiences at Aroha Palms with wellness, luxury stays, lush gardens, and serene surroundings in Goa.",
    url: "https://arohapalms.com/experience/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Experiences",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Experience - Aroha Palms",
    description:
      "Discover wellness, luxury, and unforgettable experiences at Aroha Palms in Goa.",
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

export default function Page() {
  return (
    <main>
      <Intro {...experiencePageData.intro} />

      <ExperienceCards {...experiencePageData.experiences} />

      <Activities {...experiencePageData.Activites} />

      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}