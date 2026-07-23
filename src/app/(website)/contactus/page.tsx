import ContactHero from "./components/ContactHero";
import ContactGrid from "./components/ContactGrid";

import { contactPageData } from "./pageData";
import Approach from "./components/Approach";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";

export default function Page() {
  return (
    <main>
      <ContactHero title={contactPageData.title} />

      <ContactGrid {...contactPageData.contact} />
      <Approach {...contactPageData.approach} />
      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}
