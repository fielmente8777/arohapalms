import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";
import HouseKeepingRules from "./component/House";
import { houseKeepingRulesData } from "./pageData";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";


export const metadata: Metadata = {
  title: "House Keeping Rules - Aroha Palms",

  description:
    "Read the Aroha Palms House Keeping Rules to ensure a comfortable stay. Learn about housekeeping services, guest responsibilities, safety guidelines, and property etiquette.",

  keywords: [
    "Aroha Palms House Keeping Rules",
    "Housekeeping Rules",
    "Guest House Rules",
    "Villa Housekeeping",
    "Guest Guidelines",
    "Luxury Villa Goa",
    "Goa Villa Stay",
    "Housekeeping Policy",
    "Property Rules",
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
    canonical: "https://arohapalms.com/house-keeping-rules/",
  },

  openGraph: {
    title: "House Keeping Rules - Aroha Palms",
    description:
      "Review the Aroha Palms House Keeping Rules for housekeeping services, guest responsibilities, and a pleasant stay.",
    url: "https://arohapalms.com/house-keeping-rules/",
    siteName: "Aroha Palms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "House Keeping Rules - Aroha Palms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "House Keeping Rules - Aroha Palms",
    description:
      "Read the House Keeping Rules and guest guidelines for a comfortable stay at Aroha Palms.",
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

const HouseKeepingRulesPage = () => {
  return (
    <>
    <Navbar/>
    <SectionWithContainer>
      <HouseKeepingRules {...houseKeepingRulesData} />
    </SectionWithContainer>
    <Footer {...WebfooterData}/>
    </>
  );
};

export default HouseKeepingRulesPage;
