import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Aroha Palms",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://arohapalms.com/thank-you/" },
};

export default function ThankYou() {
  return (
    <main>
      <SectionWithContainer>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="max-w-sm w-full relative aspect-4/2 bg-background-dark rounded-md">
            <Image src="/logo.png" alt="Aroha Palms" fill className="object-contain p-2" />
          </div>
          <p className="">THANK YOU FOR YOUR ENQUIRY</p>
          <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary text-center">
            We will get back to you shortly!
          </h1>
          <ThankYouClient />
        </div>
      </SectionWithContainer>
    </main>
  );
}
