import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Stay | Aroha Palms, North Goa",
  description: "Choose your stay at Aroha Palms: villas and apartments in Mandrem and Pilerne, North Goa.",
  alternates: { canonical: "https://arohapalms.com/destination/" },
  openGraph: { title: "Your Stay | Aroha Palms, North Goa", description: "Choose your stay at Aroha Palms: villas and apartments in Mandrem and Pilerne, North Goa.", url: "https://arohapalms.com/destination/" },
};

import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import StayCards from "./components/StayCard";
import StayIntro from "./components/StayIntro";
import { yourStayPageData } from "./pagedata";


export default function YourStayPage() {
  return (
    <main className="pt-20 md:pt-24">
      <StayIntro {...yourStayPageData.intro} />

      <StayCards stays={yourStayPageData.stays} />
      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}