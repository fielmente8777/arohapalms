import WhatsappForm from "@/components/forms/WhatsappForm";
import { SectionWithContainer } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Banner from "../landing-page/component/Banner";
import { landingPageData } from "./components/pagedata";
import UnforgettableSection from "../landing-page/component/UnforgettableSection";
import ExperienceSection from "../landing-page/component/ExperienceSection";
import FeaturesSection from "../landing-page/component/FeaturesSection";
import Testimonials from "../landing-page/component/Testimonials";
import FaqSection from "../landing-page/component/FaqSection";
import AccommodationSection from "./components/AccommodationSection";
import NearbyPlaces from "./components/Nearby";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <SlidingTitle items={landingPageData.offer} />
      <Banner {...landingPageData.hero} isSliding={true} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary box-shadow"
        containerClassName="space-y-4"
      >
        <WhatsappForm />
        {/* <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        /> */}
      </SectionWithContainer>
      <UnforgettableSection {...landingPageData.unforgettableSection} />
      <SlidingTitle items={landingPageData.offer}ariaHidden />
      <AccommodationSection {...landingPageData.accommodationSection} />
      <SlidingTitle items={landingPageData.offer} ariaHidden />
      <FeaturesSection {...landingPageData.featuresSection} />
      <NearbyPlaces {...landingPageData.nearbyPlaces} />

      <ExperienceSection {...landingPageData.experienceSection} />
      <Testimonials {...landingPageData.testimonials} />
      <SlidingTitle items={landingPageData.offer} ariaHidden/>
      <FaqSection {...landingPageData.faq} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-t border-primary box-shadow"
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
