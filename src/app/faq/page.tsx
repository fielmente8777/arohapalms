import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Aroha Palms Villas & Apartments, North Goa",
  description: "Answers on capacity, pools, check-in, cooks, parking and house rules at Aroha Palms, North Goa.",
  alternates: { canonical: "https://arohapalms.com/faq/" },
  openGraph: { title: "FAQ | Aroha Palms Villas & Apartments, North Goa", description: "Answers on capacity, pools, check-in, cooks, parking and house rules at Aroha Palms, North Goa.", url: "https://arohapalms.com/faq/" },
};

import { faqData } from "./pageData";
import FAQSection from "./components/FaoSection";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";
import JsonLd from "@/components/seo/JsonLd";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.sections.flatMap((section) =>
      section.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />
      <main className="pt-16 md:pt-28">
      <FAQSection {...faqData} />
    </main>

    <Footer {...WebfooterData}/>

    </>
  );
}
