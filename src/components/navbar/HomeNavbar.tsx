"use client";

import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";
import { HomeNavData } from "./navData";

export default function HomeNavbar() {
  return (
    <>
      <header className="w-full">
        <nav className="max_width flex items-center justify-between py-5">
          <Link href="/">
            <div className="relative h-20 w-52">
              <Image
                src={HomeNavData.logo}
                alt="Aroha Palms"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {HomeNavData.showHamburger && (
            <MenuButton color="white" />
          )}
        </nav>
      </header>

      <NavMenu />
    </>
  );
}