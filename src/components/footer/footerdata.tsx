import { contact } from "@/utils/constent";

interface FooterData {
  logo: string;
  tagLine: string;
  description: string;
  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label?: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  tagLine: "Resorts · Khajuraho",
  description:
    "Luxury villas & apartments in the serene neighbourhoods of North Goa. Barefoot luxury, private living, and effortless access to beaches and culture.",
  cta: [
    {
      label: "CALL NOW",
      href: contact.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Location",
      links: [
        {
          label: "Mandrem, North Goa",
          href: "https://maps.app.goo.gl/m2HPpmkyeBQAMsjZ7",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "WhatsApp: " + contact.phone[0],
          href: contact.WhatsappCta,
        },
        {
          label: "Call: 022-41642345",
          href: "tel:02241642345",
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};

export const pilerneFooterData: FooterData = {
  logo: "/logo.png",
  tagLine: "Resorts · Khajuraho",
  description:
    "Luxury villas in the serene neighbourhoods of North Goa. Barefoot luxury, private living, and effortless access to beaches and culture.",
  cta: [
    {
      label: "CALL NOW",
      href: contact.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Location",
      links: [
        {
          label: "Villa Majestic",
          href: "https://maps.app.goo.gl/e7nBBKNYk1GQLxZo6",
        },
        {
          label: "Villa Grande",
          href: "https://maps.app.goo.gl/XLBRFiDys3waquzw9",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "WhatsApp: " + contact.phone[0],
          href: contact.WhatsappCta,
        },
        {
          label: "Call: 022-41642345",
          href: "tel:02241642345",
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
