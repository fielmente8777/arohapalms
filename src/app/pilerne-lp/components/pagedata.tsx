import {
  BathroomIcon,
  EvChargingFacilityIcon,
  HighSpeedInternetIcon,
  JacuzziIcon,
  KitchenIcon,
  SmartTvIcon,
  SwimmingPoolIcon,
  WorkStationIcon,
} from "@/utils/amenitiesIcon";
import {
  BathTubIcon,
  BedIcon,
  ConciergeIcon,
  EcoLuxuryIcon,
  FreeWifiIcon,
  GuestIcon,
  PoolIcon,
  SecurityIcon,
  SpaciousRoomIcon,
} from "@/utils/landingIcon";

export const createWhatsappCta = (villaName: string) => {
  const message = `Hi Aroha Palms Team,

I'm interested in booking a stay at ${villaName}.

Please share the best available options and rates.

Thank you!`;

  return `https://wa.me/919834220573?text=${encodeURIComponent(message)}`;
};

export const landingPageData = {
  offer: [
    "Limited time offer valid till <span class='text-[#A20000]'>30th September.</span> Use discount code : <span class='text-[#A20000]'>PILERNE20</span>",
  ],
  hero: {
    tag: "A Paradise in North Goa",
    title: "Barefoot Luxury, Quietly your Own",
    description:
      "Greek-inspired villas & apartments with private pools, lush gardens and effortless access to Goa's finest beaches. ",
    benefits:
      "<span class='text-[#A20000]'>Save 25%</span> when you book direct • No prepayment • Free cancellation",
    image: "/hero-banner.jpg",
    images: [
      // 1. Front / Exterior / Pool
      // "/hero-banner.jpg",
      "/rooms/Grande/AOB_0131_copy[1]_9_11zon.jpg",
      "/rooms/Imperial/AOB_4084-[1]_49_11zon.jpg",
      "/rooms/Majestic/AOB_3512[1]_22_11zon.jpg",
      // 2. Bedrooms / Rooms / Lofts
      "/rooms/Majestic/AOB_3470[1]_21_11zon.jpg",
      "/rooms/Grande/AOB_0064[1]_6_11zon.jpg",
      "/rooms/Imperial/AOB_3422[1]_47_11zon.jpg",
      "/rooms/Imperial/AOB_9917[1]_34_11zon.jpg",
      // 3. Interior / Living / Lounge / Dining / Kitchen
      "/rooms/Grande/AOB_0042[1]_4_11zon.jpg",
      "/rooms/Imperial/AOB_3761[1]_50_11zon.jpg",
      "/rooms/Majestic/AOB_3670[1]_26_11zon.jpg",
      "/rooms/Imperial/AOB_9784[1]_38_11zon.jpg",
      // 4. Washrooms / Bathrooms
      "/rooms/Imperial/AOB_3371[1]_54_11zon.jpg",
      "/rooms/Grande/AOB_9798[1]_16_11zon.jpg",
      "/rooms/Majestic/AOB_3733[1]_28_11zon.jpg",
    ],
    // video: {
    //   src: "/video/Aroha-video.mp4",
    //   poster: "/video/Aroha-video.png",
    // },
  },

  unforgettableSection: {
    // title: "Unwind, Explore, and Create Unforgettable Memories at Aroha Palms.",
    // description:
    //   "Escape to the peaceful charm of Aroha Palms, where lush gardens, open spaces, and tranquil surroundings offer the perfect place to relax and recharge. Just minutes from Goa's beaches, water sports, heritage sites, wellness retreats, and vibrant nightlife, you can explore the best of the destination before returning to the comfort of your private retreat.",
    tag: "AROHA PALMS, PILERNE – NORTH GOA",
    title: "Old-World Goan Character, Quietly Reimagined",
    description: [
      "Welcome to Aroha Palms Pilerne, two private luxury villas set in Pilerne village, which has stayed rustic despite sitting minutes from the North Goa tourist belt.",
      "Whether you are seeking an intimate family escape, a multi-generational reunion, a wellness retreat, or a grand destination event, Aroha Palms Pilerne brings together spacious living, private pools, and bespoke hospitality all just a few minutes drive from the golden sands of three of North Goa's most-visited beaches - Candolim, Calangute, and Baga - with none of the outside noise reaching your gate. You wake in a quiet village and reach the coast before the morning heat.",
      "Relax, Rejuvenate, Revive."
    ],
    images: [
      "/landing-page/unforgettable-1.jpg",
      "/landing-page/unforgettable-2.jpg",
      "/landing-page/unforgettable-3.jpg",
      "/landing-page/unforgettable-4.jpg",
      // "/landing-page/unforgettable-5.jpg",
      // "/landing-page/unforgettable-6.jpg",
    ],
    buttons: [
      {
        label: "ENQUIRE NOW",
        link: "#form",
        // link: contact.WhatsappCta,
      },
      // {
      //   label: "Book Now",
      //   link: "#form",
      // },
    ],
  },

  accommodationSection: {
    tagline: "OUR ACCOMMODATION",
    title: "Boutique Homes Crafted for Your Perfect Goa Getaway",
    description:
      "Explore every villa, apartment and suite across Pilerne, each one thoughtfully designed for private, unhurried Goa stays.",
    note: "Some trips need room for everyone. Two villas can be combined to create a larger private estate for families, while twin villas are ideal for celebrations and group stays, the full compound accommodates up to 26 guests. Whatever the size, everything stays private, and the hosting is handled.",
    cards: [
      {
        title: "Villa Majestic",
        discountCode: "PILERNE20",
        span: "The Heritage One",
        type: "Villa",
        description:
          "Grand Portuguese Walls, Soft Sunlit Calm",
        amenities: [

          { icon: <BedIcon />, label: "5 Bedrooms + 2 Lofts" },
          { icon: <BathTubIcon />, label: "5 Baths" },

          { icon: <GuestIcon />, label: "Sleeps up to 14" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "Bonfire" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <SwimmingPoolIcon />, label: "Dedicated Pool" },
          { icon: <WorkStationIcon />, label: "Work Station" },

          //   { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
          { icon: <JacuzziIcon />, label: "5 Private Jacuzzis" },
        ],
        originalPrice: "₹ 35,000/night",
        startingPrice: "From ₹ 35,000/night",
        moreInfo: {
          title:
            "Grand Portuguese Walls, Soft Sunlit Calm",
          roomInfo: [
            "7,500 sq ft ",
            "5 Bedrooms + 2 Lofts",
            "5 Baths",
            "Private 10m Pool ",
            "Sleeps up to 14",
            "2 Dedicated Staffs",
          ],
          description: [
            "Villa Majestic is built on an old Portuguese house, and the bones of it still show — thick walls, generous proportions, the kind of deep shade that only comes from a home designed before air conditioning existed. The restoration kept all of that and added contemporary interiors around it. Across 7,500 square feet, five bedrooms and two lofts sleep up to fourteen guests.",
            "Mornings begin with breakfast beside the private 10-metre pool, sunlight filtering through the palms. Afternoons belong to whoever wants them — Candolim beach ten minutes down the road, Calangute fifteen, Baga eighteen, or a work desk in a beautifully composed room and no reason to leave at all. Evenings drift into candlelit dinners under open skies. It suits families, celebrations, and groups who want the villa to run itself so nobody has to organise anything.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Majestic stands out as Pilerne's most accommodating private villa due to its:",
              list: [
                "<b>7,500 square feet</b> across five bedrooms and two lofts, sleeping up to 14",
                "<b>Ten minutes to Candolim, fifteen to Calangute, eighteen to Baga</b> — three of North Goa's best-known beaches within easy reach, with Anjuna, Sinquerim, Morjim and Vagator a short drive further",
                "A restored old Portuguese house paired with contemporary interiors, set in a quiet residential village away from the crowds",
                "Private 10-metre swimming pool with poolside dining, the natural centre of the villa from breakfast through to evening drinks",
                "Fully equipped kitchen, high-speed Wi-Fi, and dependable power backup — suited to long stays and remote work",
                "Each Villa Has Two Powder Rooms",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Freshly cooked meals served in the villa — from poolside breakfast to multi-course dinners, with menu consultation before arrival (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven arrivals and departures for Mopa (GOX) and Dabolim (GOI) (prior booking required).",
                "<b>Dining & Experience Reservations:</b> Restaurant bookings, beach club reservations, spa appointments, and curated coastal itineraries arranged by our concierge team.",
                "<b>Event Options:</b> Configurable arrangements and bespoke hosting for special occasions, agreed at the time of booking.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                "All rates are quoted on a full compound buyout, per-night basis for up to 14 guests.",
                "<b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping are available for emergencies 24/7.",
                "<b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals. Restaurant delivery is also available.",
                "<b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
                "<b>House guidelines:</b> Smoking on balconies and outdoor areas only. No pets inside the villa. Music indoors between 10 PM and 8 AM, no loud music after 10 PM. The pool is unsupervised — please stay close to children at all times.",
              ],
            },
          ],
          review: {
            author: "Praveen Kujal",
            description:
              "We stayed at the property on a visit from the UK. They have two villas and both are amazingly well laid out, beautiful and comfortable. The lower villa is a classic Goan villa. It’s worth a visit only to admire the architecture. We stayed at the one in the back. The villas have huge rooms either comfortable beds and comfortable bathrooms. They have been tastefully decorated with large windows that allow light in. The staff are attentive and make sure the stay is comfortable. Overall, an amazing stay! Thanks.",
          },
        },
        location: "Mandrem",
        images: [
          "https://lh3.googleusercontent.com/d/1Ae2jINBXsQAt6hlANAf5es4Ly-P_W00u",
          "https://lh3.googleusercontent.com/d/1y57gRQBG5_-3N3OP_uG9pT1YXNM3JSei",
          "https://lh3.googleusercontent.com/d/15cpLYfghLZm_iSd2IOeo4nQLjC8bh_Wy",
          "https://lh3.googleusercontent.com/d/1Z1vuFVVF0L2_4FoZvFHgcUTKSf55fm9a",
          "https://lh3.googleusercontent.com/d/1W_JNK4dv9H1vlQMUW8Qv7ci1IXxJRSBy",
          "https://lh3.googleusercontent.com/d/1fn1z33GXAfKvtjKEi9V5GrvcdXxzV3iV",
          "https://lh3.googleusercontent.com/d/1Ym3OP3_fogqeguOPAx4-ntWGmQKeOJ3q",
          "https://lh3.googleusercontent.com/d/1B0Z44BwYawsoZmQlJX5ZS-ZD40AtPFP6",
          "https://lh3.googleusercontent.com/d/1EAk6jPsBGBbO5kRSUCcW4xrHuHLrxKT5",
          "https://lh3.googleusercontent.com/d/1zsCC6c-LugweL-PngyjnrU2IAY7Du-Wp",
          "https://lh3.googleusercontent.com/d/1-vRXs7AmssYFq8U8A5km8a4Y1FGoAUoV",
          "https://lh3.googleusercontent.com/d/1l3FcDfyAH3jkptvoEE6zZY5TPAUFpfQz",
          "https://lh3.googleusercontent.com/d/1A56wEg0HNinw_c6kGRF1W3z_m3kpxKCp",
          "https://lh3.googleusercontent.com/d/1MkNzdk55_LmVORPqve1ehvLxOYDtNVoC",
          "https://lh3.googleusercontent.com/d/1GK6sTc641VnApTeIjIK62aquly1s5EnZ",
          "https://lh3.googleusercontent.com/d/1wqt19RJKZUjzb8vemcBxiZcuTlYp8dxq",
          "https://lh3.googleusercontent.com/d/1kEXnjOYHFXhJkHMyH4LBRMJuNY6cJFqL",
        ],
        cta: {
          label: "Enquire Now",
          href: "#form",
          // href: createWhatsappCta("Aroha Palms Villa Magnifica"),
        },
      },
      {
        title: "Villa Grande",
        discountCode: "PILERNE20",
        span: "The Collector's House",
        type: "Villa",
        description: "A Collector's Sanctuary of Stone and Sky",
        amenities: [

          { icon: <BedIcon />, label: "6 Bedrooms" },
          { icon: <BathTubIcon />, label: "6 Ensuite Baths" },

          { icon: <GuestIcon />, label: "Sleeps up to 12" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "Bonfire" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <SwimmingPoolIcon />, label: "Dediacted Pool" },
          { icon: <WorkStationIcon />, label: "Work Station" },

          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
          { icon: <JacuzziIcon />, label: "6 Private Jacuzzis" },
        ],
        originalPrice: "₹ 48,000",
        startingPrice: "From ₹ 48,000/night",
        moreInfo: {
          title: "A Collector's Sanctuary of Stone and Sky",
          roomInfo: [
            "8,000 sq ft ",
            "6 Bedrooms",
            "6 Ensuite Baths",
            "5 Private Jacuzzis",
            "Private 10m Pool ",
            "Sleeps up to 12",
            "2 Dedicated Staffs",
          ],
          description: [
            "Villa Grande is the newer of the pair and the more deliberate — 8,000 square feet of white, three-storey home built from the ground up as an art villa, wrapped in manicured gardens and old-world verandahs. Six curated bedrooms open into light, five of them with private jacuzzi tubs. The interiors carry a Portuguese-Goan colour palette and original work from celebrated artists, anchored by a drawing room that spills straight onto the poolside patio.",
            "Outside, the private 10-metre pool looks over the village — a signature outlook for the collector's house, and the reason most guests never quite get around to leaving. When they do, Candolim is ten minutes away, Calangute fifteen, Baga eighteen. It suits a quiet family week and an intimate celebration equally well, and a workstation in every bedroom means nobody has to choose between the holiday and the deadline.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Grande stands out as Pilerne's premier collector’s villa due to its:",
              list: [
                "<b>8,000 square feet</b> across three floors — six ensuite bedrooms, five with private jacuzzi tubs, sleeping up to 12 guests",
                "<b>Ten minutes to Candolim, fifteen to Calangute, eighteen to Baga —</b> the North Goa coastline within easy reach, from a village that stays quiet all season",
                "Private 10-metre pool framed by tropical landscaping — the villa's signature outlook, day and night",
                "Original artwork from noted artists set against a neutral, landscape-inspired palette, with a drawing room opening directly onto the poolside patio",
                "Alfresco barbecue deck built for sit-down dinners and evening grills under the stars",
                "A dedicated workstation in every bedroom, 100% power backup, and secure on-site parking — the whole villa reserved exclusively for your group",
                "Steam room and a pool table located next to the poolside, offering extra relaxation and entertainment options",
                "Each Villa Has Two Powder Rooms",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Goan classics or your own menu, cooked to order and served in the dining area — from poolside breakfast to multi-course dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven arrivals and departures for Mopa (GOX) and Dabolim (GOI) (prior booking required).",
                "<b>Dining & Experience Reservations:</b> Restaurant bookings and curated North Goa itineraries — the Museum of Goa here in Pilerne, the Fontainhas heritage walk, Divar Island, backwater kayaking, Reis Magos Fort at sunset.",
                "<b>Event Options:</b> Sit-down dinners and barbecues for up to four outside guests, arranged with advance notice. The villa does not host parties or large events.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                "All rates are quoted on a full compound buyout, per-night basis for up to 12 guests.",
                "<b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping are available for emergencies 24/7.",
                "<b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals. Restaurant delivery is also available.",
                "<b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
                "<b>House guidelines:</b> Smoking on balconies and outdoor areas only. No pets inside the villa. Music indoors between 10 PM and 8 AM, no loud music after 10 PM. The pool is unsupervised — please stay close to children at all times.",
              ],
            },
          ],
          review: {
            author: "Avneet",
            description:
              "This was an amazing place to stay with my family. The place is very specious and beautiful with its decor and Goan architecture. The staff were extremely attentive and kind to us. Definitely would stay again.",
          },
        },
        location: "Mandrem",
        images: [
          "https://lh3.googleusercontent.com/d/1_Y5GfRSkWCAQdubo8cHzrVKcW1_0Zdve",
          "https://lh3.googleusercontent.com/d/1Ad9bdJ7TyqE6plj7ySLdDwIV0A6DQ_aM",
          "https://lh3.googleusercontent.com/d/1xg05eqMCot4T0JnWk_YUDGOiOqKdUZb3",
          "https://lh3.googleusercontent.com/d/13FOZuFSG7Jyyg4C4hge8718MQn_wDH_T",
          "https://lh3.googleusercontent.com/d/1USS4apmyYC75KkAAL78YoH-zMXGMF85S",
          "https://lh3.googleusercontent.com/d/10DchjSd-ZD-fvWGwqhoQeh8zfBdRWwk6",
          "https://lh3.googleusercontent.com/d/14m1rp5GI4Fc_6arvwQtufK6NOJWypaXQ",
          "https://lh3.googleusercontent.com/d/1dr89fzOzeQKha64Xl9sbHoCn3j9Uq-re",
          "https://lh3.googleusercontent.com/d/1hZgLABFKAnsMnlbMtZxBFgEQhLf4i7X_",
          "https://lh3.googleusercontent.com/d/1IqDy8W7UapgmNV0BsmxaIO6cdRwFJTXp",
          "https://lh3.googleusercontent.com/d/1uPch8US4k4H1jI-yvChE_g1LsgjE8zWK",
          "https://lh3.googleusercontent.com/d/1T_xUtjhHdfx2znKjd5OOir4Xri9muK5E",
          "https://lh3.googleusercontent.com/d/1RhtvIAa9wWVOTT0-P2nTBiOmdFrXxE_s",
          "https://lh3.googleusercontent.com/d/1oA_Vj3EyD5ao-62yx8ANfEdhO6MDOo_M",
          "https://lh3.googleusercontent.com/d/1kcNzVl8jIvpnCBTuQtQWkZYHGbi-vTA3",
          "https://lh3.googleusercontent.com/d/1x1K54y1c2LJockuEuSQKHlnJZwy2HKNr",
          "https://lh3.googleusercontent.com/d/1i_H6bn1xObc4WHOHXc2uhKNWL3vOGejC",
          "https://lh3.googleusercontent.com/d/1fEvl4j-eAuvhubSwr0dIh9-Ujh94YOAS",
          "https://lh3.googleusercontent.com/d/1y-kx9m2dfaNia7TVRLQCrK5hJe2OMM6d",
          "https://lh3.googleusercontent.com/d/1rMZFTJ5HEaPimeOcNT-5Tk8v7BwXtdOq",
        ],
        cta: {
          label: "Enquire Now",
          href: "#form",
          // href: createWhatsappCta("Aroha Palms Villa Paradiso"),
        },
      },
      {
        title: "Villa Imperial",
        discountCode: "PILERNE20",
        span: "Private Portuguese Sanctuary",
        type: "Villa",
        description:
          "A Restored Portuguese Residence, Reimagined for Modern Excursions",
        amenities: [

          { icon: <BedIcon />, label: "11 Bedrooms + 2 Lofts" },

          { icon: <GuestIcon />, label: "Sleeps up to 26" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "Bonfire" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <SwimmingPoolIcon />, label: "Dedicated Pool" },
          { icon: <WorkStationIcon />, label: "Work Station" },

          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
          { icon: <JacuzziIcon />, label: "11 Private Jacuzzis" },
        ],
        originalPrice: "₹ 80,000",
        startingPrice: "From ₹ 80,000/night",
        moreInfo: {
          title: "A Newly Built Artistic Villa With An Intimate Setting",
          roomInfo: [
            "15,500 sq ft ",
            "11 Bedrooms + 2 Lofts",
            "4 Dedicated Staffs",
            "Combination Estate: 6-BR Art Villa + 5-BR Villa ",
            "Sleeps up to 26",

          ],
          description: [
            "When one villa isn't enough, Villa Imperial opens the door between them — literally. Villa Grande and Villa Majestic stand side by side, connected by a garden door between the two private pools. Booked together, they become a single private compound of 15,500 square feet: 11 bedrooms and two lofts, two 10-metre pools, and up to 26 guests, with the whole of Aroha Palms Pilerne reserved for your party and nobody else in it.",
            "The two villas play very different roles, which is exactly what makes the pairing work. Grande brings the art, the church-view pool, the jacuzzi bedrooms, and the drawing room that opens onto the patio — the villa where the group gathers. Majestic brings the old Portuguese house, a second pool, and the space to absorb the larger half of the party across five bedrooms and two lofts. Between them you get a genuine celebration house and a genuine retreat, rather than one building asked to be both.",
            "Open the garden door and the group moves freely between two pools, two kitchens, and two gardens. Close it and each half of the party has its own villa, its own front door, and its own quiet. That flexibility, with Candolim ten minutes away and Calangute and Baga close behind, is what makes Imperial work for milestone birthdays, extended family reunions, corporate offsites, and wedding parties who want their people close without everyone under a single roof.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Imperial stands out as Pilerne's largest private booking due to its:",
              list: [
                "<b>15,500 square feet across two complete villas —</b> eleven bedrooms and two lofts sleeping up to 26 guests, with the whole Pilerne collection reserved exclusively for your group",
                "<b>Ten minutes to Candolim, fifteen to Calangute, eighteen to Baga —</b> a large group within easy reach of the coast, without a hotel's shared corridors",
                "Two private 10-metre pools joined by a garden door — open for a single connected compound, closed for two independent villas",
                "Distinct gathering and retreat spaces: Grande's art-filled drawing room and barbecue deck for the group, Majestic's bedrooms and lofts for quieter downtime",
                "Steam room and a pool table located next to the poolside, offering extra relaxation and entertainment options",
                "Each Villa Has Four Powder Rooms",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Coordinated menus across both villas — poolside breakfasts, group dinners, and barbecue evenings (prior booking required).",
                "<b>Private Airport Transfers:</b> Multi-vehicle chauffeur-driven arrivals and departures for Mopa (GOX) and Dabolim (GOI), scheduled around staggered arrival times (prior booking required).",
                "<b>Group Experience Itineraries:</b> Boat trips, backwater kayaking, heritage walks, and beach club reservations arranged for the full party by our team.",
                "<b>Flexible Accommodation Options:</b> Room and villa allocation arranged with our reservation specialists to fit your group's structure.",
                "<b>Event Options:</b> Configurable arrangements and bespoke hosting for milestone occasions, agreed in advance with our team.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                "All rates are quoted on a full compound buyout, per-night basis for up to 26 guests.",
                "<b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping are available for emergencies 24/7.",
                "<b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals. Restaurant delivery is also available.",
                "<b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
                "<b>House guidelines:</b> Smoking on balconies and outdoor areas only. No pets inside the villa. Music indoors between 10 PM and 8 AM, no loud music after 10 PM. The pool is unsupervised — please stay close to children at all times. In-room safety lockers provided.",

              ],
            },
          ],
          review: {
            author: "Jagjit Dhaliwal",
            description:
              "We stayed a couple of days and found the place to absolutely amazing. As a whole the facilities were amazing with access to the swimming pool. The staff were absolutely wonderful and the overall ambience of the place was great. The Goan style architecture was very beautiful and the house was extremely spacious.",
          },
        },
        location: "Mandrem",
        images: [
          "https://lh3.googleusercontent.com/d/1_Y5GfRSkWCAQdubo8cHzrVKcW1_0Zdve",
          "https://lh3.googleusercontent.com/d/1Ae2jINBXsQAt6hlANAf5es4Ly-P_W00u",
          "https://lh3.googleusercontent.com/d/1Ad9bdJ7TyqE6plj7ySLdDwIV0A6DQ_aM",
          "https://lh3.googleusercontent.com/d/1y57gRQBG5_-3N3OP_uG9pT1YXNM3JSei",
          "https://lh3.googleusercontent.com/d/1xg05eqMCot4T0JnWk_YUDGOiOqKdUZb3",
          "https://lh3.googleusercontent.com/d/15cpLYfghLZm_iSd2IOeo4nQLjC8bh_Wy",
          "https://lh3.googleusercontent.com/d/13FOZuFSG7Jyyg4C4hge8718MQn_wDH_T",
          "https://lh3.googleusercontent.com/d/1Z1vuFVVF0L2_4FoZvFHgcUTKSf55fm9a",
          "https://lh3.googleusercontent.com/d/1USS4apmyYC75KkAAL78YoH-zMXGMF85S",
          // "https://lh3.googleusercontent.com/d/1W_JNK4dv9H1vlQMUW8Qv7ci1IXxJRSBy",
          // "https://lh3.googleusercontent.com/d/10DchjSd-ZD-fvWGwqhoQeh8zfBdRWwk6",
          // "https://lh3.googleusercontent.com/d/1fn1z33GXAfKvtjKEi9V5GrvcdXxzV3iV",
          // "https://lh3.googleusercontent.com/d/14m1rp5GI4Fc_6arvwQtufK6NOJWypaXQ",
          // "https://lh3.googleusercontent.com/d/1Ym3OP3_fogqeguOPAx4-ntWGmQKeOJ3q",
          // "https://lh3.googleusercontent.com/d/1dr89fzOzeQKha64Xl9sbHoCn3j9Uq-re",
          // "https://lh3.googleusercontent.com/d/1B0Z44BwYawsoZmQlJX5ZS-ZD40AtPFP6",
          // "https://lh3.googleusercontent.com/d/1hZgLABFKAnsMnlbMtZxBFgEQhLf4i7X_",
          // "https://lh3.googleusercontent.com/d/1EAk6jPsBGBbO5kRSUCcW4xrHuHLrxKT5",
          // "https://lh3.googleusercontent.com/d/1IqDy8W7UapgmNV0BsmxaIO6cdRwFJTXp",
          // "https://lh3.googleusercontent.com/d/1zsCC6c-LugweL-PngyjnrU2IAY7Du-Wp",
          // "https://lh3.googleusercontent.com/d/1uPch8US4k4H1jI-yvChE_g1LsgjE8zWK",
          // "https://lh3.googleusercontent.com/d/1-vRXs7AmssYFq8U8A5km8a4Y1FGoAUoV",
          // "https://lh3.googleusercontent.com/d/1T_xUtjhHdfx2znKjd5OOir4Xri9muK5E",
          // "https://lh3.googleusercontent.com/d/1l3FcDfyAH3jkptvoEE6zZY5TPAUFpfQz",
          // "https://lh3.googleusercontent.com/d/1RhtvIAa9wWVOTT0-P2nTBiOmdFrXxE_s",
          // "https://lh3.googleusercontent.com/d/1A56wEg0HNinw_c6kGRF1W3z_m3kpxKCp",
          // "https://lh3.googleusercontent.com/d/1oA_Vj3EyD5ao-62yx8ANfEdhO6MDOo_M",
          // "https://lh3.googleusercontent.com/d/1MkNzdk55_LmVORPqve1ehvLxOYDtNVoC",
          // "https://lh3.googleusercontent.com/d/1kcNzVl8jIvpnCBTuQtQWkZYHGbi-vTA3",
          // "https://lh3.googleusercontent.com/d/1GK6sTc641VnApTeIjIK62aquly1s5EnZ",
          // "https://lh3.googleusercontent.com/d/1x1K54y1c2LJockuEuSQKHlnJZwy2HKNr",
          "https://lh3.googleusercontent.com/d/1wqt19RJKZUjzb8vemcBxiZcuTlYp8dxq",
          "https://lh3.googleusercontent.com/d/1i_H6bn1xObc4WHOHXc2uhKNWL3vOGejC",
          "https://lh3.googleusercontent.com/d/1kEXnjOYHFXhJkHMyH4LBRMJuNY6cJFqL",
          "https://lh3.googleusercontent.com/d/1fEvl4j-eAuvhubSwr0dIh9-Ujh94YOAS",
          "https://lh3.googleusercontent.com/d/1y-kx9m2dfaNia7TVRLQCrK5hJe2OMM6d",
          "https://lh3.googleusercontent.com/d/1rMZFTJ5HEaPimeOcNT-5Tk8v7BwXtdOq",
        ],
        cta: {
          label: "Enquire Now",
          href: "#form",
          // href: createWhatsappCta("Aroha Palms Villa Paradiso"),
        },
      },
      //   {
      //     title: "Villa Serenity",
      //     discountCode: "MONSOON30",
      //     span: "The Stillwater",
      //     type: "Villa",
      //     description: "Understated Luxury Wrapped in Coastal Calm",
      //     amenities: [
      //       { icon: <BedIcon />, label: "5 Rooms" },
      //       { icon: <BathTubIcon />, label: "5 Baths" },
      //       { icon: <GuestIcon />, label: "10 Guests" },
      //     ],
      //     inRoomAmenities: [
      //       { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
      //       { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
      //       { icon: <WorkStationIcon />, label: "Work Station" },
      //       { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
      //       { icon: <SmartTvIcon />, label: "Smart TV" },
      //       { icon: <KitchenIcon />, label: "Kitchen" },
      //       { icon: <BathroomIcon />, label: "Bathroom" },
      //     ],
      //     originalPrice: "₹ 28600/night",
      //     startingPrice: "From ₹ 35,000/night",
      //     moreInfo: {
      //       title: "Understated Luxury Wrapped in Coastal Calm",
      //       roomInfo: [
      //         "5 Bedrooms",
      //         "5,000 Sq. Ft.",
      //         "Private 10m Pool",
      //         "Peaceful Retreat",
      //       ],
      //       description: [
      //         "True to its name, Villa Serenity is a retreat for the senses — a place where time slows down and the gentle murmur of a nearby stream replaces the noise of daily life. Set within 5,000 square feet of lush garden grounds in Mandrem, this 5-bedroom villa distills calm into every detail. Located just a 3-5 minutes' drive from the white sands of Mandrem Beach, it offers a peaceful haven wrapped in timeless Greek-inspired architecture.",
      //         "Spend your mornings sipping coffee on shaded balconies overlooking tropical foliage, afternoons relaxing beside the private 10-meter pool, and evenings indulging in quiet dining under the stars. Designed with 5 beautifully styled bedrooms and fluid indoor-outdoor living spaces, Villa Serenity is crafted for restful group holidays, multi-generational family gatherings, or wellness retreats. Pack your bags—your peaceful paradise awaits!",
      //       ],
      //       listOfData: [
      //         {
      //           title: "Explore your stay",
      //           description:
      //             "Villa Serenity stands out as Mandrem's most peaceful retreat due to its:",
      //           list: [
      //             "Quiet garden setting wrapped in lush tropical greenery and calm streamside views",
      //             "5 light-filled, beautifully appointed bedrooms spanning 5,000 sq. ft. of private estate",
      //             "Private 10m swimming pool surrounded by open decks, ideal for sunbathing and tranquil swims",
      //             "Timeless Greek-inspired design featuring airy layouts and soothing interior palettes",
      //             "Premium living infrastructure, including whisper-quiet AC, spa-style rain showers, and smart entertainment systems",
      //             "Prime position in North Goa, approx. 3–5 minutes drive to Mandrem Beach, Ashwem, and top dining spots like Thalassa and La Plage",
      //           ],
      //         },
      //         {
      //           title: "CURATED ADD-ON SERVICES",
      //           list: [
      //             "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
      //             "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
      //             "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
      //             "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
      //             "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
      //           ],
      //         },
      //         {
      //           title: "Essential Stay Information:",
      //           list: [
      //             " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
      //             " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
      //             " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
      //             " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
      //           ],
      //         },
      //       ],
      //       review: {
      //         author: "Chirag",
      //         description:
      //           "It was amazing experience with aroha palms the luxury villas. This villa one of the best luxury villa in goa the care taker Mr Kuldeep also very nice guy he taking care of us very nicely so definitely visit again. Specially thanks to ishu bhaiya (indrajeet singh rajpurohit) and nikhil Kashyap Bhaiya for geving us this wonderful experience",
      //       },
      //     },

      //     location: "Mandrem",
      //     images: [
      //       "/rooms/Serenity/Serenity.png",
      //       "/rooms/Serenity/serenity7.jpg",
      //       "/rooms/Serenity/serenity8.jpg",
      //       "/rooms/Serenity/serenity9.jpg",
      //       "/rooms/Serenity/serenity10.jpg",
      //       "/rooms/Serenity/serenity11.jpg",
      //       "/rooms/Serenity/serenity13.jpg",
      //       "/rooms/Serenity/serenity15.jpg",
      //       "/rooms/Serenity/serenity16.webp",
      //       "/rooms/Serenity/serenity5.webp",
      //       "/rooms/Serenity/serenity6.jpg",
      //       "/rooms/Serenity/serenity14.jpg",
      //       "/rooms/Serenity/serenity17.webp",
      //       "/rooms/Serenity/serenity3.webp",
      //       "/rooms/Serenity/serenity4.jpg",
      //       "/rooms/Serenity/serenity1.jpg",
      //     ],
      //     cta: {
      //       label: "Enquire Now",
      //       href: "#form",
      //       // href: createWhatsappCta("Aroha Palms Villa Serenity"),
      //     },
      //   },
      //   {
      //     title: "Villa Caia",
      //     discountCode: "MONSOON30",
      //     span: "The Reunion",
      //     type: "Villa",
      //     description: "Together in Luxury, Designed for Every Generation",
      //     amenities: [
      //       { icon: <BedIcon />, label: "7 Rooms" },
      //       { icon: <BathTubIcon />, label: "7 Baths" },
      //       { icon: <GuestIcon />, label: "14 Guests" },
      //     ],
      //     inRoomAmenities: [
      //       { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
      //       { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
      //       { icon: <WorkStationIcon />, label: "Work Station" },
      //       { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
      //       { icon: <SmartTvIcon />, label: "Smart TV" },
      //       { icon: <KitchenIcon />, label: "Kitchen" },
      //       { icon: <BathroomIcon />, label: "Bathroom" },
      //     ],
      //     originalPrice: "₹ 40300/night",
      //     startingPrice: "From ₹ 45,000/night",
      //     moreInfo: {
      //       title: "Together in Luxury, Designed for Every Generation",
      //       roomInfo: [
      //         "7 Bedrooms",
      //         "Combination Estate: 5-BR Villa + 2-BR Apartment",
      //         "Sleeps up to 14",
      //       ],
      //       description: [
      //         "When a single villa isn't quite enough for your group, Villa Caia offers the perfect step up in space and flexibility. Combining a flagship 5-bedroom Greek-inspired villa with an adjacent, private 2-bedroom luxury apartment, Caia provides 7 bedrooms in total. This thoughtful layout gives multi-generational families or groups of friends the ability to holiday together on the same private grounds while retaining separate living quarters for quiet downtime. Situated along a serene streamside and framed by lush tropical greenery, it delivers absolute privacy just a 3-5 minutes' drive from Mandrem Beach.",
      //         "Centered around a refreshing 10-meter private pool and spacious outdoor terrace, Villa Caia sets a captivating scene for Goa's signature sundowners, poolside lunches, and evening toasts under the stars. Fluid indoor-outdoor living areas and sun-drenched interiors balance warm Goan hospitality with subtle Mediterranean luxury. Whether hosting a family reunion or relaxing on a long-awaited escape, Caia offers an upscale, welcoming vibe that turns every moment into a lasting memory.",
      //       ],
      //       listOfData: [
      //         {
      //           title: "Explore your stay",
      //           description:
      //             "Villa Caia stands out as Mandrem's premier reunion estate due to its:",
      //           list: [
      //             "Versatile 7-bedroom combination layout, uniting a 5-BR villa and a 2-BR luxury apartment for up to 14 guests",
      //             "Perfect balance of vibrant shared spaces for gathering and independent private quarters for quiet downtime",
      //             "Peaceful streamside setting in North Goa, offering a quiet environment to immerse yourself in the susegad lifestyle",
      //             "Private 10m swimming pool and scenic lounging terrace deck, ideal for all-day sunbathing and poolside dining",
      //             "Elevated modern infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
      //             "Prime location near North Goa's vibrant beach circuit (approx. 3–5 minutes drive) and celebrated dining venues like Thalassa, La Plage, and Lazy Dog",
      //           ],
      //         },
      //         {
      //           title: "CURATED ADD-ON SERVICES",
      //           list: [
      //             "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
      //             "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
      //             "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
      //             "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
      //             "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
      //           ],
      //         },
      //         {
      //           title: "Essential Stay Information:",
      //           list: [
      //             " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
      //             " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
      //             " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
      //             " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
      //           ],
      //         },
      //       ],
      //       review: {
      //         author: "Nilesh Agarwal",
      //         description:
      //           "Villa is beautiful. The caretaker kuldip is a great guy. Good service.",
      //       },
      //     },

      //     location: "Mandrem",
      //     images: [
      //       "/rooms/Serenity/serenity8.jpg",
      //       "/rooms/Serenity/serenity9.jpg",
      //       "/rooms/Serenity/serenity4.jpg",
      //       "/rooms/Serenity/serenity1.jpg",
      //       "/rooms/Emerald/Emerald.png",
      //       "/rooms/Emerald/emerald1.jpg",
      //       "/rooms/Emerald/emerald6.webp",
      //       "/rooms/Emerald/emerald2.jpg",
      //       "/rooms/Emerald/emerald3.jpg",
      //       "/rooms/Emerald/emerald4.jpg",
      //       "/rooms/Emerald/emerald5.webp",
      //       "/rooms/Regal/Regal.png",
      //       "/rooms/Regal/regal1.jpg",
      //       "/rooms/Regal/regal2.jpg",
      //       "/rooms/Regal/regal3.jpg",
      //       "/rooms/Regal/regal4.jpg",
      //       "/rooms/Regal/regal5.jpg",
      //       "/rooms/Regal/regal6.jpg",
      //       "/rooms/Regal/regal7.jpg",
      //       "/rooms/Regal/regal8.jpg",
      //       "/rooms/Regal/regal9.webp",
      //     ],
      //     cta: {
      //       label: "Enquire Now",
      //       href: "#form",
      //       // href: createWhatsappCta("Aroha Palms Villa Caia"),
      //     },
      //   },
      //   {
      //     title: "Villa Prana",
      //     discountCode: "MONSOON30",
      //     span: " The Breathing Space",
      //     type: "Villa",
      //     description: "A Sanctuary of Wellness, Space & Timeless Luxury",
      //     amenities: [
      //       { icon: <BedIcon />, label: "9 Rooms" },
      //       { icon: <BathTubIcon />, label: "9 Baths" },
      //       { icon: <GuestIcon />, label: "18 Guests" },
      //     ],
      //     inRoomAmenities: [
      //       { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
      //       { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
      //       { icon: <WorkStationIcon />, label: "Work Station" },
      //       { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
      //       { icon: <SmartTvIcon />, label: "Smart TV" },
      //       { icon: <KitchenIcon />, label: "Kitchen" },
      //       { icon: <BathroomIcon />, label: "Bathroom" },
      //     ],
      //     originalPrice: "₹ 52000/night",
      //     startingPrice: "From ₹ 63,000/night",
      //     moreInfo: {
      //       title: "A Sanctuary of Wellness, Space & Timeless Luxury",
      //       roomInfo: [
      //         "9 Bedrooms",
      //         "Combination Estate: 5-BR Villa + 4-BR Villa",
      //         "Sleeps up to 18",
      //       ],
      //       description: [
      //         "Named after the Sanskrit word for 'vital life force,' Villa Prana by Aroha Palms is designed as a rejuvenating breathing space for larger groups. Spanning 9 bedrooms across a flagship 5-bedroom luxury villa and connected 4-bedroom luxury villa, this estate offers the spatial and mental room needed to slow down, stretch out, and exhale. Set along a calm stream surrounded by lush tropical greenery in Mandrem, it provides an uplifting backdrop for wellness retreats, extended family reunions, or creative group getaways. Best of all, the golden sands of Mandrem Beach are just 3-5 minutes' drive away.",
      //         "Spend your mornings practicing yoga on the manicured lawn, afternoons lounging beside the private 10-meter pool, and evenings dining under open skies. The villa's seamless indoor-outdoor layout and bright, picture-perfect interiors make it an exceptional choice for those seeking both restorative privacy and vibrant communal gathering.",
      //       ],
      //       listOfData: [
      //         {
      //           title: "Explore your stay",
      //           description:
      //             "Villa Prana stands out as a dedicated wellness and retreat destination due to its:",
      //           list: [
      //             "Generous 9-bedroom estate featuring 5-BR and 4-BR villas side-by-side, providing generous space and refined comfort for up to 18 guests",
      //             "Timeless Greek-inspired architecture featuring bright, elegant spaces and stylish interior design",
      //             "Peaceful streamside setting in North Goa, wrapping your stay in calm natural surroundings and the authentic susegad spirit",
      //             "Private 10m swimming pool and scenic terrace deck, ideal for poolside lounging, morning yoga, and refreshing swims",
      //             "Flawless modern infrastructure, including whisper-quiet climate control, high-pressure rain showers, and premium sound systems",
      //             "Prime access to North Goa's finest beaches (approx. 3–5 minutes drive) and dining spots like Thalassa, La Plage, and Lazy Dog",
      //           ],
      //         },
      //         {
      //           title: "CURATED ADD-ON SERVICES",
      //           list: [
      //             "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
      //             "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
      //             "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
      //             "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
      //             "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
      //           ],
      //         },
      //         {
      //           title: "Essential Stay Information:",
      //           list: [
      //             " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
      //             " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
      //             " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
      //             " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
      //           ],
      //         },
      //       ],
      //       review: {
      //         author: "Rajatha BM",
      //         description:
      //           "Great property, good food and amazing service. Manoj Yadav, Gudiya Yadav (care takers) took good care of our stay for 2 nights and 3 days",
      //       },
      //     },

      //     location: "Mandrem",
      //     images: [
      //       "/rooms/Magnifica/Magnifica.png",
      //       "/rooms/Magnifica/magnifica2.webp",
      //       "/rooms/Magnifica/magnifica6.jpg",
      //       "/rooms/Magnifica/magnifica12.webp",
      //       "/rooms/Magnifica/magnifica8.jpg",
      //       "/rooms/Magnifica/magnifica14.webp",
      //       "/rooms/Magnifica/magnifica10.webp",
      //       "/rooms/Magnifica/magnifica11.jpg",
      //       "/rooms/Magnifica/magnifica18.jpg",
      //       "/rooms/Magnifica/magnifica19.webp",
      //       "/rooms/Paradiso/Paradiso.png",
      //       "/rooms/Paradiso/paradiso1.jpg",
      //       "/rooms/Paradiso/paradiso5.jpg",
      //       "/rooms/Paradiso/paradiso6.webp",
      //       "/rooms/Paradiso/paradiso10.jpg",
      //       "/rooms/Paradiso/paradiso11.jpg",
      //       "/rooms/Paradiso/paradiso12.jpg",
      //       "/rooms/Paradiso/paradiso15.webp",
      //       "/rooms/Paradiso/paradiso2.jpg",
      //       "/rooms/Paradiso/paradiso4.jpg",
      //     ],
      //     cta: {
      //       label: "Enquire Now",
      //       href: "#form",
      //       // href: createWhatsappCta("Aroha Palms Villa Prana"),
      //     },
      //   },
      //   {
      //     title: "Villa Encanto",
      //     discountCode: "MONSOON30",
      //     span: "The Celebration House",
      //     type: "Villa",
      //     description: "Where Grand Celebrations Meet Timeless Luxury",
      //     amenities: [
      //       { icon: <BedIcon />, label: "10 Rooms" },
      //       { icon: <BathTubIcon />, label: "10 Baths" },
      //       { icon: <GuestIcon />, label: "20 Guests" },
      //     ],
      //     inRoomAmenities: [
      //       { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
      //       { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
      //       { icon: <WorkStationIcon />, label: "Work Station" },
      //       { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
      //       { icon: <SmartTvIcon />, label: "Smart TV" },
      //       { icon: <KitchenIcon />, label: "Kitchen" },
      //       { icon: <BathroomIcon />, label: "Bathroom" },
      //     ],
      //     originalPrice: "₹ 57200/night",
      //     startingPrice: "From ₹ 70,000/night",
      //     moreInfo: {
      //       title: "Where Grand Celebrations Meet Timeless Luxury",
      //       roomInfo: [
      //         "10 Bedrooms",
      //         "Combination Estate: Two Joined 5-BR Villas",
      //         "Sleeps up to 20",
      //       ],
      //       description: [
      //         "Created by joining two of our flagship 5-bedroom luxury villas, Villa Encanto is purpose-built for life's big moments. Offering 10 spacious bedrooms, dual living halls, and private pool spaces, this grand compound provides the scale and sophistication required for milestone birthdays, family reunions, and special gatherings. Positioned along a calm, flowing stream and surrounded by lush tropical greenery, it serves as an exclusive, peaceful haven in North Goa. Best of all, the sun-kissed shores of Mandrem Beach are just 3-5 minutes' drive away.",
      //         "Here, grand occasion hosting feels effortless. Guests can gather together on the central lawn and sweeping terrace decks for sunset cocktails and barbecue evenings, while enjoying the luxury of two distinct villas to retreat to at night. Designed with fluid indoor-outdoor living areas and light-filled interiors, Villa Encanto offers an elevated, luxurious vibe where relaxation and celebration come naturally.",
      //       ],
      //       listOfData: [
      //         {
      //           title: "Explore your stay",
      //           description:
      //             "Villa Encanto stands out as Mandrem's premier celebration estate due to its:",
      //           list: [
      //             "Combined 10-bedroom estate featuring two complete 5-BR villas side-by-side, providing generous space and refined comfort for up to 20 guests",
      //             "Dual living complexes and private 10m pool spaces, ensuring ample room for vibrant gatherings and quiet downtime",
      //             "Tranquil streamside location in North Goa, wrapping your stay in calm natural surroundings and the authentic susegad rhythm",
      //             "Expansive outdoor lawn and scenic terrace areas, built for daytime sunbathing, outdoor dining, and evening poolside events",
      //             "High-end estate infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
      //             "Strategic proximity as its just 3-5 minutes from Mandrem Beach and top culinary destinations like Thalassa, La Plage, and Lazy Dog",
      //           ],
      //         },
      //         {
      //           title: "CURATED ADD-ON SERVICES",
      //           list: [
      //             "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
      //             "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
      //             "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
      //             "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
      //             "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
      //           ],
      //         },
      //         {
      //           title: "Essential Stay Information:",
      //           list: [
      //             " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
      //             " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
      //             " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
      //             " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
      //           ],
      //         },
      //       ],
      //       review: {
      //         author: "Nishant Chury",
      //         description:
      //           "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
      //       },
      //     },

      //     location: "Mandrem",
      //     images: [
      //       "/rooms/Paradiso/Paradiso.png",
      //       "/rooms/Paradiso/paradiso1.jpg",
      //       "/rooms/Paradiso/paradiso5.jpg",
      //       "/rooms/Paradiso/paradiso6.webp",
      //       "/rooms/Paradiso/paradiso10.jpg",
      //       "/rooms/Paradiso/paradiso11.jpg",
      //       "/rooms/Paradiso/paradiso12.jpg",
      //       "/rooms/Paradiso/paradiso15.webp",
      //       "/rooms/Paradiso/paradiso2.jpg",
      //       "/rooms/Serenity/Serenity.png",
      //       "/rooms/Serenity/serenity8.jpg",
      //       "/rooms/Serenity/serenity9.jpg",
      //       "/rooms/Serenity/serenity4.jpg",
      //       "/rooms/Serenity/serenity1.jpg",
      //       "/rooms/Paradiso/paradiso4.jpg",
      //     ],
      //     cta: {
      //       label: "Enquire Now",
      //       href: "#form",
      //       // href: createWhatsappCta("Aroha Palms Villa Encanto"),
      //     },
      //   },
      //   {
      //     title: "Villa Marisol",
      //     discountCode: "MONSOON30",
      //     span: "The Grand Estate",
      //     type: "Grand Villa",
      //     description: "The Ultimate Private Luxury Estate in North Goa",
      //     amenities: [
      //       { icon: <BedIcon />, label: "18 Rooms" },
      //       { icon: <BathTubIcon />, label: "18 Baths" },
      //       { icon: <GuestIcon />, label: "36 Guests" },
      //     ],
      //     inRoomAmenities: [
      //       { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
      //       { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
      //       { icon: <WorkStationIcon />, label: "Work Station" },
      //       { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
      //       { icon: <SmartTvIcon />, label: "Smart TV" },
      //       { icon: <KitchenIcon />, label: "Kitchen" },
      //       { icon: <BathroomIcon />, label: "Bathroom" },
      //     ],
      //     originalPrice: "₹ 97500/night",
      //     startingPrice: "From ₹ 1,18,000/night",
      //     moreInfo: {
      //       title: "The Ultimate Private Luxury Estate in North Goa",
      //       roomInfo: [
      //         "18 Bedrooms",
      //         "Full Compound: All 3 Villas + 2 Apartments",
      //         "Sleeps up to 36",
      //       ],
      //       description: [
      //         "The pinnacle of private group luxury in North Goa, Villa Marisol is the ultimate total takeover of our Mandrem collection. Created by combining all three luxury villas and both 2-bedroom apartments into a massive 18-bedroom compound, Marisol turns what would usually be a fragmented booking into one seamless, private retreat that comfortably sleeps up to 36 guests. Set along a peaceful, flowing stream and wrapped in lush tropical greenery, this grand estate balances complete exclusive privacy with generous, open communal spaces. Best of all, the sun-kissed shores of Mandrem Beach are just a 3-5 minutes' drive away.",
      //         "Designed for corporate offsites, milestone celebrations, and large multi-family gatherings, Marisol offers unmatched scale and versatility. Enjoy exclusive access to three 10-meter private swimming pools, sunlit terrace decks, and expansive outdoor grounds ideal for golden-hour cocktails or gala dinners under the stars. Fluid indoor-outdoor living spaces flow effortlessly into light-filled interiors, ensuring everyone in your party enjoys both shared celebration and quiet personal space. Pack your bags—your private coastal sanctuary awaits!",
      //       ],
      //       listOfData: [
      //         {
      //           title: "Explore your stay",
      //           description:
      //             "Villa Marisol stands out as North Goa's premier private compound due to its:",
      //           list: [
      //             "Rare capacity and flexible configurations, offering up to 18 private, elegantly appointed bedrooms across 3 villas and 2 apartments for groups of up to 36",
      //             "Complete exclusive domain over the entire estate, ensuring total privacy for your retreat or event",
      //             "Three private 10m swimming pools and surrounding sun decks designed for daytime lounging and evening gatherings",
      //             "Tranquil streamside setting in North Goa, providing a serene natural environment to embrace the relaxed susegad pace",
      //             "Flawless estate infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
      //             "Prime location approx. 3–5 minutes drive to Mandrem Beach and close to iconic dining spots like Thalassa, La Plage, and Lazy Dog",
      //           ],
      //         },
      //         {
      //           title: "CURATED ADD-ON SERVICES",
      //           list: [
      //             "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
      //             "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
      //             "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
      //             "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
      //             "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
      //           ],
      //         },
      //         {
      //           title: "Essential Stay Information:",
      //           list: [
      //             " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
      //             " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
      //             " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
      //             " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
      //           ],
      //         },
      //       ],
      //       review: {
      //         author: "Nishant Chury",
      //         description:
      //           "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
      //       },
      //     },

      //     location: "Mandrem",
      //     images: [
      //       "/rooms/Magnifica/Magnifica.png",
      //       "/rooms/Magnifica/magnifica2.webp",
      //       "/rooms/Magnifica/magnifica6.jpg",
      //       "/rooms/Magnifica/magnifica12.webp",
      //       "/rooms/Magnifica/magnifica8.jpg",
      //       "/rooms/Magnifica/magnifica14.webp",
      //       "/rooms/Magnifica/magnifica10.webp",
      //       "/rooms/Magnifica/magnifica11.jpg",
      //       "/rooms/Magnifica/magnifica18.jpg",
      //       "/rooms/Magnifica/magnifica19.webp",
      //       "/rooms/Paradiso/Paradiso.png",
      //       "/rooms/Paradiso/paradiso1.jpg",
      //       "/rooms/Paradiso/paradiso5.jpg",
      //       "/rooms/Paradiso/paradiso6.webp",
      //       "/rooms/Paradiso/paradiso10.jpg",
      //       "/rooms/Paradiso/paradiso11.jpg",
      //       "/rooms/Paradiso/paradiso12.jpg",
      //       "/rooms/Paradiso/paradiso15.webp",
      //       "/rooms/Paradiso/paradiso2.jpg",
      //       "/rooms/Serenity/Serenity.png",
      //       "/rooms/Serenity/serenity8.jpg",
      //       "/rooms/Serenity/serenity9.jpg",
      //       "/rooms/Serenity/serenity4.jpg",
      //       "/rooms/Serenity/serenity1.jpg",
      //       "/rooms/Paradiso/paradiso4.jpg",
      //       "/rooms/Magnifica/magnifica17.webp",
      //       "/rooms/Magnifica/magnifica13.webp",
      //       "/rooms/Magnifica/magnifica4.jpg",
      //       "/rooms/Magnifica/magnifica1.jpg",
      //       "/rooms/Magnifica/magnifica5.jpg",
      //       "/rooms/Magnifica/magnifica9.jpg",
      //       "/rooms/Magnifica/magnifica15.jpg",
      //       "/rooms/Magnifica/magnifica16.webp",
      //       "/rooms/Magnifica/magnifica20.jpg",
      //       "/rooms/Magnifica/magnifica3.jpg",
      //       "/rooms/Magnifica/magnifica7.jpg",
      //       "/rooms/Emerald/Emerald.png",
      //       "/rooms/Emerald/emerald1.jpg",
      //       "/rooms/Emerald/emerald6.webp",
      //       "/rooms/Emerald/emerald2.jpg",
      //       "/rooms/Emerald/emerald3.jpg",
      //       "/rooms/Emerald/emerald4.jpg",
      //       "/rooms/Emerald/emerald5.webp",
      //       "/rooms/Regal/Regal.png",
      //       "/rooms/Regal/regal1.jpg",
      //       "/rooms/Regal/regal2.jpg",
      //       "/rooms/Regal/regal3.jpg",
      //       "/rooms/Regal/regal4.jpg",
      //       "/rooms/Regal/regal5.jpg",
      //       "/rooms/Regal/regal6.jpg",
      //       "/rooms/Regal/regal7.jpg",
      //       "/rooms/Regal/regal8.jpg",
      //       "/rooms/Regal/regal9.webp",
      //     ],
      //     cta: {
      //       label: "Enquire Now",
      //       href: "#form",
      //       // href: createWhatsappCta("Aroha Palms Villa Marisol"),
      //     },
      //   },
    ],
  },

  featuresSection: {
    tagline: "WHAT AWAITS YOU",
    title: "Every detail, considered.",
    features: [
      {
        icon: <PoolIcon />,
        title: "Private Pool",
        description:
          "Every villa comes with its own Swimming Pool for uninterrupted relaxation.",
      },
      {
        icon: <SpaciousRoomIcon />,
        title: "Spacious Rooms",
        description:
          "King-size beds, natural light and thoughtfully designed interiors.",
      },
      {
        icon: <ConciergeIcon />,
        title: "Concierge",
        description:
          "Dedicated caretakers are available from 9 AM–9 PM for assistance with bookings, transfers, chef services, and events, with 24/7 availability for emergencies.",
      },
      {
        icon: <FreeWifiIcon />,
        title: "High Speed Internet",
        description:
          "Reliable Wi-Fi throughout every property for work-from-Goa stays.",
      },
      {
        icon: <SecurityIcon />,
        title: "24/7 Security",
        description:
          "On-site security teams and CCTV surveillance for complete peace of mind.",
      },
      {
        icon: <EcoLuxuryIcon />,
        title: "Eco Luxury",
        description:
          "Sustainable materials, natural landscaping and eco-conscious design.",
      },
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: "#form",
        // link: contact.WhatsappCta,
      },
      // {
      //   label: "Book Now",
      //   link: "#form",
      // },
    ],
  },
  gallery: {
    images: [
      "/landing-page/gallery/img-1.webp",
      "/landing-page/gallery/img-2.webp",
      "/landing-page/gallery/img-3.webp",
      "/landing-page/gallery/img-4.webp",
      "/landing-page/gallery/img-5.webp",
      "/landing-page/gallery/img-6.webp",
    ],
  },
  testimonials: {
    tagline: "GUEST STORIES",
    title: "Trusted by travellers.",
    buttons: [
      {
        label: "BOOK NOW",
        link: "#form",
      },
    ],
    reviews: [
      {
        name: "Jass Bhatt",
        review:
          "We have had a fantastic stay at this villa. We stayed for 3 nights and there were 8 people. The villa is very well equipped with all the requirements one would need during the stay. Paresh sir and his wife were very helpful and considerate of the guests. Highly recommended to stay.",
        rating: 5,
      },
      {
        name: "Ankit Savla",
        review:
          "One of the best vacation with family. Had a lovely stay. Cleanliness and Hospitality was amazing. Mr Paresh, Mrs Moni and their family really took good care of us. The place is massive and well kept. Rooms are well equipped with all amenities and clean bathrooms. Mr Paresh and Mrs Moni are really well behaved and made us really enjoy our holidays to the max. Will definitely visit again in the future.",
        rating: 5,
      },
      {
        name: "Tech Hobbies",
        review:
          "Excellent property for a weekend gateway. We had an amazing experience. The staffs are extremely helpful and professional. Paresh and Moni were always attentive to take care about any need including food. I highly recommend this place for a perfect family trip.",
        rating: 5,
      },
      {
        name: "Jagjit Dhaliwal",
        review:
          "We stayed a couple of days and found the place to absolutely amazing. As a whole the facilities were amazing with access to the swimming pool. The staff were absolutely wonderful and the overall ambience of the place was great. The Goan style architecture was very beautiful and the house was extremely spacious.",
        rating: 5,
      },
    ],
  },

  faq: {
    image: "/landing-page/faq-aerial.png",
    tagline: "ANSWERS",
    title: "Everything you want to know.",
    items: [
      {
        q: "How much does a stay at Aroha Palms cost?",
        a: "Rates vary by season, villa type, and duration. Share your dates via the enquiry form and our concierge will send you a personalised quote within a few hours.",
      },
      {
        q: "What are the check-in and check-out timings?",
        a: "Standard check-in is 3:00 PM and check-out is 10:00 AM. Early check-in or late check-out can be arranged based on availability.",
      },
      {
        q: "Can I book a villa for weddings or corporate offsites?",
        a: "Yes. Villas like Imperial (26 guests) are ideal for weddings, birthday celebrations, and corporate offsites.",
        // a: "Yes. Villas like Imperial (26 guests) are ideal for weddings, birthday celebrations, and corporate offsites. Our team helps with décor, catering, and event planning.",
      },
      {
        q: "Are the villas pet-friendly?",
        a: "While we love animals, our villas are strictly pet-free to ensure a comfortable stay for all guests.",
      },
      {
        q: "Do all properties have private pools?",
        a: "All villas have private pools.",
      },
      {
        q: "Is the location safe?",
        a: "On-site security teams, CCTV surveillance, and caretakers available from 9 AM–9 PM, with 24/7 availability for emergencies.",
      },
    ],
    concierge: {
      tagline: "CONCIERGE",
      title: "Get a callback in minutes.",
      description:
        "Share your plan, dates, group size and occasion. We'll match you with the perfect villa.",
      note: "By submitting, you agree to be contacted by our concierge on WhatsApp or phone.",
    },
  },
  nearbyPlaces: {
    tagline: "Nearby Places",
    title: "Getting Here & Getting Around",

    cta: {
      label: "ENQUIRE NOW",
      href: "#form",
    },

    places: [
      {
        title: "Candolim Beach",
        duration: "5 km, 10 min",
        icon: "location",
      },
      {
        title: "Calangute Beach",
        duration: "7 km, 15 min",
        icon: "location",
      },
      {
        title: "Fort Aguada",
        duration: "8 km, 18 min",
        icon: "location",
      },
      {
        title: "Baga Beach",
        duration: "9 km, 18 min",
        icon: "location",
      },
      {
        title: "Panjim (Capital)",
        duration: "12 km, 25 min",
        icon: "location",
      },
      {
        title: "Anjuna",
        duration: "15 km, 30 min",
        icon: "location",
      },
      {
        title: "Dabolim Airport (GOI)",
        duration: "33 km, 45 min",
        icon: "airplane",
      },
      {
        title: "Manohar / Mopa Airport (GOX)",
        duration: "35 km, 55 min",
        icon: "airplane",
      },
    ],
  },
  experienceSection: {
    tagline: "BEYOND THE VILLA",
    title: "Nearby Activities",
    experiences: [
      {
        title: "MAE DE DEUS CHURCH",
        image: "/landing-page/nearby-mae-de-deus.png",
        description:
          "Saligao Striking neo-Gothic heritage architecture set amidst lush village lanes, ideal for morning cycling trails",
      },
      {
        title: "MUSEUM OF GOA (MOG)",
        image: "/landing-page/nearby-mog.jpg",
        description:
          "Pilerne Contemporary art galleries, open-air sculptures, and cultural exhibits right around the corner.",
      },
      {
        title: "CANDOLIM & SINQUERIM BEACHES",
        image: "/landing-page/nearby-candolim.jpg",
        description:
          "Golden sands, watersports, and tranquil coastal sundowners just 10–15 minutes away",
      },
      {
        title: "FORT AGUADA & LIGHTHOUSE",
        image: "/landing-page/nearby-fort-aguada.jpg",
        description:
          "Candolim Historic 17th-century Portuguese fortress offering panoramic sea and cliffside views",
      },
      {
        title: "REIS MAGOS FORT",
        image: "/landing-page/nearby-reis-magos.jpg",
        description:
          "Verem Restored heritage fort overlooking the Mandovi estuary, known for cultural exhibitions and scenic river vistas",
      },
    ],
    buttons: [
      {
        label: "ENQUIRE NOW",
        link: "#form",
      },
    ],
  },
};
