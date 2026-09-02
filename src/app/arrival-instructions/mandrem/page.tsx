import { Metadata } from "next";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";
import { SectionWithContainer } from "@/components/sectionComponants";
import GuestArrival from "./components/GuestArrival";
import { guestArrivalData } from "./pageData";

export const metadata: Metadata = {
  title: "Guest Arrival Instructions - Mandrem | Aroha Palms",
  description:
    "Guest arrival instructions for Aroha Palms, Mandrem. Find directions, transportation details, check-in process, and useful information before your stay.",
};

export default function GuestArrivalPage() {
  return (
    <>
      <Navbar />

      <SectionWithContainer sectionClassName="py-20">
        <GuestArrival {...guestArrivalData} />
      </SectionWithContainer>

      <Footer {...WebfooterData} />
    </>
  );
}