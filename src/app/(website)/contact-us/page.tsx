import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aroha Palms, North Goa",
  description: "Call or WhatsApp +91 98342 20573 to plan your stay at Aroha Palms in Mandrem or Pilerne, North Goa.",
  alternates: { canonical: "https://arohapalms.com/contact-us/" },
  openGraph: { title: "Contact Us | Aroha Palms, North Goa", description: "Call or WhatsApp +91 98342 20573 to plan your stay at Aroha Palms in Mandrem or Pilerne, North Goa.", url: "https://arohapalms.com/contact-us/" },
};

import ContactHero from "./components/ContactHero";
import ContactGrid from "./components/ContactGrid";

import { contactPageData } from "./pageData";
import Approach from "./components/Approach";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import ContactUs from "./components/ContactSection";
import Register from "./components/Register";

export default function Page() {
  return (
    <main>
      <ContactUs {...contactPageData.contactSection} />
      <Register {...contactPageData.registeredAddressSection} />
      {/* <ContactHero title={contactPageData.title} />

      <ContactGrid {...contactPageData.contact} />
      <Approach {...contactPageData.approach} />
      <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}
