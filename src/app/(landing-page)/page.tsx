import WhatsappForm from "@/components/forms/WhatsappForm";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import AccommodationSection from "./component/AccommodationSection";
import Banner from "./component/Banner";
import ExperienceSection from "./component/ExperienceSection";
import FaqSection from "./component/FaqSection";
import FeaturesSection from "./component/FeaturesSection";
import { landingPageData } from "./component/pageData";
import NearbyPlaces from "../MandremLp/components/Nearby";
import Testimonials from "./component/Testimonials";
import UnforgettableSection from "./component/UnforgettableSection";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <SlidingTitle items={landingPageData.offer} />
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
      {/* <NearbyPlaces {...landingPageData.nearbyPlaces} /> */}
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
