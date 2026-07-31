import { Metadata } from "next";

import { cancellationRefundPolicyData } from "./pageData";
import Policy from "./component/Policy";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";


export const metadata: Metadata = {
  title: "Cancellation Policy - Aroha Palms",

  description:
    "Read the Aroha Palms Cancellation & Refund Policy, including booking cancellations, refund eligibility, payment terms, and reservation guidelines.",

  keywords: [
    "Aroha Palms Cancellation Policy",
    "Refund Policy",
    "Villa Cancellation Policy",
    "Booking Cancellation",
    "Goa Villa Refund",
    "Reservation Policy",
    "Aroha Palms Booking Terms",
    "Luxury Villas Goa",
    "Guest Booking Policy",
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
    canonical: "https://arohapalms.com/cancellation-refund-policy/",
  },

  openGraph: {
    title: "Cancellation Policy - Aroha Palms",
    description:
      "Review the Aroha Palms Cancellation & Refund Policy for booking terms, refunds, and reservation guidelines.",
    url: "https://arohapalms.com/cancellation-refund-policy/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cancellation Policy - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy - Aroha Palms",
    description:
      "Read the Aroha Palms Cancellation & Refund Policy for bookings and refunds.",
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

const CancellationRefundPolicyPage = () => {
  return (
    <>
      <Navbar />
      <Policy {...cancellationRefundPolicyData} />
      <Footer {...WebfooterData} />
    </>
  );
};

export default CancellationRefundPolicyPage;
