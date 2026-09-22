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
