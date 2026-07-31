import ContactHero from "./components/ContactHero";
import ContactGrid from "./components/ContactGrid";

import { contactPageData } from "./pageData";
import Approach from "./components/Approach";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Aroha Palms",

  description:
    "Feel free to contact us for any inquiries about accommodation, villa bookings, or your stay at Aroha Palms in Goa.",

  keywords: [
    "Aroha Palms Contact",
    "Contact Aroha Palms",
    "Goa Villa Booking",
    "Luxury Villas Goa",
    "Accommodation Goa",
    "Book Villa Goa",
    "Mandrem Villas",
    "Pilerne Villas",
    "Aroha Palms Goa",
    "Luxury Stay Goa",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/contact-us/",
  },

  openGraph: {
    title: "Contact Us - Aroha Palms",
    description:
      "Contact Aroha Palms for accommodation inquiries, villa bookings, and luxury stays in Goa.",
    url: "https://arohapalms.com/contact-us/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Aroha Palms",
    description:
      "Contact Aroha Palms for accommodation inquiries and villa bookings in Goa.",
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
      <ContactHero title={contactPageData.title} />

      <ContactGrid {...contactPageData.contact} />
      <Approach {...contactPageData.approach} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}
