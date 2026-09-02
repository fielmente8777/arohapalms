"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useWebContext } from "@/context-api/WebContext";
import { InnerNavData } from "./navData";

const NavMenu = () => {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpenNavBar ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenNavBar]);

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${
        isOpenNavBar ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => setIsOpenNavBar(false)}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          isOpenNavBar ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Side Menu */}
      <aside
        className={`absolute top-0 right-0 h-screen w-full max-w-[500px] bg-[#F8F3E6] transition-transform duration-500 ease-in-out ${
          isOpenNavBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpenNavBar(false)}
          className="absolute top-8 right-8 text-2xl text-[#16386C] hover:rotate-90 transition-transform duration-300"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Menu */}
        <nav className="pt-24 px-12">
          <ul className="flex flex-col gap-6">
            {InnerNavData.links.map((link) => (
              <li key={link.label} className="w-full">
                {link.children ? (
                  <>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setOpenMenu(
                          openMenu === link.label ? null : link.label
                        );
                        setIsOpenNavBar(false);
                      }}
                      className="flex w-full items-center justify-between text-sm md:text-lg font-primary tracking-[0.12em] text-[#005b96] hover:text-[#011f4b] transition-colors"
                    >
                      <span>{link.label}</span>

                      <span
                        onClick={() =>
                          setOpenMenu(
                            openMenu === link.label ? null : link.label
                          )
                        }
                        className="text-lg"
                      >
                        <span
                          className={`transition-transform duration-300 ${
                            openMenu === link.label ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </span>
                    </Link>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openMenu === link.label ? "max-h-60 mt-4" : "max-h-0"
                      }`}
                    >
                      <ul className="ml-6 flex flex-col gap-3">
                    
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsOpenNavBar(false)}
                              className="block text-sm text-[#16386C] hover:text-[#011f4b] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    // onClick={() => setIsOpenNavBar(false)}
                    className="block text-sm md:text-lg font-primary tracking-[0.12em] text-[#005b96] hover:text-[#011f4b] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default NavMenu;
