import { title } from "process";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";
import LandingFooter from "@/components/footer/LandingFooter";

export const metadata: Metadata = {
  title: "Aroha Palms - Luxury Villas & Apartments in Mandrem, Goa",

  description:
    "Aroha Palms, North Goa—calm villas & apartments in lush gardens, offering private stays with easy access to beaches and local experiences.",

  keywords: [
    "Aroha Palms",
    "Luxury Villas Goa",
    "Luxury Apartments Goa",
    "Mandrem Goa",
    "North Goa Villas",
    "Private Villas Goa",
    "Goa Holiday Villas",
    "Luxury Stay Goa",
    "Villa Rental Goa",
    "Goa Accommodation",
  ],

  authors: [
    {
      name: "Aroha Palms",
      url: "https://arohapalms.com",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/",
  },

  openGraph: {
    title: "Aroha Palms - Luxury Villas & Apartments in Mandrem, Goa",
    description:
      "Aroha Palms, North Goa—calm villas & apartments in lush gardens, offering private stays with easy access to beaches and local experiences.",
    url: "https://arohapalms.com/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Luxury Villas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aroha Palms - Luxury Villas & Apartments in Mandrem, Goa",
    description:
      "Luxury villas & apartments in Mandrem, North Goa.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      {children}
      <LandingFooter/>
    </>
  );
}
