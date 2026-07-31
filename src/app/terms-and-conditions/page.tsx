import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

import TermsConditions from "./components/TermsConditions";
import { termsConditionsData } from "./pageData";



export const metadata: Metadata = {
  title: "Terms and Conditions - Aroha Palms",

  description:
    "Read the Terms and Conditions of Aroha Palms, including booking policies, cancellations, payments, guest responsibilities, and villa stay guidelines.",

  keywords: [
    "Aroha Palms Terms",
    "Terms and Conditions",
    "Villa Booking Terms",
    "Goa Villa Policies",
    "Aroha Palms Booking Policy",
    "Cancellation Policy",
    "Luxury Villas Goa",
    "Guest Guidelines",
    "Villa Stay Rules",
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
    canonical: "https://arohapalms.com/terms-and-conditions/",
  },

  openGraph: {
    title: "Terms and Conditions - Aroha Palms",
    description:
      "Review the Terms and Conditions for booking and staying at Aroha Palms luxury villas in Goa.",
    url: "https://arohapalms.com/terms-and-conditions/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Aroha Palms",
    description:
      "Read the booking terms, cancellation policy, and guest guidelines for Aroha Palms.",
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <TermsConditions {...termsConditionsData} />
      <Footer {...WebfooterData} />
    </>
  );
}