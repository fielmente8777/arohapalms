import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";

import GuestArrival from "./components/GuestArrival";
import { guestArrivalData } from "./pageData";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Guest Arrival Instructions | Aroha Palms",
  description:
    "Read the guest arrival instructions and check-in information for Aroha Palms Pilerne.",
};

const GuestArrivalPilernePage = () => {
  return (
    <>
      <Navbar />

      <SectionWithContainer>
        <GuestArrival {...guestArrivalData} />
      </SectionWithContainer>

      <Footer {...WebfooterData} />
    </>
  );
};

export default GuestArrivalPilernePage;