"use client";
import { enCodeText } from "@/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <div className={`fixed z-20 cursor-pointer max-lg:right-3 max-lg:bottom-[148px] lg:bottom-24 lg:left-3`}>
      <Link
        href={`https://wa.me/${whatsAppNumber.replace(/\s+/g, "")}?text=${enCodeText}`}
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={26} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
