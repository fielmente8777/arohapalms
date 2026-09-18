import type { Metadata } from "next";
import LandingFooter from "@/components/footer/LandingFooter";
import NewFooter from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "4 BHK & 5 BHK | Luxury Villas & Apartments in North Goa",
  description: "",
};

export default function FourBhkAndFiveBhkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <LandingFooter />
    </>
  );
}
