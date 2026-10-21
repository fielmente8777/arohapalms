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
    // videoSrc: "/videos/luxuryvilla.mp4",
    // thumbNail: "/videos/luxuryvilla.png",
    images: [
      "/rooms/Imperial/AOB_4084-[1]_49_11zon.jpg",
      "/rooms/Grande/AOB_0138-scaled.jpg",
      // "/landing-page/unforgettable-6.jpg",
      "/rooms/Grande/AOB_0028[1]_3_11zon.jpg",
      // "/images/AOB_3733-scaled.jpg",
    ],
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
      href: "/our-story",
    },
    images: [
      "/rooms/Encanto/villa-serenity-ccdafa-1024x683.webp",
      "/landing-page/unforgettable-1.jpg",
      "/landing-page/unforgettable-3.jpg",
    ],
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
        image: "/rooms/Encanto/villa-serenity-ccdafa-1024x683.webp",
        // title: "Access",
      },
      {
        image: "/landing-page/unforgettable-1.jpg",
        // title: "Wine & Dine",
      },
      {
        image: "/landing-page/unforgettable-3.jpg",
        // title: "Pools & Leisure",
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
        distance: ["Mandrem - 500 Meters", "Pilerne - 550 Meters"],
      },
      {
        icon: <BusIcon />,
        title: "Train Station",
        distance: ["Mandrem - 17.5 Kilometers", "Pilerne - 18.5 Kilometers"],
      },
      {
        icon: <BusIcon />,
        title: "Airport",
        distance: ["Mandrem - 29.5 Kilometers", "Pilerne - 28.7 Kilometers"],
      },
    ],
    mapImage: "/images/Map.png",
  },
  testimonials: {
    image: "/images/AOB_0106.jpg",
    tagline: "Testimonials",
    title: "Appreciation From Our Guests",

    reviews: [
      {
        review:
          "We stayed at the property on a visit from the UK. They have two villas and both are amazingly well laid out, beautiful and comfortable. The lower villa is a classic Goan villa. It’s worth a visit only to admire the architecture. We stayed at the one in the back. The villas have huge rooms either comfortable beds and comfortable bathrooms. They have been tastefully decorated with large windows that allow light in. The staff are attentive and make sure the stay is comfortable. Overall, an amazing stay! Thanks.",
        name: "Praveen Kujal",
      },
      {
        review:
          "Anup is professional, knowledgeable, and reliable. He helped me organize my investments and provided a clear roadmap for my financial goals. If you want an advisor who listens and provides unbiased advice, look no further.  His advice is always grounded in deep research and logic, which gives me great confidence even when the markets are volatile. A top-tier financial consultant.",
        name: "Sumedh Naik",
      },
      {
        review:
          "Our stay at this villa exceeded all expectations! The service was exceptional—the staff was attentive, friendly, and always ready to help with anything we needed. The villas are stunning, with a Greek-inspired design that adds a touch of elegance to the whole experience. The private pool was a luxurious addition, and the views of the backwaters and greenery from our room were breathtaking. The location in Mandrem made it easy to explore the nearby beaches and enjoy the local culture. The food was fantastic, with a wide variety of dishes at very reasonable prices. We left feeling completely refreshed and can’t wait to return.",
        name: "Akshit Goel",
      },
      {
        review:
          "a very warm and comfortable stay in a beautiful property...a very well maintained fully functional villa With a great location A very warm hospitable and helpful staff. special Kudos and mention to Attik the House Supervisor and his wife Irene... Many many thanks for making our stay so comfortable",
        name: "Shailendra Rawat",
      },
      {
        review:
          "Perfect Staycation I had an absolutely relaxing and rejuvenating stay at this 1BHK villa. The place was beautifully maintained—clean, cozy, and thoughtfully designed with all the comforts of home. The private space made it perfect for a peaceful staycation.. The highlight was definitely the food. Every meal was delicious and freshly prepared, with great attention to taste and presentation. the experience felt luxurious and homely at the same time.. Perfect for couples —highly recommended for anyone looking to unwind and enjoy great food in a comfortable, private setting.",

        name: "Shivam Hemade",
      },
      {
        review:
          "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",

        name: "Rushikesh Nimbhorkar",
      },
    ],
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

        image: "/landing-page/gallery/1.webp",

        secondaryImage: "/rooms/Magnifica/magnifica2.webp",

        href: "/destination/mandrem",

        showPlay: false,
      },

      {
        location: "Pilerne",
        description:
          "Located in Pilerne, enjoy a quiet, local setting with easy access to Candolim, Calangute, beaches, dining and nightlife.",

        image: "/landing-page/2.jpg",

        secondaryImage: "/rooms/Imperial/AOB_3422[1]_47_11zon.jpg",

        href: "/destination/pilerne",

        showPlay: false,
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
