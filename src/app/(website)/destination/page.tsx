import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import StayCards from "./components/StayCard";
import StayIntro from "./components/StayIntro";
import { yourStayPageData } from "./pagedata";


export default function YourStayPage() {
  return (
    <main>
      <StayIntro {...yourStayPageData.intro} />

      <StayCards stays={yourStayPageData.stays} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}