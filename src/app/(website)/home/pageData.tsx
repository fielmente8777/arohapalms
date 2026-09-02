import { contact } from "@/utils/constent";
import {
  CameraIcon,
  CarIcon,
  LeafIcon,
  PIcon,
  PoolIcon,
  RoomIcon,
  TrainIcon,
} from "@/utils/icons";

import { Images } from "lucide-react";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { BusIcon } from "../../../utils/icons";

export const homePageData = {
  hero: {
    videoSrc: "/videos/luxuryvilla.mp4",
    thumbNail: "/videos/luxuryvilla.png",
    images: [],
    title: "",
    subTitle: "",
    description: "",
    showBookingForm: true,
  },
  about: {
    title: "A Luxury Paradise In North Goa",
    description:
      "Set in the serene neighbourhoods of North Goa, Aroha Palms offers a collection of thoughtfully designed villas and apartments surrounded by lush, manicured gardens. Just a short drive from the coast, each stay blends calm, private living with effortless access to beaches, culture and experiences, a place that feels both indulgent and quietly removed.",
    button: {
      label: "Know More",
      href: "/about",
    },
  },
  // experience: {
  //   title: "EXPERIENCE BAREFOOT LUXURY",
  //   description: [
  //     "Set in the serene neighbourhoods of North Goa, Aroha Palms offers a collection of thoughtfully designed villas and apartments surrounded by lush, manicured gardens. Just a short drive from the coast, each stay blends calm, private living with effortless access to beaches, culture, and experiences—creating a space that feels both indulgent and quietly removed.",
  //   ],
  //   video: "/videos/aerialview.mp4",
  //   highlights: [
  //     "Luxury Stay",
  //     "Wellbeing",
  //     "Adventure",
  //     "Spacious",
  //     "Dining",
  //     "Greek Inspired",
  //   ],
  // },
  experience: {
    slides: [
      {
        image: "/home/dine.jpg",
        title: "Access",
      },
      {
        image: "/home/dine.jpg",
        title: "Wine & Dine",
      },
      {
        image: "/home/dine.jpg",
        title: "Pools & Leisure",
      },
    ],
  },
  // offers: {
  //   background: [
  //     "/images/03-Bed-1.jpg",
  //     "/images/AOB_9848-1-scaled.jpg",
  //     "/images/AOB_9629-scaled.jpg",
  //     "/images/00-Living-and-Dining-Apt-11.jpg",
  //     "/images/pool-games-1558622839.jpg",
  //     "/images/AOB_3528-scaled.jpg",
  //     "/images/AOB_3679-scaled.jpg",
  //     "/images/AOB_4059-1-1-scaled.jpg",
  //   ],
  //   title: "Monsoon Serenity - Offers Soon",

  //   cta: {
  //     text: "Click Here",
  //     href: contact.WhatsappCta,
  //   },
  // },
  // locations: {
  //   background: "/images/23-Pool_.jpg",

  //   title:
  //     "Experience Barefoot Luxury in the Heart of North Goa Near the Shore of Mandrem",

  //   label: "Explore Locations",

  //   cards: [
  //     {
  //       image: "/images/cover1.jpg",
  //       title: "Mandrem",
  //       description:
  //         "Set in Mandrem, enjoy calm, private stays just minutes from serene beaches, cafés, and North Goa's vibrant coastline.",
  //       cta: {
  //         text: "Explore Now",
  //         href: "/destination/mandrem",
  //       },
  //     },
  //     {
  //       image: "/images/AOB_0138.jpg",
  //       title: "Pilerne",
  //       description:
  //         "Located in Pilerne, enjoy a quiet, local setting with easy access to Candolim, Calangute, beaches, dining, and nightlife.",
  //       cta: {
  //         text: "Explore Now",
  //         href: "/destination/pilerne",
  //       },
  //     },
  //   ],
  // },
  // dine: {
  //   background: "/images/villa-paradiso-7d232a.webp",

  //   title: "Dine",

  //   description: [
  //     "Surrounded by lush, manicured gardens and quiet open spaces, dining at Aroha Palms is designed to feel relaxed, personal, and unhurried. Begin your day with a leisurely breakfast in soft morning light, enjoy easy afternoons with meals shared in breezy sit-outs, and wind down with intimate dinners under a starlit sky.",

  //     "Whether it's a quiet coffee, a slow meal with loved ones, or an evening spent lingering over conversations, every moment is set against a backdrop of calm greenery—where dining becomes less about formality and more about comfort, connection, and ease.",
  //   ],

  //   cta: {
  //     text: "Click Here",
  //     href: "/experience",
  //   },
  // },
  // amenities: {
  //   title: "Greek Inspired Villas and Apartments",

  //   amenities: [
  //     {
  //       icon: <PoolIcon />,
  //       title: "Private Pool",
  //     },
  //     {
  //       icon: <RoomIcon />,
  //       title: "Spacious Rooms",
  //     },
  //     {
  //       icon: <CarIcon />,
  //       title: "Concierge",
  //     },
  //     {
  //       icon: <CameraIcon />,
  //       title: "High Speed Internet",
  //     },
  //     {
  //       icon: <CameraIcon />,
  //       title: "Security",
  //     },
  //     {
  //       icon: <LeafIcon />,
  //       title: "Eco Luxury",
  //     },
  //   ],
  // },
  // outdoors: {
  //   title: "Explore the Outdoors",

  //   cards: [
  //     {
  //       image: "/images/paragliding.jpg",
  //       title: "Beach and Adventure",
  //       description:
  //         "Sunlit beaches, water sports, and coastal trails await nearby, perfect for ocean dips, exploration, and easygoing adventure.",
  //       cta: {
  //         text: "Click Here",
  //         href: "/destination",
  //       },
  //     },
  //     {
  //       image: "/images/churches-in.jpg",
  //       title: "Heritage and Culture",
  //       description:
  //         "Explore churches, forts, flea markets, and North Goa's history, culture, and everyday charm woven together effortlessly.",
  //       cta: {
  //         text: "Click Here",
  //         href: "/destination",
  //       },
  //     },
  //     {
  //       image: "/images/casino.jpg",
  //       title: "Casino & Nightlife",
  //       description:
  //         "Experience vibrant nights with cruise casinos, live music, and entertainment where energy and indulgence come alive after dark.",
  //       cta: {
  //         text: "Click Here",
  //         href: "/destination",
  //       },
  //     },
  //     {
  //       image: "/images/mediation.jpg",
  //       title: "Healing and Wellbeing",
  //       description:
  //         "Slow down with yoga, mindful moments, and calm surroundings that bring balance, relaxation, and a sense of inner ease.",
  //       cta: {
  //         text: "Click Here",
  //         href: "/destination",
  //       },
  //     },
  //   ],
  // },
  location: {
    tag: "Getting Here",
    title: "Seamlessly Connected to Every Destination",
    locations: [
      {
        icon: <BusIcon />,
        title: "Bus Station",
        distance: "XX Kilometers",
      },
      {
        icon: <TrainIcon />,
        title: "Train Station",
        distance: "XX Kilometers",
      },
      {
        icon: <PIcon />,
        title: "Airport",
        distance: "XX Kilometers",
      },
    ],
    mapImage: "/images/location-map.png",
  },
  testimonials: {
    testimonial: {
      image: "/home/review.jpg",
      tag: "Testimonials",
      title: "Appreciation From Our Guests",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Lorem Ipsum",
    },
  },
  nearbyActivities: {
    tag: "Beyond Aroha Palms",
    title: "Nearby Activities",

    activities: [
      {
        image: "/home/img5.png",
        title: "Museum of Goa (MOG)",
        description:
          "Pilerne Contemporary art galleries, open-air sculptures, and cultural exhibits right around the corner.",
      },
      {
        image: "/home/img6.jpg",
        title: "Candolim & Sinquerim Beaches",
        description:
          "Golden sands, watersports, and tranquil coastal sundowners just 10–15 minutes away.",
      },
      {
        image: "/home/img7.jpg",
        title: "Fort Aguada & Lighthouse",
        description:
          "Candolim Historic 17th-century Portuguese fortress offering panoramic sea and cliffside views.",
      },
    ],
  },
  stayWithUs: {
    tag: "Stay With Us",

    title:
      "Discover Greek-Inspired Villas and Apartments in Mandrem & Pilerne.",

    cards: [
      {
        location: "Mandrem",
        description:
          "Set in Mandrem, enjoy calm, private stays just minutes from serene beaches, cafés, and North Goa's scenic coastline.",

        image: "/home/img1.jpg",

        secondaryImage: "/home/img2.jpg",

        href: "/landing-page",

        showPlay: true,
      },

      {
        location: "Pilerne",
        description:
          "Located in Pilerne, enjoy a quiet, local setting with easy access to Candolim, Calangute, beaches, dining and nightlife.",

        image: "/home/img3.jpg",

        secondaryImage: "/home/img4.jpg",

        href: "/pilerne-lp",

        showPlay: true,
      },
    ],
  },
  // testimonials: {
  //   logo: "/test.png",

  //   title: "Moments Shared By Those Who Stayed",

  //   reviews: [
  //     {
  //       name: "Sarthak Chavan",
  //       avatar: "/images/reviews/reviewer-1.webp",
  //       googleIcon: "/icons/google.svg",
  //       time: "2 months ago",
  //       rating: 5,
  //       review: "Quiet and great value.",
  //     },
  //     {
  //       name: "Sarthak Chavan",
  //       avatar: "/images/reviews/reviewer-2.webp",
  //       googleIcon: "/icons/google.svg",
  //       time: "2 months ago",
  //       rating: 5,
  //       review: "Good villas.",
  //     },
  //     {
  //       name: "Vedant Chavan",
  //       avatar: "/images/reviews/reviewer-3.webp",
  //       googleIcon: "/icons/google.svg",
  //       time: "2 months ago",
  //       rating: 5,
  //       review:
  //         "The place and the staff are very polite and give homely vibes to all the guests. The hospitality was excellent.",
  //     },
  //     {
  //       name: "Atharva Burle",
  //       avatar: "/images/reviews/reviewer-4.webp",
  //       googleIcon: "/icons/google.svg",
  //       time: "2 months ago",
  //       rating: 5,
  //       review:
  //         "The villa was superb, and the manager treated us very well. We enjoyed our stay a lot.",
  //     },
  //   ],
  // },
};
