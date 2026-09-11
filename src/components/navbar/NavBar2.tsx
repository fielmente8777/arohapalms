"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <header
          className={`fixed flex items-center justify-center left-0 top-0 w-full z-[100] transition-all duration-500`}
        >
          <nav className={`max_screen_width flex items-center justify-between border-b border-white/40 pl-4 md:pl-6 ${
            isScrolled ? "bg-navy shadow-md" : "bg-transparent"
          }
            `}>
            {/* MENU */}
            <div className="shrink-0">
              <MenuButton color="white" />
            </div>

            {/* LOGO */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <div className="relative aspect-[3.8/1] w-[140px] md:w-[213px]">
                <Image
                  src="/logo.png"
                  alt="Aroha Palms"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* FIND A ROOM */}
            <Link
              href="#form"
              className="hidden items-center bg-primary px-6 text-xs font-medium uppercase text-white transition-colors duration-300 hover:bg-[#c49954] md:flex md:h-[59px] md:px-8"
            >
              FIND A ROOM
            </Link>
          </nav>
        </header>
      </div>
      {/* NAV MENU */}
      <NavMenu side="left" />
    </>
  );
};

export default NavBar2;
