import type { Metadata } from "next";
import LandingFooter from "@/components/footer/LandingFooter";

export const metadata: Metadata = {
  title: "Group & Family Stays | Luxury Villas & Apartments in North Goa",
  description: "",
};

export default function GroupAndFamilyLayout({
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
