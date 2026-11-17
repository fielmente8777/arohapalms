"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  consumeEnquiryConversion,
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
    const conversion = consumeEnquiryConversion();
    if (conversion) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(conversion);
    }
  }, []);

  const text =
    enquiry?.waText ||
    buildWhatsappText({ name: "", phone: "", form: "thank-you" });

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary text-center">
        {enquiry ? "Thank you for your enquiry!" : "Contact Aroha Palms"}
      </h1>
      <p className="text-secondary text-center">
        {enquiry ? "Your enquiry has been saved. We will get back to you shortly." : "Speak with our team about availability and your stay."}
      </p>
      <a
        href={whatsappUrl(text)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-white font-medium shadow hover:bg-green-700"
      >
        {enquiry ? "Continue on WhatsApp" : "Enquire on WhatsApp"}
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
