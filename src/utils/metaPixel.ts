"use client";

/** Meta pixel helpers (pixel 1266443945568311 is loaded in the root layout). */
type Fbq = (...args: unknown[]) => void;

const fbq = (): Fbq | null =>
  typeof window !== "undefined" && typeof (window as unknown as { fbq?: Fbq }).fbq === "function"
    ? (window as unknown as { fbq: Fbq }).fbq
    : null;

export const pixelPageView = () => fbq()?.("track", "PageView");

/** Saved enquiry. eventID = lead ID so a later Conversions API upload de-duplicates. */
export const pixelLead = (leadId: string, villa?: string) =>
  fbq()?.("track", "Lead", { content_name: villa || "enquiry", content_category: "villa_enquiry" }, { eventID: leadId });

/** WhatsApp or call button taps (secondary signal, not the optimisation event). */
export const pixelContact = (method: "whatsapp" | "call") =>
  fbq()?.("track", "Contact", { content_category: method });
