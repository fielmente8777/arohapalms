"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` max_screen_width
        fixed left-0 top-0 z-[100] w-full
        transition-all duration-500 
        ${isScrolled ? "bg-navy shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max_screen_width mx-auto flex items-center justify-between pl-4 md:pl-6 border-b border-white/40">
        {/* MENU */}
          <div className="shrink-0">
          <MenuButton color="white" />
        </div>

        {/* LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="relative w-[140px] md:w-[213px] aspect-[3.8/1]">
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
          className=" hidden
            md:flex md:h-[59px]
            items-center
            bg-primary
            px-6
            text-xs
            font-medium
            uppercase
            text-white
            transition-colors
            duration-300
            hover:bg-[#c49954]
            md:px-8
          "
        >
          FIND A ROOM
        </Link>
      </nav>
    </header>
  );
};

export default NavBar2;
