"use client";

import { usePathname } from "next/navigation";
import LandingNavbar from "./LandingNavbar";
import WebsiteNav from "./WebsiteNav";
import HomeNavbar from "./HomeNavbar";
import InnerNavbar from "./InnerNavbar";

export default function Navbar() {
  const pathName = usePathname();
  if (pathName === "/landing-page/") {
    return <LandingNavbar />;
  }
  if (pathName === "/thank-you/") {
    return null;
  }
  if (pathName === "/") {
    return <HomeNavbar />;
  }

  // All other pages
  else {
    return <InnerNavbar />;
  }
  //  else {
  //   return <WebsiteNav />;
  // }
}
