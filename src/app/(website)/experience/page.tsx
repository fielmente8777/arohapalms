import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Things to Do Near Our Villas | Aroha Palms, North Goa",
  description: "Beaches, heritage, wellbeing and evenings out near Aroha Palms in Mandrem and Pilerne, North Goa.",
  alternates: { canonical: "https://arohapalms.com/experience/" },
  openGraph: { title: "Things to Do Near Our Villas | Aroha Palms, North Goa", description: "Beaches, heritage, wellbeing and evenings out near Aroha Palms in Mandrem and Pilerne, North Goa.", url: "https://arohapalms.com/experience/" },
};

import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import Activities from "./components/Activities";
import ExperienceGallery from "./components/ExperieceGallery";
import ExperienceCards from "./components/ExperienceCard";
import Intro from "./components/Intro";

import { experiencePageData } from "./pageData";

export default function Page() {
  return (
    <main>
      {/* <Intro {...experiencePageData.intro} /> */}

      <ExperienceGallery {...experiencePageData.experiences} />

      <Activities {...experiencePageData.Activites} />

      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}