import { title } from "process";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";
import LandingFooter from "@/components/footer/LandingFooter";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
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
