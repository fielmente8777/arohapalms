import WhatsappForm from "@/components/forms/WhatsappForm";
import { SectionWithContainer } from "@/components/sectionComponants";
// import SlidingTitle from "@/components/sliders/SlidingTitle";
import AccommodationSection from "./component/AccommodationSection";
import Banner from "./component/Banner";
import ExperienceSection from "./component/ExperienceSection";
import FaqSection from "./component/FaqSection";
import FeaturesSection from "./component/FeaturesSection";
import { landingPageData } from "./component/pageData";
import Testimonials from "./component/Testimonials";
import UnforgettableSection from "./component/UnforgettableSection";

export default function LandingPage() {
  return (
    <main className="bg-background">
      {/* <SlidingTitle items={landingPageData.offer} /> */}
      <Banner {...landingPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary box-shadow"
        containerClassName="space-y-4"
      >
        <WhatsappForm />
        
      </SectionWithContainer>
      <UnforgettableSection {...landingPageData.unforgettableSection} />
      {/* <SlidingTitle items={landingPageData.offer} ariaHidden /> */}
      <AccommodationSection {...landingPageData.accommodationSection} />
      {/* <SlidingTitle items={landingPageData.offer} ariaHidden /> */}
      <FeaturesSection {...landingPageData.featuresSection} />
      
      <ExperienceSection {...landingPageData.experienceSection} />
      <Testimonials {...landingPageData.testimonials} />
      {/* <SlidingTitle items={landingPageData.offer} ariaHidden /> */}
      <FaqSection {...landingPageData.faq} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-t border-primary box-shadow "
        containerClassName="space-y-4"
      >
        <WhatsappForm />
        
      </SectionWithContainer>
    </main>
  );
}
