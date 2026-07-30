import { contact } from "@/utils/constent";

export const experiencePageData = {
  intro: {
    title: "Discover Luxury",

    description: [
      "Immerse yourself in the quiet rhythm of Aroha Palms, where lush gardens, open skies, and serene spaces invite moments of stillness and reflection. Begin your mornings with gentle movement, yoga, and mindful pauses that bring you closer to a sense of balance and ease.",

      "Beyond your private retreat, discover Goa in its many forms—sunlit beaches and water adventures, vibrant heritage and culture, rejuvenating wellness experiences, and lively evenings on cruise casinos. Just a short drive from the coast, Aroha Palms offers the perfect setting to explore freely, then return to a space that feels calm, indulgent, and entirely your own.",
    ],
  },

  experiences: {
    cards: [
      {
        image: "/images/beach-trees-.jpg",
        title: "Beach & Adventure",
        description:
          "Scuba Diving, Snorkeling, Jet Skiing, Parasailing, White Water Rafting, Flyboarding, Wakeboarding, Dolphin Watching, Kayaking, Dudhsagar Waterfalls.",
      },

      {
        image: "/images/basilica-of-bom-jesus.jpg",
        title: "Heritage & Culture",
        description:
          "Explore Goa's historic churches, Portuguese architecture, museums, forts, local markets and vibrant cultural heritage.",
      },

      {
        image: "/images/mediation.jpg",
        title: "Healing & Wellbeing",
        description:
          "Yoga, meditation, wellness therapies, spa experiences and peaceful retreats surrounded by nature.",
      },

      {
        image: "/images/casino.jpg",
        title: "Casino & Nightlife",
        description:
          "Cruise casinos, live music, nightlife, fine dining and entertainment experiences across Goa.",
      },
    ],

    cta: {
      text: "Enquire For These Experiences",
      href: contact.WhatsappCta,
    },
  },
  Activites: {
    title: {
      prefix: "Experience &",
      words: ["Breathe", "Revive", "Rejuvenate"],
    },

    slides: [
      {
        image: "/images/dolphins.jpg",
        label: "Dolphin Watching",
      },
      {
        image: "/images/1casino.jpg",
        label: "Cruise & Casino",
      },
      {
        image: "/images/suba.jpg",
        label: "Scuba Diving",
      },
      {
        image: "/images/para.jpg",
        label: "Paragliding",
      },
    ],
  },
};
