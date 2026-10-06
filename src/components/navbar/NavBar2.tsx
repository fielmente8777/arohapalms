"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";
import { usePathname } from "next/navigation";

const NavBar2 = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Pages with a top background hero image where navbar should start transparent
  const normalizedPath = pathname ? pathname.replace(/\/$/, "") : "";
  const isHeroPage =
    normalizedPath === "" ||
    normalizedPath === "/destination/mandrem" ||
    normalizedPath === "/destination/pilerne" ||
    normalizedPath.startsWith("/gallery");

  const isSolid = !isHeroPage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div>
        <header
          className={` fixed top-0 left-0 z-50 w-full
        transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        will-change-transform
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <nav
            className={`max_screen_width flex items-center justify-between border-b border-white/40 pl-4 md:pl-6 transition-all duration-300 ${
              isSolid ? "bg-navy shadow-md" : "bg-black/20 backdrop-blur-md"
            }`}
          >
            {/* MENU */}
            <div className="">
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
