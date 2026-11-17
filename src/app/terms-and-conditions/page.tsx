import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Aroha Palms",
  description: "Terms and conditions for stays booked with Aroha Palms, North Goa.",
  alternates: { canonical: "https://arohapalms.com/terms-and-conditions/" },
  openGraph: { title: "Terms and Conditions | Aroha Palms", description: "Terms and conditions for stays booked with Aroha Palms, North Goa.", url: "https://arohapalms.com/terms-and-conditions/" },
};

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

import TermsConditions from "./components/TermsConditions";
import { termsConditionsData } from "./pageData";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-24 lg:pt-28">
        <TermsConditions {...termsConditionsData} />
      </main>
      <Footer {...WebfooterData} />
    </>
  );
}