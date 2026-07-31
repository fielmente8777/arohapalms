import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination - Aroha Palms",

  description:
    "Discover Aroha Palms destinations in Goa. Explore luxury villas and apartments in Pilerne and Mandrem.",

  keywords: [
    "Aroha Palms",
    "Goa Destinations",
    "Mandrem Goa",
    "Pilerne Goa",
    "Luxury Villas Goa",
    "Luxury Apartments Goa",
    "Goa Vacation",
    "Holiday Villas Goa",
    "North Goa Villas",
    "Goa Accommodation",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/destination/",
  },

  openGraph: {
    title: "Destination - Aroha Palms",
    description:
      "Discover Aroha Palms destinations in Goa. Explore luxury villas and apartments in Pilerne and Mandrem.",
    url: "https://arohapalms.com/destination/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Destinations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Destination - Aroha Palms",
    description:
      "Discover Aroha Palms destinations in Goa. Explore luxury villas and apartments in Pilerne and Mandrem.",
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
export const yourStayPageData = {
  intro: {
    title: "Stay at Aroha Palms",

    description: [
      "Rooted in natural elegance and a sense of quiet luxury, Aroha Palms offers thoughtfully designed villas and apartments set amidst beautifully manicured gardens in Mandrem. Each space invites guests to slow down, unwind, and experience a stay that feels both refined and effortlessly comfortable.",

      "Surrounded by lush greenery, every residence is spacious, airy, and designed to bring in soft natural light and a gentle tropical breeze. Private sit-outs and open spaces create a seamless connection with the outdoors, while carefully curated interiors and modern amenities ensure a stay that is indulgent, intimate, and truly at ease.",
    ],
  },

  stays: [
    {
      image: "/images/cover1.jpg",
      title: "Explore Aroha Palms",
      subtitle: "at Mandrem",
      href: "/destination/mandrem",
    },
    {
      image: "/images/AOB_0138.jpg",
      title: "Explore Aroha Palms",
      subtitle: "at Pilerne",
      href: "/destination/pilerne",
    },
  ],

};