import { faqData } from "./pageData";
import FAQSection from "./components/FaoSection";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Aroha Palms",

  description:
    "Find answers to frequently asked questions about Aroha Palms, including bookings, villas, amenities, privacy, check-in, check-out, and our Natural Luxury experience in Goa.",

  keywords: [
    "Aroha Palms FAQ",
    "Frequently Asked Questions",
    "Goa Villa FAQ",
    "Luxury Villas Goa",
    "Mandrem Villas",
    "Villa Booking FAQs",
    "Natural Luxury",
    "Aroha Palms",
    "Goa Accommodation",
    "Guest Information",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/faq/",
  },

  openGraph: {
    title: "FAQ - Aroha Palms",
    description:
      "Get answers to common questions about Aroha Palms, including bookings, amenities, stays, and our Natural Luxury philosophy.",
    url: "https://arohapalms.com/faq/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FAQ - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FAQ - Aroha Palms",
    description:
      "Find answers to common questions about stays, bookings, amenities, and more at Aroha Palms.",
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

export default function FAQPage() {
  return (
    <>
    <Navbar/>
    <main>
      <FAQSection {...faqData} />
    </main>

    <Footer {...WebfooterData}/>

    </>
  );
}
