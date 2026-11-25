import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aroha Palms | Private-Pool Villas & Apartments in North Goa",
  description: "Private-pool villas and apartments in quiet Mandrem and Pilerne, North Goa. Book direct with Aroha Palms.",
  alternates: { canonical: "https://arohapalms.com/" },
  openGraph: { title: "Aroha Palms | Private-Pool Villas & Apartments in North Goa", description: "Private-pool villas and apartments in quiet Mandrem and Pilerne, North Goa. Book direct with Aroha Palms.", url: "https://arohapalms.com/" },
};

import Image from "next/image";
import AboutSection from "./home/components/AboutSection";

import Banner from "./home/components/Banner";
import Experience from "./home/components/Experience";

import LocationSection from "./home/components/LocationSection";
// import NearbyActivities from "./home/components/Nearby";
import StayWithUs from "./home/components/Stay";

import Testimonials from "./home/components/Testimonials";
import { homePageData } from "./home/pageData";
import { homeHeroPhotos } from "@/data/villaPhotos";
import Place from "./home/components/Place";
import About from "./our-story/components/About";
import { OurStoryData } from "./our-story/pageData";
import JsonLd from "@/components/seo/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aroha Palms",
  legalName: "Akahata Hospitality Pvt Ltd",
  url: "https://arohapalms.com",
  logo: "https://arohapalms.com/logo.png",
  description:
    "Family-run collection of private luxury villas and serviced apartments in North Goa, India (Mandrem & Pilerne).",
  telephone: "+91-98342-20573",
  email: "reserve@arohapalms.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Goa",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/aroha_palms/",
    "https://www.facebook.com/profile.php?id=61577418721550",
    "https://www.linkedin.com/company/aroha-palms/",
  ],
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={organizationSchema} />
      <Banner {...homePageData.hero} images={homeHeroPhotos} showBookingForm />
      <AboutSection {...homePageData.about} />
      {/* <Experience {...homePageData.experience} /> */}
      {/* <OfferBanner {...homePageData.offers} />
      <Locations {...homePageData.locations} />
      <Dine {...homePageData.dine} />
      <Amenities amenities={homePageData.amenities} outdoors={homePageData.outdoors} /> */}
      {/* <Outdoors {...homePageData.outdoors} /> */}
      <Place {...homePageData.stayWithUs} />
      <About {...OurStoryData.missionData} isHomePage />
      {/* <StayWithUs {...homePageData.stayWithUs} /> */}
      {/* Nearby Activities hidden: photos not owned/licensed (client W14) */}
      {/* <NearbyActivities {...homePageData.nearbyActivities} /> */}
      <LocationSection {...homePageData.location} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}
