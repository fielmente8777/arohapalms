import React from "react";
import AboutSection from "./components/AboutSection";
import Mission from "./components/Mission";
import { OurStoryData } from "./pageData";
import OurVillas from "./components/OurVilla";
import Confidence from "./components/Confidence";

export default function OurStory() {
  return (
    <main>
      <AboutSection {...OurStoryData.about} />
      <Mission {...OurStoryData.missionData} />
      <OurVillas {...OurStoryData.villasData} />
      <Confidence {...OurStoryData.confidenceData} />
    </main>
  );
}
