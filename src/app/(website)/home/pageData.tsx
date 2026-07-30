import { contact } from "@/utils/constent";
import {
  CameraIcon,
  CarIcon,
  LeafIcon,
  PoolIcon,
  RoomIcon,
} from "@/utils/icons";

export const homePageData = {
  hero: {
    video: "/videos/luxuryvilla.mp4",
    subtitle: "Breathe, Revive, Rejuvenate",

    title: "A luxury Paradise IN NORTH GOA",

    cta: {
      text: "Reserve ",
      href: contact.WhatsappCta,
    },
  },
  experience: {
    title: "EXPERIENCE BAREFOOT LUXURY",
    description: [
      "Set in the serene neighbourhoods of North Goa, Aroha Palms offers a collection of thoughtfully designed villas and apartments surrounded by lush, manicured gardens. Just a short drive from the coast, each stay blends calm, private living with effortless access to beaches, culture, and experiences—creating a space that feels both indulgent and quietly removed.",
    ],
    video: "/videos/aerialview.mp4",
    highlights: [
      "Luxury Stay",
      "Wellbeing",
      "Adventure",
      "Spacious",
      "Dining",
      "Greek Inspired",
    ],
  },
  offers: {
    background: "/images/sdr1.webp",

    title: "Monsoon Serenity - Offers Soon",

    cta: {
      text: "Click Here",
      href: contact.WhatsappCta,
    },
  },
  locations: {
    background: "/landing-page/bnr.jpg",

    title:
      "Experience Barefoot Luxury in the Heart of North Goa Near the Shore of Mandrem",

    label: "Explore Locations",

    cards: [
      {
        image: "/images/cover1.jpg",
        title: "Mandrem",
        description:
          "Set in Mandrem, enjoy calm, private stays just minutes from serene beaches, cafés, and North Goa's vibrant coastline.",
        cta: {
          text: "Explore Now",
          href: "/destination/mandrem",
        },
      },
      {
        image: "/images/AOB_0138.jpg",
        title: "Pilerne",
        description:
          "Located in Pilerne, enjoy a quiet, local setting with easy access to Candolim, Calangute, beaches, dining, and nightlife.",
        cta: {
          text: "Explore Now",
          href: "/destination/pilerne",
        },
      },
    ],
  },
  dine: {
    background: "/images/villa-paradiso-7d232a.webp",

    title: "Dine",

    description: [
      "Surrounded by lush, manicured gardens and quiet open spaces, dining at Aroha Palms is designed to feel relaxed, personal, and unhurried. Begin your day with a leisurely breakfast in soft morning light, enjoy easy afternoons with meals shared in breezy sit-outs, and wind down with intimate dinners under a starlit sky.",

      "Whether it's a quiet coffee, a slow meal with loved ones, or an evening spent lingering over conversations, every moment is set against a backdrop of calm greenery—where dining becomes less about formality and more about comfort, connection, and ease.",
    ],

    cta: {
      text: "Click Here",
      href: "/experience",
    },
  },
  amenities: {
    title: "Greek Inspired Villas and Apartments",

    amenities: [
      {
        icon: <PoolIcon />,
        title: "Private Pool",
      },
      {
        icon: <RoomIcon />,
        title: "Spacious Rooms",
      },
      {
        icon: <CarIcon />,
        title: "Concierge",
      },
      {
        icon: <CameraIcon />,
        title: "High Speed Internet",
      },
      {
        icon: <CameraIcon />,
        title: "Security",
      },
      {
        icon: <LeafIcon />,
        title: "Eco Luxury",
      },
    ],
  },
  outdoors: {
    title: "Explore the Outdoors",

    cards: [
      {
        image: "/images/paragliding.jpg",
        title: "Beach and Adventure",
        description:
          "Sunlit beaches, water sports, and coastal trails await nearby, perfect for ocean dips, exploration, and easygoing adventure.",
        cta: {
          text: "Click Here",
          href: "/destination",
        },
      },
      {
        image: "/images/churches-in.jpg",
        title: "Heritage and Culture",
        description:
          "Explore churches, forts, flea markets, and North Goa's history, culture, and everyday charm woven together effortlessly.",
        cta: {
          text: "Click Here",
          href: "/destination",
        },
      },
      {
        image: "/images/casino.jpg",
        title: "Casino & Nightlife",
        description:
          "Experience vibrant nights with cruise casinos, live music, and entertainment where energy and indulgence come alive after dark.",
        cta: {
          text: "Click Here",
          href: "/destination",
        },
      },
      {
        image: "/images/mediation.jpg",
        title: "Healing and Wellbeing",
        description:
          "Slow down with yoga, mindful moments, and calm surroundings that bring balance, relaxation, and a sense of inner ease.",
        cta: {
          text: "Click Here",
          href: "/destination",
        },
      },
    ],
  },
  testimonials: {
    logo: "/test.png",

    title: "Moments Shared By Those Who Stayed",

    reviews: [
      {
        name: "Sarthak Chavan",
        avatar: "/images/reviews/reviewer-1.webp",
        googleIcon: "/icons/google.svg",
        time: "2 months ago",
        rating: 5,
        review: "Quiet and great value.",
      },
      {
        name: "Sarthak Chavan",
        avatar: "/images/reviews/reviewer-2.webp",
        googleIcon: "/icons/google.svg",
        time: "2 months ago",
        rating: 5,
        review: "Good villas.",
      },
      {
        name: "Vedant Chavan",
        avatar: "/images/reviews/reviewer-3.webp",
        googleIcon: "/icons/google.svg",
        time: "2 months ago",
        rating: 5,
        review:
          "The place and the staff are very polite and give homely vibes to all the guests. The hospitality was excellent.",
      },
      {
        name: "Atharva Burle",
        avatar: "/images/reviews/reviewer-4.webp",
        googleIcon: "/icons/google.svg",
        time: "2 months ago",
        rating: 5,
        review:
          "The villa was superb, and the manager treated us very well. We enjoyed our stay a lot.",
      },
    ],
  },
};
