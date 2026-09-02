import AboutSection from "./home/components/AboutSection";

import Banner from "./home/components/Banner";
import Experience from "./home/components/Experience";


import LocationSection from "./home/components/LocationSection";
import NearbyActivities from "./home/components/Nearby";
import StayWithUs from "./home/components/Stay";

import Testimonials from "./home/components/Testimonials";
import { homePageData } from "./home/pageData";


export default function HomePage() {
  return (
    <main>
      <Banner {...homePageData.hero} showBookingForm />
      <AboutSection {...homePageData.about} />
      <Experience {...homePageData.experience} />
      {/* <OfferBanner {...homePageData.offers} />
      <Locations {...homePageData.locations} />
      <Dine {...homePageData.dine} />
      <Amenities amenities={homePageData.amenities} outdoors={homePageData.outdoors} /> */}
      {/* <Outdoors {...homePageData.outdoors} /> */}
      <StayWithUs {...homePageData.stayWithUs} />
      <NearbyActivities {...homePageData.nearbyActivities} />
      <LocationSection {...homePageData.location} />
      <Testimonials {...homePageData.testimonials} />

    </main>
  );
}