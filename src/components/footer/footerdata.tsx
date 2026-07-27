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
      href?: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const WebfooterData = {
  logo: "/footer1.png",

  bookNow: {
    text: "Book Now",
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
        label: "Location - Mandrem",
        href: "/destination/mandrem",
      },
      {
        label: "Location - Pilerne",
        href: "/destination/pilerne",
      },
      {
        label: "How To Reach",
        href: "/contact-us",
      },
      {
        label: "The Experience",
        href: "/experience",
      },
      {
        label: "Our Story",
        href: "/our-story",
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

  copyright: "© 2026 Aroha Palms. All Rights Reserved.",

  poweredBy: {
    text: "Powered by Fielmente",
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
      title: "Locations",
      links: [
        {
          title: "Mandrem, North Goa",
        },

        // {
        //   title: "Pilerne, North Goa",
        // },
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
