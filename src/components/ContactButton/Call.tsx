"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCall } from "react-icons/io5";

function Call({ callNumber }: { callNumber: string }) {
  const pathName = usePathname();
  
    if (pathName === "/thank-you/") {
      return null;
    }
  return (
    <div
      className={`fixed z-20 cursor-pointer max-lg:right-3 max-lg:bottom-[96px] lg:bottom-10 lg:left-3`}
    >
      <Link
        href={`tel: ${callNumber ? callNumber : "+911234567890"} `}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg bg-blue-700 hover:bg-primary text-white/95 hover:shadow-2xl transition-all"
      >
        <IoCall size={24} color="white" />
        <span className="sr-only">call</span>
      </Link>
    </div>
  );
}

export default Call;
