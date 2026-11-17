"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  markEnquiryFired,
  readStoredEnquiry,
  StoredEnquiry,
  whatsappUrl,
  buildWhatsappText,
} from "@/utils/enquiry";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function ThankYouClient() {
  const [enquiry, setEnquiry] = useState<StoredEnquiry | null>(null);

  useEffect(() => {
    const e = readStoredEnquiry();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage is only readable after mount
    setEnquiry(e);
    // One conversion per saved enquiry: never on a plain visit or a reload (client doc T5)
    if (e && e.saved && !e.fired && Date.now() - e.ts < 30 * 60 * 1000) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "enquiry_saved",
        lead_id: e.leadId,
        event_id: e.leadId, // same ID for Meta pixel + Conversions API de-duplication
        villa: e.villa || "",
      });
      markEnquiryFired(e);
    }
  }, []);

  const text =
    enquiry?.waText ||
    buildWhatsappText({ name: "", phone: "", form: "thank-you" });

  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={whatsappUrl(text)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-white font-medium shadow hover:bg-green-700"
      >
        Continue on WhatsApp
      </a>
      {enquiry?.leadId && (
        <p className="text-sm text-secondary">Your enquiry reference: {enquiry.leadId}</p>
      )}
      <p className="text-sm text-secondary text-center max-w-md">
        Prefer to talk? Call or WhatsApp us on{" "}
        <a href="tel:+919834220573" className="underline">
          +91 98342 20573
        </a>
        .
      </p>
      <Link href="/" className="text-sm underline text-primary">
        Back to Home
      </Link>
    </div>
  );
}
