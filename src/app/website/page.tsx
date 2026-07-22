import Amenities from "./home/components/Amenities";
import HeroBanner from "./home/components/Banner";
import Dine from "./home/components/Dine";
import Experience from "./home/components/Experience";
import Locations from "./home/components/Location";
import OfferBanner from "./home/components/OfferBanner";
import Outdoors from "./home/components/Outdoor";
import Testimonials from "./home/components/Testimonials";
import { homePageData } from "./home/pageData";


export default function HomePage() {
  return (
    <main>
      <HeroBanner {...homePageData.hero} />
      <Experience {...homePageData.experience} />
      <OfferBanner {...homePageData.offers}/>
      <Locations {...homePageData.locations}/>
      <Dine {...homePageData.dine} />
      <Amenities {...homePageData.amenities} />
      <Outdoors {...homePageData.outdoors} />
      <Testimonials {...homePageData.testimonials} />

    </main>
  );
}