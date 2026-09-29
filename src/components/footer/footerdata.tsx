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

export const WebfooterData = {
  logo: "/home/newf.png",
  cin: "U55101GA2022PTC015434",
  gstin: "30AAXCA4249B1ZV",

  bookNow: {
    text: "Find A Villa",
    href: "/booking",
  },

  links: {
    title: "Links",
    items: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Our Story",
        href: "/our-story",
      },
      {
        label: "Location - Mandrem",
        href: "/destination/mandrem",
      },
      {
        label: "Location - Pilerne",
        href: "/destination/pilerne",
      },
      {
        label: "The Experience",
        href: "/experience",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },

      {
        label: "Articles",
        href: "/articles",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
      },
    ],
  },

  quickLinks: {
    title: "Quick Links",
    items: [
      {
        label: "Frequently Asked Questions",
        href: "/faq",
      },
      {
        label: "Guest Arrival Instructions - Mandrem",
        href: "/arrival-instructions/mandrem",
      },
      {
        label: "Guest Arrival Instructions - Pilerne",
        href: "/arrival-instructions/pilerne",
      },
      {
        label: "House Keeping Rules & Guest Guidelines",
        href: "/house-keeping-rules",
      },
      {
        label: "Cancellation & Refund Policy",
        href: "/cancellation-refund-policy",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Terms And Conditions",
        href: "/terms-and-conditions",
      },
    ],
  },

  social: {
    title: "Social",
    items: [
      {
        label: "Facebook",
        href: "https://facebook.com",
      },
      {
        label: "Instagram",
        href: "https://instagram.com",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
      },
    ],
  },

  copyright: "© AROHA PALMS 2026. ALL RIGHTS RESERVED.",

  poweredBy: {
    text: "Crafted By Fielmente",
    href: "https://fielmente.com",
  },
};

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
          href: "+919834220573",
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};

export const WebData: FooterData = {
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
          label: "Mandrem",
          href: "/landing-page/",
        },
        {
          label: "Pilerne",
          href: "/pilerne-lp/",
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
          href: "+919834220573",
        },
        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
