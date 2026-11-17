"use client";

/**
 * Enquiry plumbing (client doc L5, T4, T5).
 *
 * 1. captureAttribution() runs on every page load and keeps utm_*, gclid, fbclid
 *    and the landing page for the visit (sessionStorage, first touch wins).
 * 2. saveEnquiry() posts the enquiry to Eazotel (same endpoint the other site
 *    forms use) with the attribution and one lead ID, before anything else.
 * 3. The thank-you page (same tab) reads the stored enquiry, pushes ONE
 *    dataLayer event "enquiry_saved" only when Eazotel confirmed the save,
 *    and offers "Continue on WhatsApp" with the message prefilled.
 */

import { contact } from "@/utils/constent";

export const WHATSAPP_NUMBER = "919834220573"; // wa.me format: digits only
export const PHONE_TEL = "tel:+919834220573";

const ATTR_KEY = "aroha_attr";
const ENQ_KEY = "aroha_enquiry";
const ATTR_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof ATTR_PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

const safeGet = (store: Storage | undefined, key: string) => {
  try {
    return store?.getItem(key) ?? null;
  } catch {
    return null;
  }
};
const safeSet = (store: Storage | undefined, key: string, value: string) => {
  try {
    store?.setItem(key, value);
  } catch {
    /* storage blocked: carry on without it */
  }
};

export const captureAttribution = () => {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  ATTR_PARAMS.forEach((p) => {
    const v = params.get(p);
    if (v) found[p] = v.slice(0, 200);
  });
  const existing = getAttribution();
  // A new ad click (any tagged param) replaces the stored set; otherwise keep the first touch
  if (Object.keys(found).length || !existing.landing_page) {
    const next: Attribution = {
      ...(Object.keys(found).length ? {} : existing),
      ...found,
      landing_page: window.location.pathname,
      referrer: document.referrer ? document.referrer.slice(0, 200) : undefined,
    };
    safeSet(window.sessionStorage, ATTR_KEY, JSON.stringify(next));
  }
};

export const getAttribution = (): Attribution => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(safeGet(window.sessionStorage, ATTR_KEY) || "{}");
  } catch {
    return {};
  }
};

const newLeadId = () => {
  try {
    return "AP-" + crypto.randomUUID().slice(0, 8).toUpperCase();
  } catch {
    return "AP-" + Math.random().toString(36).slice(2, 10).toUpperCase();
  }
};

export interface EnquiryInput {
  name: string;
  phone: string; // with country code, e.g. +919812345678
  email?: string;
  villa?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
  form: string; // which form sent it, e.g. "villa-popup"
}

export interface StoredEnquiry {
  leadId: string;
  saved: boolean;
  villa?: string;
  waText: string;
  fired?: boolean;
  ts: number;
}

export const buildWhatsappText = (e: EnquiryInput, leadId?: string) => {
  const lines = ["Hi Aroha Palms Team,", "", "I'm interested in booking a stay at Aroha Palms.", ""];
  if (e.name) lines.push(`Name: ${e.name}`);
  if (e.villa) lines.push(`Villa: ${e.villa.trim()}`);
  if (e.checkIn) lines.push(`Check-in: ${e.checkIn}`);
  if (e.checkOut) lines.push(`Check-out: ${e.checkOut}`);
  if (e.guests) lines.push(`Guests: ${e.guests}`);
  if (e.message) lines.push(`Message: ${e.message}`);
  if (leadId) lines.push(`Enquiry ref: ${leadId}`);
  lines.push("", "Please share the best available options and rates.", "", "Thank you!");
  return lines.join("\n");
};

export const whatsappUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/** Saves to Eazotel first. Never throws: returns saved=false if the save failed. */
export const saveEnquiry = async (e: EnquiryInput): Promise<StoredEnquiry> => {
  const leadId = newLeadId();
  const attr = getAttribution();
  const attrLines = Object.entries(attr)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`);

  const description = [
    `Lead ID: ${leadId}`,
    e.villa && `Villa: ${e.villa.trim()}`,
    e.checkIn && `Check-in: ${e.checkIn}`,
    e.checkOut && `Check-out: ${e.checkOut}`,
    e.guests && `Guests: ${e.guests}`,
    e.message && `Message: ${e.message}`,
    `Form: ${e.form}`,
    ...attrLines,
  ]
    .filter(Boolean)
    .join("\n");

  const source =
    attr.gclid || attr.gbraid || attr.wbraid
      ? "google_ads"
      : attr.fbclid
        ? "meta_ads"
        : attr.utm_source || "website";

  let saved = false;
  try {
    const res = await fetch("https://nexon.eazotel.com/eazotel/addcontacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Domain: contact.formDomain,
        Name: e.name,
        email: e.email || "",
        Contact: e.phone,
        check_in: e.checkIn || "",
        check_out: e.checkOut || "",
        Description: description,
        created_from: `webform:${source}`,
        source_url: window.location.href,
        hId: contact.formHid,
      }),
    });
    const data = await res.json().catch(() => ({}));
    saved = res.ok && data?.Status !== false;
  } catch {
    saved = false;
  }

  const stored: StoredEnquiry = {
    leadId,
    saved,
    villa: e.villa,
    waText: buildWhatsappText(e, leadId),
    fired: false,
    ts: Date.now(),
  };
  safeSet(window.sessionStorage, ENQ_KEY, JSON.stringify(stored));
  return stored;
};

export const readStoredEnquiry = (): StoredEnquiry | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = safeGet(window.sessionStorage, ENQ_KEY);
    return raw ? (JSON.parse(raw) as StoredEnquiry) : null;
  } catch {
    return null;
  }
};

export const markEnquiryFired = (e: StoredEnquiry) => {
  safeSet(window.sessionStorage, ENQ_KEY, JSON.stringify({ ...e, fired: true }));
};

/** Go to the thank-you page in the SAME tab (popups get blocked on phones). */
export const goToThankYou = () => {
  window.location.assign("/thank-you/");
};

/** For forms that post to Eazotel themselves (useForm): remember the result for the thank-you page. */
export const rememberEnquiry = (saved: boolean, e: EnquiryInput) => {
  const leadId = newLeadId();
  const stored: StoredEnquiry = {
    leadId,
    saved,
    villa: e.villa,
    waText: buildWhatsappText(e, leadId),
    fired: false,
    ts: Date.now(),
  };
  safeSet(window.sessionStorage, ENQ_KEY, JSON.stringify(stored));
  return stored;
};

/** Attribution as text lines, for forms that build their own Eazotel description. */
export const attributionLines = () =>
  Object.entries(getAttribution())
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
