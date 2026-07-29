import VideoBanner from "@/components/banners/VideoBanner";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import AccommodationSection from "./component/AccommodationSection";
import ExperienceSection from "./component/ExperienceSection";
import FaqSection from "./component/FaqSection";
import FeaturesSection from "./component/FeaturesSection";
import { landingPageData } from "./component/pageData";
import Testimonials from "./component/Testimonials";
import UnforgettableSection from "./component/UnforgettableSection";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <SlidingTitle items={landingPageData.offer} />
      <VideoBanner {...landingPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary"
        containerClassName="space-y-4"
      >
        <Form1 />
        {/* <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        /> */}
      </SectionWithContainer>
      <UnforgettableSection {...landingPageData.unforgettableSection} />
      <SlidingTitle items={landingPageData.offer} ariaHidden />
      <AccommodationSection {...landingPageData.accommodationSection} />
      <SlidingTitle items={landingPageData.offer} ariaHidden />
      <FeaturesSection {...landingPageData.featuresSection} />
      <ExperienceSection {...landingPageData.experienceSection} />
      <Testimonials {...landingPageData.testimonials} />
      <FaqSection {...landingPageData.faq} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-t border-primary"
        containerClassName="space-y-4"
      >
        <Form1 />
        {/* <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        /> */}
      </SectionWithContainer>
    </main>
  );
}
