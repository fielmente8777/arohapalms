import WhatsappForm from "@/components/forms/WhatsappForm";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Banner from "./components/Banner";
import { landingPageData } from "./components/pagedata";
import UnforgettableSection from "./components/UnforgettableSection";
import ExperienceSection from "./components/ExperienceSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import AccommodationSection from "./components/AccommodationSection";
import NearbyPlaces from "./components/Nearby";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Banner {...landingPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary"
        containerClassName="space-y-4"
      >
        <WhatsappForm />
        {/* <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        /> */}
      </SectionWithContainer>
      <UnforgettableSection {...landingPageData.unforgettableSection} />
      <AccommodationSection {...landingPageData.accommodationSection} />
      <FeaturesSection {...landingPageData.featuresSection} />
      <NearbyPlaces {...landingPageData.nearbyPlaces} />
      <ExperienceSection {...landingPageData.experienceSection} />
      <Testimonials {...landingPageData.testimonials} />
      <FaqSection {...landingPageData.faq} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-t border-primary"
        containerClassName="space-y-4"
      >
        <WhatsappForm />
        {/* <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        /> */}
      </SectionWithContainer>
    </main>
  );
}
