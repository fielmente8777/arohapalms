"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }
  // Prefill the villa the guest is looking at, e.g. /mandrem/villa-paradiso/ -> "Villa Paradiso"
  const slug = (pathName || "").split("/").filter(Boolean)[1] || "";
  const villa = /^(villa|suite)-/.test(slug)
    ? slug.split("-").map((w) => (w === "de" ? w : w[0].toUpperCase() + w.slice(1))).join(" ")
    : "";
  const text = encodeURIComponent(
    `Hi Aroha Palms Team,\n\nI'm interested in ${villa ? villa : "a stay at Aroha Palms"}.\n\nPlease share availability and rates for my dates.\n\nThank you!`,
  );
  return (
    <div className={`fixed z-20 cursor-pointer left-3 bottom-[76px] lg:bottom-24`}>
      <Link
        href={`https://wa.me/${whatsAppNumber.replace(/\D/g, "")}?text=${text}`}
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
