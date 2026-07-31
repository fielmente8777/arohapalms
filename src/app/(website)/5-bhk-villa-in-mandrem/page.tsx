import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AmenitiesBar from "./components/AmenitiesBar";
import PromoBanner from "./components/PromoBanner";
import ExperienceIntro from "./components/ExperienceIntro";
import PhotoGallery from "./components/PhotoGallery";
import Walkthrough from "./components/Walkthrough";
import Reviews from "./components/Reviews";
import WhyUs from "./components/WhyUs";
import LocationSection from "./components/LocationSection";
import FaqSection from "./components/FaqSection";
import WhatsappFab from "./components/WhatsappFab";

export const metadata: Metadata = {
  title: "5 BHK Villa in Mandrem - Aroha Palms",

  description:
    "Book Aroha Palms' luxury 5 BHK private villa in Mandrem, North Goa. Enjoy private pools, premium amenities, and exclusive offers for an unforgettable stay.",

  keywords: [
    "5 BHK Villa Mandrem",
    "Luxury Villa Mandrem",
    "5 BHK Villa Goa",
    "Private Villa Goa",
    "Mandrem Villa Rental",
    "North Goa Villas",
    "Luxury Stay Goa",
    "Aroha Palms",
    "Goa Holiday Villa",
    "Private Pool Villa Goa",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/5-bhk-villa-in-mandrem/",
  },

  openGraph: {
    title: "5 BHK Villa in Mandrem - Aroha Palms",
    description:
      "Experience a luxury 5 BHK private villa in Mandrem, North Goa with premium amenities, private pools, and exclusive offers.",
    url: "https://arohapalms.com/5-bhk-villa-in-mandrem/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "5 BHK Villa in Mandrem - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "5 BHK Villa in Mandrem - Aroha Palms",
    description:
      "Book a luxury 5 BHK private villa in Mandrem, North Goa with Aroha Palms.",
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
    <main className="bg-white text-slate-800 antialiased">
      <Navbar />
      <Hero />
      <AmenitiesBar />
      <PromoBanner />
      <ExperienceIntro />
      <PhotoGallery />
      <Walkthrough />
      <Reviews />
      <WhyUs />
      <LocationSection />
      <FaqSection />
      <WhatsappFab />
    </main>
  );
}