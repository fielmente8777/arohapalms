import ImageBanner from "@/components/banners/ImageBanner";
import { landingPageData } from "./component/pageData";
import AccommodationSection from "./component/AccommodationSection";
import FeaturesSection from "./component/FeaturesSection";
import Testimonials from "./component/Testimonials";
import ExperienceSection from "./component/ExperienceSection";
import FaqSection from "./component/FaqSection";
import Gallery from "./component/Gallery";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <ImageBanner {...landingPageData.hero} />
      <AccommodationSection {...landingPageData.accommodationSection} />
      <FeaturesSection {...landingPageData.featuresSection} />
      <Gallery {...landingPageData.gallery} />
      <ExperienceSection {...landingPageData.experienceSection} />
      <Testimonials {...landingPageData.testimonials} />
      <FaqSection {...landingPageData.faq} />
    </main>
  );
}
