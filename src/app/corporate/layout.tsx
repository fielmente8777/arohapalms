import type { Metadata } from "next";
import LandingFooter from "@/components/footer/LandingFooter";

export const metadata: Metadata = {
  title: "Corporate | Luxury Villas & Apartments in North Goa",
  description: "",
};

export default function CorporateLayout({
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
