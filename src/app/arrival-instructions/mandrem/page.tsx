import { Metadata } from "next";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";
import { SectionWithContainer } from "@/components/sectionComponants";
import GuestArrival from "./components/GuestArrival";
import { guestArrivalData } from "./pageData";

export const metadata: Metadata = {
  title: "Mandrem - Aroha Palms",

  description:
    "Picture this: Greek-inspired elegance meets tropical bliss in the heart of Goa. Discover Aroha Palms Magnifica and luxury villas in Mandrem, North Goa.",

  keywords: [
    "Aroha Palms",
    "Mandrem Goa",
    "Aroha Palms Magnifica",
    "Luxury Villas Mandrem",
    "Mandrem Villas",
    "Luxury Stay Goa",
    "North Goa Villas",
    "Goa Holiday Villas",
    "Luxury Accommodation Goa",
    "Private Villas Goa",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/mandrem/",
  },

  openGraph: {
    title: "Mandrem - Aroha Palms",
    description:
      "Discover Aroha Palms Magnifica in Mandrem, North Goa—Greek-inspired luxury villas offering a serene and elegant getaway.",
    url: "https://arohapalms.com/mandrem/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Mandrem",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mandrem - Aroha Palms",
    description:
      "Discover Aroha Palms Magnifica in Mandrem, North Goa—Greek-inspired luxury villas.",
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

export default function GuestArrivalPage() {
  return (
    <>
      <Navbar />

      <SectionWithContainer sectionClassName="py-20">
        <GuestArrival {...guestArrivalData} />
      </SectionWithContainer>

      <Footer {...WebfooterData} />
    </>
  );
}