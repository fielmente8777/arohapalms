import { title } from "process";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Aroha Palms | Luxury Villas & Apartments in North Goa",
  description:
    "Discover Aroha Palms, offering luxury villas and apartments in North Goa across Mandrem and Pilerne. Enjoy private stays, lush surroundings, nearby beaches, dining, and memorable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer {...WebfooterData} />
    </>
  );
}
