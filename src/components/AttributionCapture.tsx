"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { pixelContact, pixelPageView } from "@/utils/metaPixel";
import { captureAttribution } from "@/utils/enquiry";

/** Keeps utm / gclid / fbclid from the landing URL for the visit (client doc T4). */
export default function AttributionCapture() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    captureAttribution();
    // The layout fires PageView on first load; fire it again on client-side route changes
    if (first.current) first.current = false;
    else pixelPageView();
  }, [pathname]);

  // Meta "Contact" on any WhatsApp / call link tap, site-wide
  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      if (/wa\.me|api\.whatsapp\.com/.test(href)) pixelContact("whatsapp");
      else if (href.startsWith("tel:")) pixelContact("call");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
