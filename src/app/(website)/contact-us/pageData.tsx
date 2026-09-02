import { contact, mapLinks } from "@/utils/constent";
import { PlaneIcon, RailIcon } from "@/utils/icons";

export const contactPageData = {
  title: "Contact Us",

  contact: {
    backgroundImage: "/images/23-Pool_.jpg",

    cards: [
      {
        title: "CALL",

        links: [
          {
            label: "+91 98342 20573",
            href: contact.callCta,
          },
          {
            label: "Click To WhatsApp",
            href: contact.WhatsappCta,
          },
        ],
      },

      {
        title: "MAIL",

        links: [
          {
            label: "arohapalms@gmail.com",
            href: "mailto:arohapalms@gmail.com",
          },
        ],
      },

      {
        title: "LOCATE US",

        locations: [
          {
            title: "Aroha Palms Mandrem",
            mapUrl: mapLinks.mandrem,

            address: [
              "House No. 290,",
              "Marathwada,",
              "Mandrem, Goa",
              "403527",
            ],
           
          },

          {
            title: "Aroha Palms Majestic",
            mapUrl: mapLinks.majestic,

            address: ["House No 67A,", "Pilerne, Goa", "403511"],
          },

          {
            title: "Aroha Palms Grande",
            mapUrl: mapLinks.grande,

            address: ["House No 67B,", "Pilerne, Goa", "403511"],
          },
        ],
      },
    ],
  },
  approach: {
    heading: "About Aroha Palms",
    desc: `Aroha Palms is a hospitality brand and property operated by Akahata Hospitality Private Limited, a company incorporated in India. All bookings, payments, and guest services are provided by Akahata Hospitality Private Limited.

GST: 30AAXCA4249B1ZV
CIN: U55101GA2022PTC015434
Registered Address: House No.211/1-A 7, B-704, Block B, Sancoale, Zuari Nagar, Vasco Da Gama, South Goa.`,

    title: "Approach",

    description:
      "Aroha Palms is a destination in itself, set amidst serene, manicured gardens in Mandrem. The journey here unfolds through quiet village roads and swaying palms, leading you into a space that feels calm, private, and effortlessly luxurious—just a short drive from the coastline yet worlds away in its stillness.",

    sections: [
      {
        title: "Manohar International Airport (MOPA)",
        icon: <PlaneIcon />,

        routes: [
          {
            distance: "29 KM",
            duration: "(45 Min)",
            location: "From Mandrem",
          },
          {
            distance: "31 KM",
            duration: "(40 Min)",
            location: "From Pilerne",
          },
        ],
      },

      {
        title: "Dabolim International Airport",
        icon: <PlaneIcon />,

        routes: [
          {
            distance: "53 KM",
            duration: "(1 Hr, 30 Min)",
            location: "From Mandrem",
          },
          {
            distance: "35 KM",
            duration: "(40 Min)",
            location: "From Pilerne",
          },
        ],
      },

      {
        title: "Thivim Railway Station | Konkan Railway Division",
        icon: <RailIcon />,

        routes: [
          {
            distance: "24 KM",
            duration: "(47 Min)",
            location: "From Aroha Palms Mandrem",
          },
          {
            distance: "20 KM",
            duration: "(37 Min)",
            location: "From Aroha Palms Majestic",
          },
        ],
      },
    ],

    footer: {
      text: "Owned & Operated by AKAHATA HOSPITALITY PRIVATE LIMITED",
      gst: "CIN: U55101GA2022PTC015434  GSTIN: 30AAXCA2498B1ZV",
    },
  },
};
