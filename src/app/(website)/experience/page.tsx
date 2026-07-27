import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import Activities from "./components/Activities";
import ExperienceCards from "./components/ExperienceCard";
import Intro from "./components/Intro";

import { experiencePageData } from "./pageData";

export default function Page() {
  return (
    <main>
      <Intro {...experiencePageData.intro} />

      <ExperienceCards {...experiencePageData.experiences} />

      <Activities {...experiencePageData.Activites} />

      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}