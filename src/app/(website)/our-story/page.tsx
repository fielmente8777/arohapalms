import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | The Family Behind Aroha Palms",
  description: "The story of Aroha Palms, a family-run collection of private-pool villas and apartments in North Goa.",
  alternates: { canonical: "https://arohapalms.com/our-story/" },
  openGraph: { title: "Our Story | The Family Behind Aroha Palms", description: "The story of Aroha Palms, a family-run collection of private-pool villas and apartments in North Goa.", url: "https://arohapalms.com/our-story/" },
};

import React from "react";
import AboutSection from "./components/AboutSection";
import Mission from "./components/Mission";
import { OurStoryData } from "./pageData";
import OurVillas from "./components/OurVilla";
import Confidence from "./components/Confidence";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import AboutIntro from "./components/About";
import About from "./components/About";

export default function OurStory() {
  return (
    <main>
      <About {...OurStoryData.missionData} />
      <OurVillas {...OurStoryData.villasData} />
      {/* <AboutSection {...OurStoryData.about} />
      <Mission {...OurStoryData.missionData} />
      
      <Confidence {...OurStoryData.confidenceData} /> */}
      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}
