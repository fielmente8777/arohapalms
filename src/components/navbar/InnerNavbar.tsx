"use client";

import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";

import NavMenu from "./NavMenu";
import { InnerNavData } from "./navData";

export default function InnerNavbar() {
  return (
    <header className="w-full">
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

        {InnerNavData.showLinks && (
          <ul className="hidden lg:flex items-center gap-10">
            {InnerNavData.links.map((item) => (
              <li key={item.label} className="relative group">
                {/* {item.href ? (
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
                )} */}
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-2 text-blue hover:text-black transition"
                >
                  {item.label}
                  {item.children && (
                    <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">
                      ▼
                    </span>
                  )}
                </Link>

                {item.children && (
                  <ul
                    className="absolute left-0 top-full z-[999] min-w-[220px] hidden min-w-[250px] rounded-lg bg-white shadow-xl group-hover:block"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-6 py-3 hover:bg-gray hover:text-white"
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

        <MenuButton color="blue" />
      </nav>

      <NavMenu />
    </header>
  );
}
