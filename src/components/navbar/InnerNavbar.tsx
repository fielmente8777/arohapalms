"use client";

import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";

import NavMenu from "./NavMenu";
import { InnerNavData } from "./navData";

export default function InnerNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="max_width flex items-center justify-between py-5">
        <Link href="/">
          <div className="relative h-20 w-52">
            <Image
              src={InnerNavData.logo}
              alt="Aroha Palms"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {InnerNavData.showLinks && (
            <ul className="hidden lg:flex items-center gap-10">
              {InnerNavData.links.map((item) => (
                <li key={item.label} className="relative group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-blue hover:text-black transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-blue hover:text-black">
                      {item.label}
                      <span>▼</span>
                    </button>
                  )}

                  {item.children && (
                    <ul className="absolute left-0 mt-4 hidden min-w-[220px] rounded-lg bg-white shadow-xl group-hover:block">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-6 py-3 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </ul>

        <MenuButton color="primary" />
      </nav>

      <NavMenu />
    </header>
  );
}
