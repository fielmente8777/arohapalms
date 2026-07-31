import { Metadata } from "next";

import { privacyPolicyData } from "./pageData";
import Privacy from "./component/Privacy";
import Navbar from "@/components/navbar/navbar";
import { SectionWithContainer } from "@/components/sectionComponants";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";


export const metadata: Metadata = {
  title: "Privacy Policy - Aroha Palms",

  description:
    "Read the Aroha Palms Privacy Policy to understand how we collect, use, store, and protect your personal information when you visit our website or book a stay.",

  keywords: [
    "Aroha Palms Privacy Policy",
    "Privacy Policy",
    "Data Protection",
    "Personal Information",
    "Guest Privacy",
    "Website Privacy",
    "Goa Villa Booking",
    "Aroha Palms",
    "Privacy Notice",
    "Data Security",
  ],

  authors: [
    {
      name: "Aroha Palms",
    },
  ],

  creator: "Aroha Palms",
  publisher: "Aroha Palms",

  alternates: {
    canonical: "https://arohapalms.com/privacy-policy/",
  },

  openGraph: {
    title: "Privacy Policy - Aroha Palms",
    description:
      "Learn how Aroha Palms collects, uses, and safeguards your personal information and privacy.",
    url: "https://arohapalms.com/privacy-policy/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Aroha Palms",
    description:
      "Read the Privacy Policy of Aroha Palms to understand how your information is collected and protected.",
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


const PrivacyPolicyPage = () => {
   return (
      <>
      <Navbar/>
      <SectionWithContainer>
        <Privacy {...privacyPolicyData} />
      </SectionWithContainer>
      <Footer {...WebfooterData}/>
      </>
    );
};

export default PrivacyPolicyPage;