import { title } from "process";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Aroha Palms - Luxury Villas & Apartments in Mandrem, Goa",
  description: "Aroha Palms, North Goa—calm villas & apartments in lush gardens, offering private stays with easy access to beaches and local experiences.",
  alternates:{
    canonical: "https://www.arohapalms.com",
  },
  openGraph: {
    title: "Aroha Palms - Luxury Villas & Apartments in Mandrem, Goa",
  description: "Aroha Palms, North Goa—calm villas & apartments in lush gardens, offering private stays with easy access to beaches and local experiences.",
   siteName: "Aroha Palms",
    locale: "en_IN",
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

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <Navbar />
      {children}
      <Footer {...WebfooterData} />
    </>
  );
}
