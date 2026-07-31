import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";

import GuestArrival from "./components/GuestArrival";
import { guestArrivalData } from "./pageData";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Pilerne - Aroha Palms",

  description:
    "Discover Aroha Palms in Pilerne, North Goa. Experience luxury villas with private pools, premium amenities, and easy access to Goa's top attractions.",

  keywords: [
    "Aroha Palms",
    "Pilerne Goa",
    "Luxury Villas Pilerne",
    "Pilerne Villas",
    "Luxury Stay Goa",
    "North Goa Villas",
    "Goa Holiday Villas",
    "Private Pool Villas Goa",
    "Luxury Accommodation Goa",
    "Villa Rental Goa",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/pilerne/",
  },

  openGraph: {
    title: "Pilerne - Aroha Palms",
    description:
      "Discover luxury villas in Pilerne, North Goa with Aroha Palms. Enjoy elegant stays, private pools, and premium amenities.",
    url: "https://arohapalms.com/pilerne/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Pilerne",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pilerne - Aroha Palms",
    description:
      "Discover luxury villas in Pilerne, North Goa with Aroha Palms.",
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

const GuestArrivalPilernePage = () => {
  return (
    <>
      <Navbar />

      <SectionWithContainer>
        <GuestArrival {...guestArrivalData} />
      </SectionWithContainer>

      <Footer {...WebfooterData} />
    </>
  );
};

export default GuestArrivalPilernePage;