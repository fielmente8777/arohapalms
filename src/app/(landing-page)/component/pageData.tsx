import {
  BathroomIcon,
  EvChargingFacilityIcon,
  HighSpeedInternetIcon,
  KitchenIcon,
  SmartTvIcon,
  SwimmingPoolIcon,
  WorkStationIcon,
} from "@/utils/amenitiesIcon";
import { contact } from "@/utils/constent";
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
import { title } from "process";

export const landingPageData = {
  offer: [
    "Monsoon Bonanza 30% off limited time offer valid till 31 August",
    "Monsoon Bonanza 30% off limited time offer valid till 31 August",
  ],
  hero: {
    tag: "A Paradise in North Goa",
    title: "Barefoot Luxury, Quietly your Own",
    description:
      "Greek-inspired villas & apartments with private pools, lush gardens and effortless access to Goa's finest beaches. ",
    benefits:
      "<span class='text-[#A20000]'>Save 25%</span> when you book direct • No prepayment • Free cancellation",
    image: "/landing-page/bnr.jpg",
    images: [
      "/landing-page/bnr/Copy-of-DSC01038.webp",
      "/landing-page/bnr/Copy-of-DSC01064.webp",
      "/landing-page/bnr/Copy-of-DSC01106.webp",
      "/landing-page/bnr/Copy-of-DSC01130.webp",
      "/landing-page/bnr/Copy-of-DSC01152.webp",
      "/landing-page/bnr/Copy-of-DSC01199.webp",
      "/landing-page/bnr/Copy-of-DSC01210.webp",
      "/landing-page/bnr/Copy-of-DSC01243.webp",
      "/landing-page/bnr/Copy-of-DSC01258.webp",
      "/landing-page/bnr/Copy-of-DSC01278.webp",
      "/landing-page/bnr/Copy-of-DSC01309.webp",
      "/landing-page/bnr/Copy-of-DSC01311.webp",
      "/landing-page/bnr/Copy-of-DSC01353.webp",
      "/landing-page/bnr/Copy-of-DSC01381.webp",
      "/landing-page/bnr/Rectangle-34624168.png",
      "/landing-page/bnr/Rectangle-34624169.png",
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
    title: "Where Mediterranean Grace Meets Coastal Serenity",
    description: [
      "Welcome to Aroha Palms, an exclusive collection of luxury villas and private apartments tucked along a peaceful streamside in North Goa’s coveted Mandrem coast. Designed in a timeless Mediterranean aesthetic and surrounded by lush tropical foliage, each property offers a private sanctuary where modern sophistication meets the slow-paced rhythm of Goan susegad.",
      "Whether you are seeking an intimate family escape, a multi-generational reunion, a wellness retreat, or a grand destination event, Aroha Palms brings together spacious living, private pools, and bespoke hospitality all just a 3-5 minute drive from the golden sands of Mandrem Beach.",
    ],
    images: [
      "/landing-page/gallery/img-1.webp",
      "/landing-page/gallery/img-2.webp",
      "/landing-page/gallery/img-3.webp",
      "/landing-page/gallery/img-5.webp",
      // "/landing-page/gallery/img-6.webp",
      "/rooms/Magnifica/magnifica10.webp",
      "/landing-page/gallery/Rectangle-34624171.png",
      "/landing-page/gallery/Rectangle-34624176.png",
      "/landing-page/gallery/Rectangle-34624177.png",
      "/landing-page/gallery/Rectangle-34624178.png",
      "/landing-page/gallery/Rectangle-34624179.png",
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  accommodationSection: {
    tagline: "OUR ACCOMMODATION",
    title: "Luxury Villas Crafted for Your Perfect Goa Getaway",
    description:
      "Explore every villa, apartment and suite across Mandrem, each one thoughtfully designed for private, unhurried Goa stays.",
    note: "No need to split up the group or book multiple hotel rooms. Our largest estate villas offer seamless group living with space for up to 40 guests. Enjoy private amenities, expansive outdoor lounges, and effortless hosting, all in one magnificent setting.",
    cards: [
      {
        title: "Aroha Palms Villa Magnifica - The Intimate One",
        type: "Villa",
        description:
          "Greek-inspired elegance meets tropical bliss. Perched between a serene river and lush mountains, just 2 km from Mandrem Beach.",
        amenities: [
          { icon: <BedIcon />, label: "4 Rooms" },
          { icon: <BathTubIcon />, label: "4 Baths" },
          { icon: <GuestIcon />, label: "8 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 23400/night",
        startingPrice: "₹ 18,000/night",
        moreInfo: {
          title: "Mediterranean Grace Meets Coastal Tranquility",
          roominfo:
            "4 Bedrooms | 4,000 Sq. Ft. | Private 10m Pool | Streamside Sanctuary",

          description: [
            "Where the soothing rhythm of a flowing stream meets Mediterranean architecture, Villa Magnifica is the hidden gem of our Mandrem collection. Spanning 4,000 square feet of private sanctuary, this intimate retreat enjoys an exclusive waterfront setting, offering guests a peaceful escape immersed in nature's quiet beauty. Just a 3–5 minute drive from the pristine shores of Mandrem Beach, it strikes the perfect balance between tranquil seclusion and coastal adventure.",

            "Wake up to birdsong over the water, spend peaceful afternoons beside your private 10-metre swimming pool, or unwind with sunset drinks on the breezy balcony. Featuring four light-filled bedrooms and a seamless indoor-outdoor layout, Villa Magnifica is thoughtfully designed for intimate family vacations, boutique group retreats, or couples seeking a secluded luxury escape in North Goa.",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Magnifica stands out as Mandrem's premier waterfront sanctuary due to its:",

              "– Intimate 4-bedroom floor plan spanning 4,000 sq. ft., designed for privacy and comfort.",
              "– Exclusive streamside location offering serene water views and lush tropical surroundings.",
              "– Timeless Mediterranean-inspired architecture with elegant, sunlit interiors.",
              "– Private 10-metre swimming pool with a spacious poolside terrace for all-day relaxation.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, and high-speed Wi-Fi.",
              "– Approx. 3–5 minutes by car to Mandrem Beach and close to renowned dining destinations including La Plage, Thalassa, and Lazy Dog.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, and curated local excursions.",

              "– Flexible Accommodation Options: Additional villas or suites can be arranged for larger groups and special gatherings.",

              "– Private Celebrations & Events: Bespoke arrangements for birthdays, anniversaries, intimate weddings, and corporate retreats.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Kajal",
            description:
              "Had a great stay! The caretaker was helpful, the room was clean and comfortable, and the location was perfect. I would definitely recommend this place to others.",
             },
        },
        note: {
          title: "Note:",
          notes: [
            "Dedicated caretaker support is available on-site daily from 9 AM to 9 PM.",
            "Bespoke offerings such as Chef-on-Call and watersports itineraries require prior booking.",
            "The estate is protected with 24/7 security personnel and CCTV surveillance.",
            "Travel durations to local beaches and restaurants are subject to traffic conditions.",
            "Configurable suite configurations can be arranged with our team upon request.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Magnifica/Magnifica.png",
          "/rooms/Magnifica/magnifica2.webp",
          "/rooms/Magnifica/magnifica6.jpg",
          "/rooms/Magnifica/magnifica12.webp",
          "/rooms/Magnifica/magnifica8.jpg",
          "/rooms/Magnifica/magnifica14.webp",
          "/rooms/Magnifica/magnifica10.webp",
          "/rooms/Magnifica/magnifica11.jpg",
          "/rooms/Magnifica/magnifica18.jpg",
          "/rooms/Magnifica/magnifica19.webp",
          "/rooms/Magnifica/magnifica17.webp",
          "/rooms/Magnifica/magnifica13.webp",
          "/rooms/Magnifica/magnifica4.jpg",
          "/rooms/Magnifica/magnifica1.jpg",
          "/rooms/Magnifica/magnifica5.jpg",
          "/rooms/Magnifica/magnifica9.jpg",
          "/rooms/Magnifica/magnifica15.jpg",
          "/rooms/Magnifica/magnifica16.webp",
          "/rooms/Magnifica/magnifica20.jpg",
          "/rooms/Magnifica/magnifica3.jpg",
          "/rooms/Magnifica/magnifica7.jpg",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Paradiso – The All-Rounder",
        type: "Villa",
        description:
          "Luxury meets laid-back Goan charm. Private pool, terrace with river & mountain views, and a lush lawn perfect for gatherings.",
        amenities: [
          { icon: <BedIcon />, label: "5 Rooms" },
          { icon: <BathTubIcon />, label: "5 Baths" },
          { icon: <GuestIcon />, label: "10 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 28600",
        startingPrice: "₹ 22,000/night",
        moreInfo: {
          title: "Unmatched Scale, Tropical Privacy, and Grand Elegance",
          roominfo: "5 Bedrooms | 5,000 Sq. Ft. | Private 10m Pool | Sprawling Estate",
          description: [
            "Bright, open, and undeniably vibrant, Villa Paradiso by Aroha Palms is designed around the art of effortless hosting. Sprawling across an impressive 5,000 square feet in Mandrem, this 5-bedroom estate boasts the largest and sunniest pool terrace on the property, earning its place as the undeniable social hub of the collection. Framed by lush tropical greenery and set beside a gentle running stream, it offers an inviting oasis where high-end Greek-inspired elegance meets coastal freedom, just a 3-5 minutes' drive from Mandrem Beach.",
            "Days at Paradiso naturally center around the water — from morning laps in the private 10-meter pool to sun-drenched afternoons and golden-hour cocktails on the sweeping deck. Featuring 5 spacious bedrooms and fluid, open-plan living areas that flow seamlessly into the outdoor pool yard, it is uniquely built for families and friends who love to gather, celebrate, and unwind together in total comfort.",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Paradiso stands out as Mandrem's ultimate social estate due to its:",
              "– Generous 5-bedroom floor plan spanning 5,000 sq. ft., crafted for effortless group hosting and togetherness",
              "– Expansive private sundeck surrounding a 10m swimming pool, optimized for all-day sunbathing and poolside dining",
              "– Fluid indoor-outdoor architectural layout connecting main living spaces directly to the terrace",
              "– Serene streamside surroundings providing a peaceful, nature-filled backdrop from sunrise to sunset",
              "– Premium estate infrastructure, including whisper-quiet AC, spa-style rain showers, and high-speed Wi-Fi",
              "– Approx. 3–5 minutes by car to Mandrem Beach and close proximity to iconic dining spots like Thalassa and La Plage",

              "CURATED ADD-ON SERVICES",
              "– Chef-on-Call Service: Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
              "– Private Airport Transfers: Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
              "– Coastal & Watersports Itineraries: Custom activity planning including watersports packages, yacht charters, and local excursions.",
              "– Flexible Accommodation Options: Configurable villa requirements arranged with our reservation specialists to fit your exact group size.",
              "– Event Options: Configurable event arrangements and bespoke hosting services for special occasions. ",
              "Essential Stay Information:",
              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
              "Dedicated On-Site Caretakers: On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
              "Cooking facilities: Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
              "24/7 Estate Security: Complete peace of mind with round-the-clock security personnel and CCTV surveillance",

            ],
          },
          review: {
            author: "Rushikesh Nimbhorkar",
            description:
              "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "Dedicated caretaker assistance is provided on-premises every day from 9 AM to 9 PM.",
            "Specialty services including Chef-on-Call and activity planning require prior notice.",
            "The entire estate is monitored with 24/7 security personnel and CCTV camera coverage.",
            "Estimated driving times to nearby beaches and restaurants are subject to local traffic.",
            "Custom room layouts and additional suite arrangements can be coordinated with our reservation specialists",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Paradiso/Paradiso.png",
          "/rooms/Paradiso/paradiso1.jpg",
          "/rooms/Paradiso/paradiso5.jpg",
          "/rooms/Paradiso/paradiso6.webp",
          "/rooms/Paradiso/paradiso10.jpg",
          "/rooms/Paradiso/paradiso11.jpg",
          "/rooms/Paradiso/paradiso12.jpg",
          "/rooms/Paradiso/paradiso15.webp",
          "/rooms/Paradiso/paradiso2.jpg",
          "/rooms/Paradiso/paradiso4.jpg",
          "/rooms/Paradiso/paradiso3.jpg",
          "/rooms/Paradiso/paradiso7.jpg",
          "/rooms/Paradiso/paradiso8.jpg",
          "/rooms/Paradiso/paradiso9.jpg",
          "/rooms/Paradiso/paradiso14.webp",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Serenity – The Stillwater",
        type: "Villa",
        description:
          "Whitewashed walls, blue accents, lush greenery. A tranquil, spotless retreat with private pool and elegant interiors.",
        amenities: [
          { icon: <BedIcon />, label: "5 Rooms" },
          { icon: <BathTubIcon />, label: "5 Baths" },
          { icon: <GuestIcon />, label: "10 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 28600/night",
        startingPrice: "₹ 22,000/night",
        moreInfo: {
          title: "Understated Luxury Wrapped in Coastal Calm",

          roominfo:
            "5 Bedrooms | 5,000 Sq. Ft. | Private 10m Pool | Peaceful Retreat",

          description: [
            "True to its name, Villa Serenity is a retreat for the senses—a place where time slows down and the gentle murmur of a nearby stream replaces the noise of everyday life. Set within 5,000 square feet of lush tropical gardens in Mandrem, this five-bedroom villa embodies calm in every detail. Just a 3–5 minute drive from the pristine shores of Mandrem Beach, it offers a peaceful sanctuary framed by timeless Greek-inspired architecture and tranquil natural surroundings.",

            "Begin your mornings with coffee on shaded balconies overlooking tropical greenery, unwind beside the private 10-metre swimming pool through the afternoon, and enjoy intimate dinners under the stars as evening sets in. Featuring five beautifully appointed bedrooms and seamless indoor-outdoor living spaces, Villa Serenity is thoughtfully designed for family holidays, wellness retreats, and memorable getaways with friends seeking privacy, comfort, and relaxation.",
          ],

          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Serenity stands out as Mandrem's most peaceful luxury retreat due to its:",

              "– Quiet garden setting surrounded by lush tropical greenery and serene streamside views.",
              "– Spacious 5-bedroom estate spanning 5,000 sq. ft., designed for comfort, privacy, and togetherness.",
              "– Private 10-metre swimming pool with expansive sun decks for peaceful swims and all-day relaxation.",
              "– Timeless Greek-inspired architecture featuring airy layouts, elegant interiors, and soothing colour palettes.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, and high-speed Wi-Fi.",
              "– Prime North Goa location just 3–5 minutes from Mandrem Beach, Ashwem Beach, and renowned dining destinations including Thalassa and La Plage.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, and curated local excursions.",

              "– Flexible Accommodation Options: Additional villas or luxury suites can be arranged for larger groups and extended family stays.",

              "– Private Celebrations & Events: Bespoke arrangements for birthdays, anniversaries, intimate weddings, wellness retreats, and corporate gatherings.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Chirag",
            description:
              "It was amazing experience with aroha palms the luxury villas. This villa one of the best luxury villa in goa the care taker Mr Kuldeep also very nice guy he taking care of us very nicely so definitely visit again. Specially thanks to ishu bhaiya (indrajeet singh rajpurohit) and nikhil Kashyap Bhaiya for geving us this wonderful experience",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Serenity/Serenity.png",
          "/rooms/Serenity/serenity7.jpg",
          "/rooms/Serenity/serenity8.jpg",
          "/rooms/Serenity/serenity9.jpg",
          "/rooms/Serenity/serenity10.jpg",
          "/rooms/Serenity/serenity11.jpg",
          "/rooms/Serenity/serenity13.jpg",
          "/rooms/Serenity/serenity15.jpg",
          "/rooms/Serenity/serenity16.webp",
          "/rooms/Serenity/serenity5.webp",
          "/rooms/Serenity/serenity6.jpg",
          "/rooms/Serenity/serenity14.jpg",
          "/rooms/Serenity/serenity17.webp",
          "/rooms/Serenity/serenity3.webp",
          "/rooms/Serenity/serenity4.jpg",
          "/rooms/Serenity/serenity1.jpg",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Caia – The Reunion",
        type: "Villa",
        description:
          "A luxurious retreat for family reunions and friend getaways. Greek-inspired architecture, private pool, and starlit dinners.",
        amenities: [
          { icon: <BedIcon />, label: "7 Rooms" },
          { icon: <BathTubIcon />, label: "7 Baths" },
          { icon: <GuestIcon />, label: "14 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 40300/night",
        startingPrice: "₹ 31,000/night",
        moreInfo: {
          title: "Together in Luxury, Designed for Every Generation",

          roominfo:
            "7 Bedrooms | Combination Estate: 5-BR Villa + 2-BR Apartment | Sleeps up to 14",

          description: [
            "When a single villa isn't quite enough for your group, Villa Caia offers the perfect step up in space and flexibility. Combining a flagship five-bedroom Greek-inspired villa with an adjacent private two-bedroom luxury apartment, Caia provides seven beautifully appointed bedrooms in total. This thoughtfully designed estate allows multi-generational families and groups of friends to stay together while still enjoying the comfort of separate living quarters. Set beside a tranquil stream and surrounded by lush tropical greenery, it delivers complete privacy just a 3–5 minute drive from Mandrem Beach.",

            "At the heart of the estate lies a private 10-metre swimming pool and expansive outdoor terrace, creating the perfect setting for leisurely poolside lunches, sunset cocktails, and unforgettable evenings under the stars. Seamless indoor-outdoor living spaces and sun-filled Mediterranean-inspired interiors blend modern luxury with warm Goan hospitality, making Villa Caia the ideal destination for family reunions, group celebrations, and extended coastal escapes.",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Caia stands out as Mandrem's premier reunion estate due to its:",

              "– Unique 7-bedroom combination estate featuring a 5-bedroom luxury villa and a private 2-bedroom apartment, comfortably accommodating up to 14 guests.",
              "– Ideal balance of spacious shared living areas and independent private accommodation for families and larger groups.",
              "– Peaceful streamside setting surrounded by lush tropical greenery, offering a tranquil North Goa escape.",
              "– Private 10-metre swimming pool with an expansive terrace, perfect for relaxing, entertaining, and outdoor dining.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, and high-speed Wi-Fi.",
              "– Prime location just 3–5 minutes from Mandrem Beach and close to Ashwem Beach, Morjim Beach, Thalassa, La Plage, and Lazy Dog.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, and curated local excursions.",

              "– Flexible Accommodation Options: Additional villas or luxury suites can be arranged for even larger groups and destination celebrations.",

              "– Private Celebrations & Events: Bespoke arrangements for birthdays, anniversaries, family reunions, intimate weddings, and corporate retreats.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Nilesh Agarwal",
            description:
              "Villa is beautiful. The caretaker kuldip is a great guy. Good service.",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Barbecue can also be arranged at an additional cost.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Serenity/serenity8.jpg",
          "/rooms/Serenity/serenity9.jpg",
          "/rooms/Serenity/serenity4.jpg",
          "/rooms/Serenity/serenity1.jpg",
          "/rooms/Emerald/Emerald.png",
          "/rooms/Emerald/emerald1.jpg",
          "/rooms/Emerald/emerald6.webp",
          "/rooms/Emerald/emerald2.jpg",
          "/rooms/Emerald/emerald3.jpg",
          "/rooms/Emerald/emerald4.jpg",
          "/rooms/Emerald/emerald5.webp",
          "/rooms/Regal/Regal.png",
          "/rooms/Regal/regal1.jpg",
          "/rooms/Regal/regal2.jpg",
          "/rooms/Regal/regal3.jpg",
          "/rooms/Regal/regal4.jpg",
          "/rooms/Regal/regal5.jpg",
          "/rooms/Regal/regal6.jpg",
          "/rooms/Regal/regal7.jpg",
          "/rooms/Regal/regal8.jpg",
          "/rooms/Regal/regal9.webp",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Prana – The Breathing Space ",
        type: "Villa",
        description:
          "A serene sanctuary designed for wellness-focused stays. Perfect for yoga retreats and mindful escapes.",
        amenities: [
          { icon: <BedIcon />, label: "9 Rooms" },
          { icon: <BathTubIcon />, label: "9 Baths" },
          { icon: <GuestIcon />, label: "18 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 52000/night",
        startingPrice: "₹ 40,000/night",
        moreInfo: {
          title: "A Sanctuary of Wellness, Space & Timeless Luxury",

          roominfo:
            "9 Bedrooms | Combination Estate: 5-BR Villa + 4-BR Villa | Sleeps up to 18",

          description: [
            "Named after the Sanskrit word for 'vital life force,' Villa Prana by Aroha Palms is thoughtfully designed as a rejuvenating sanctuary for larger groups seeking connection, relaxation, and renewal. Combining a flagship five-bedroom luxury villa with an adjoining four-bedroom villa, this expansive nine-bedroom estate offers generous living spaces that encourage guests to slow down, reconnect, and embrace Goa's peaceful rhythm. Nestled beside a tranquil stream and surrounded by lush tropical greenery in Mandrem, Villa Prana provides an inspiring setting for wellness retreats, family reunions, and unforgettable group escapes—just a 3–5 minute drive from the pristine shores of Mandrem Beach.",

            "Begin your mornings with yoga on the manicured lawns, spend sun-soaked afternoons beside the private 10-metre swimming pool, and gather under the stars for memorable alfresco dinners. Seamless indoor-outdoor living, elegant Mediterranean-inspired interiors, and thoughtfully curated spaces create the perfect balance between peaceful privacy and vibrant togetherness, making Villa Prana an exceptional destination for restorative holidays and meaningful celebrations.",
          ],

          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Prana stands out as Mandrem's premier wellness and retreat estate due to its:",

              "– Expansive 9-bedroom estate combining a luxurious 5-bedroom villa with an adjoining 4-bedroom villa, comfortably accommodating up to 18 guests.",
              "– Elegant Mediterranean-inspired architecture featuring bright, airy interiors and thoughtfully designed living spaces.",
              "– Peaceful streamside setting surrounded by lush tropical greenery, creating the perfect environment for relaxation and rejuvenation.",
              "– Private 10-metre swimming pool with spacious sun decks, ideal for yoga sessions, leisurely swims, and outdoor gatherings.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, premium entertainment systems, and high-speed Wi-Fi.",
              "– Prime North Goa location just 3–5 minutes from Mandrem Beach and close to Ashwem Beach, Morjim Beach, Thalassa, La Plage, and Lazy Dog.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, and curated local excursions.",

              "– Flexible Accommodation Options: Additional villas or luxury suites can be arranged for larger groups, destination celebrations, and extended stays.",

              "– Private Celebrations & Events: Bespoke arrangements for birthdays, anniversaries, wellness retreats, family reunions, intimate weddings, and corporate offsites.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Rajatha BM",
            description:
              "Great property, good food and amazing service. Manoj Yadav, Gudiya Yadav (care takers) took good care of our stay for 2 nights and 3 days",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Barbecue can also be arranged at an additional cost.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Magnifica/Magnifica.png",
          "/rooms/Magnifica/magnifica2.webp",
          "/rooms/Magnifica/magnifica6.jpg",
          "/rooms/Magnifica/magnifica12.webp",
          "/rooms/Magnifica/magnifica8.jpg",
          "/rooms/Magnifica/magnifica14.webp",
          "/rooms/Magnifica/magnifica10.webp",
          "/rooms/Magnifica/magnifica11.jpg",
          "/rooms/Magnifica/magnifica18.jpg",
          "/rooms/Magnifica/magnifica19.webp",
          "/rooms/Paradiso/Paradiso.png",
          "/rooms/Paradiso/paradiso1.jpg",
          "/rooms/Paradiso/paradiso5.jpg",
          "/rooms/Paradiso/paradiso6.webp",
          "/rooms/Paradiso/paradiso10.jpg",
          "/rooms/Paradiso/paradiso11.jpg",
          "/rooms/Paradiso/paradiso12.jpg",
          "/rooms/Paradiso/paradiso15.webp",
          "/rooms/Paradiso/paradiso2.jpg",
          "/rooms/Paradiso/paradiso4.jpg",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Encanto – The Celebration House",
        type: "Villa",
        description:
          "A luxurious yet homely vibe. Private pool, spacious terrace, and sundowners under Goan skies.",
        amenities: [
          { icon: <BedIcon />, label: "10 Rooms" },
          { icon: <BathTubIcon />, label: "10 Baths" },
          { icon: <GuestIcon />, label: "20 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 57200/night",
        startingPrice: "₹ 44,000/night",
        moreInfo: {
          title: "Where Grand Celebrations Meet Timeless Luxury",

          roominfo:
            "10 Bedrooms | Combination Estate: Two Joined 5-BR Villas | Sleeps up to 20",

          description: [
            "Created by seamlessly combining two of our flagship five-bedroom luxury villas, Villa Encanto is purpose-built for life's biggest celebrations. Offering ten spacious bedrooms, dual living halls, expansive entertainment areas, and private pool spaces, this grand estate delivers the perfect blend of scale, sophistication, and comfort for milestone birthdays, family reunions, destination celebrations, and memorable group getaways. Nestled beside a tranquil stream and surrounded by lush tropical greenery, Villa Encanto offers an exclusive retreat in North Goa, just a 3–5 minute drive from the pristine shores of Mandrem Beach.",

            "Designed for effortless entertaining, the estate invites guests to gather on the expansive lawns, spacious terrace decks, and poolside lounges for sunset cocktails, barbecue evenings, and unforgettable celebrations under the stars. At the same time, two independent villas provide peaceful private spaces for relaxation whenever needed. Seamless indoor-outdoor living, elegant Mediterranean-inspired interiors, and thoughtfully curated spaces create an elevated atmosphere where every occasion becomes a lasting memory.",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Encanto stands out as Mandrem's premier celebration estate due to its:",

              "– Expansive 10-bedroom estate created by combining two luxurious 5-bedroom villas, comfortably accommodating up to 20 guests.",
              "– Dual living halls and spacious entertainment areas offering the perfect balance between social gatherings and private relaxation.",
              "– Peaceful streamside setting surrounded by lush tropical greenery, delivering privacy and North Goa's signature susegad lifestyle.",
              "– Private 10-metre swimming pools, expansive lawns, and scenic terrace decks designed for outdoor dining, celebrations, and all-day relaxation.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, premium entertainment systems, and high-speed Wi-Fi.",
              "– Prime North Goa location just 3–5 minutes from Mandrem Beach and close to Ashwem Beach, Morjim Beach, Thalassa, La Plage, and Lazy Dog.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, and curated local excursions.",

              "– Flexible Accommodation Options: Additional villas or luxury suites can be arranged for larger celebrations and destination events.",

              "– Private Celebrations & Events: Bespoke arrangements for birthdays, anniversaries, family reunions, destination weddings, corporate retreats, and private celebrations.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Barbecue can also be arranged at an additional cost.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Paradiso/Paradiso.png",
          "/rooms/Paradiso/paradiso1.jpg",
          "/rooms/Paradiso/paradiso5.jpg",
          "/rooms/Paradiso/paradiso6.webp",
          "/rooms/Paradiso/paradiso10.jpg",
          "/rooms/Paradiso/paradiso11.jpg",
          "/rooms/Paradiso/paradiso12.jpg",
          "/rooms/Paradiso/paradiso15.webp",
          "/rooms/Paradiso/paradiso2.jpg",
          "/rooms/Serenity/Serenity.png",
          "/rooms/Serenity/serenity8.jpg",
          "/rooms/Serenity/serenity9.jpg",
          "/rooms/Serenity/serenity4.jpg",
          "/rooms/Serenity/serenity1.jpg",
          "/rooms/Paradiso/paradiso4.jpg",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Villa Marisol – The Grand Estate",
        type: "Grand Villa",
        description:
          "Our largest retreat. Ideal for weddings, corporate offsites and large celebrations with unmatched space and privacy.",
        amenities: [
          { icon: <BedIcon />, label: "18 Rooms" },
          { icon: <BathTubIcon />, label: "18 Baths" },
          { icon: <GuestIcon />, label: "36 Guests" },
        ],
        inRoomAmenities: [
          {
            icon: <HighSpeedInternetIcon />,
            label: "High Speed Internet",
          },
          {
            icon: <EvChargingFacilityIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <WorkStationIcon />,
            label: "Work Station",
          },

          {
            icon: <SwimmingPoolIcon />,
            label: "Swimming Pool",
          },
          {
            icon: <SmartTvIcon />,
            label: "Smart TV",
          },
          {
            icon: <KitchenIcon />,
            label: "Kitchen",
          },
          {
            icon: <BathroomIcon />,
            label: "Bathroom",
          },
        ],
        originalPrice: "₹ 97500/night",
        startingPrice: " ₹ 75,000/night",
        moreInfo: {
          title: "The Ultimate Private Luxury Estate in North Goa",

          roominfo:
            "18 Bedrooms | Full Compound: All 3 Villas + 2 Apartments | Sleeps up to 36",

          description: [
            "The pinnacle of private group luxury in North Goa, Villa Marisol by Aroha Palms offers the ultimate exclusive takeover of our Mandrem collection. Combining all three signature luxury villas with two adjoining two-bedroom apartments, this magnificent 18-bedroom estate transforms individual residences into one seamless private sanctuary, comfortably accommodating up to 36 guests. Nestled beside a tranquil stream and surrounded by lush tropical greenery, Villa Marisol delivers exceptional privacy, generous open spaces, and an unforgettable setting just a 3–5 minute drive from the pristine shores of Mandrem Beach.",

            "Thoughtfully designed for destination weddings, corporate offsites, milestone celebrations, wellness retreats, and large multi-generational family gatherings, Villa Marisol offers an unmatched combination of scale and sophistication. Guests enjoy exclusive access to three private 10-metre swimming pools, expansive sun terraces, beautifully landscaped lawns, and elegant indoor-outdoor living spaces that encourage both vibrant celebrations and peaceful moments of relaxation. Every corner of the estate has been curated to create an extraordinary coastal retreat where unforgettable memories are made together.",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Marisol stands out as North Goa's premier private luxury compound due to its:",

              "– Expansive 18-bedroom private estate comprising three luxury villas and two private apartments, comfortably accommodating up to 36 guests.",
              "– Exclusive access to the entire compound, ensuring complete privacy for celebrations, retreats, destination events, and extended family gatherings.",
              "– Three private 10-metre swimming pools with spacious sun decks, landscaped gardens, and multiple outdoor entertainment areas.",
              "– Peaceful streamside location surrounded by lush tropical greenery, offering a serene escape while embracing North Goa's relaxed susegad lifestyle.",
              "– Premium amenities including whisper-quiet air conditioning, spa-style rain showers, Smart TVs, premium entertainment systems, and high-speed Wi-Fi throughout the estate.",
              "– Prime location just 3–5 minutes from Mandrem Beach and close to Ashwem Beach, Morjim Beach, Thalassa, La Plage, Lazy Dog, and North Goa's finest cafés and beach clubs.",

              "CURATED ADD-ON SERVICES",

              "– Private Chef Experience: Enjoy freshly prepared gourmet meals served in the comfort of your villa—from leisurely poolside breakfasts to bespoke multi-course dinners (advance booking required).",

              "– Private Airport Transfers: Chauffeur-driven transfers to and from Mopa (GOX) and Dabolim (GOI) airports (advance booking required).",

              "– Personalised Coastal Experiences: Tailor-made itineraries featuring watersports, yacht charters, sightseeing tours, beach hopping, and curated local excursions.",

              "– Flexible Accommodation Options: Configurable villa and apartment combinations can be arranged to perfectly suit your group's requirements.",

              "– Private Celebrations & Events: Bespoke arrangements for destination weddings, milestone birthdays, anniversaries, wellness retreats, corporate offsites, gala dinners, and private celebrations.",

              "Essential Stay Information:",

              "1. All rates are quoted on a full-compound buyout, per-night basis for up to 36 guests.",

              "2. Dedicated on-site caretakers are available daily from 9:00 AM to 9:00 PM for housekeeping and guest assistance.",

              "3. Villa kitchens are fully equipped for self-cooking, while the adjacent restaurant also offers convenient in-villa meal delivery.",

              "4. 24/7 estate security with professional personnel and CCTV surveillance for complete peace of mind.",
            ],
          },
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
          },
        },
        note: {
          title: "Note:",
          notes: [
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Barbecue can also be arranged at an additional cost.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Magnifica/Magnifica.png",
          "/rooms/Magnifica/magnifica2.webp",
          "/rooms/Magnifica/magnifica6.jpg",
          "/rooms/Magnifica/magnifica12.webp",
          "/rooms/Magnifica/magnifica8.jpg",
          "/rooms/Magnifica/magnifica14.webp",
          "/rooms/Magnifica/magnifica10.webp",
          "/rooms/Magnifica/magnifica11.jpg",
          "/rooms/Magnifica/magnifica18.jpg",
          "/rooms/Magnifica/magnifica19.webp",
          "/rooms/Paradiso/Paradiso.png",
          "/rooms/Paradiso/paradiso1.jpg",
          "/rooms/Paradiso/paradiso5.jpg",
          "/rooms/Paradiso/paradiso6.webp",
          "/rooms/Paradiso/paradiso10.jpg",
          "/rooms/Paradiso/paradiso11.jpg",
          "/rooms/Paradiso/paradiso12.jpg",
          "/rooms/Paradiso/paradiso15.webp",
          "/rooms/Paradiso/paradiso2.jpg",
          "/rooms/Serenity/Serenity.png",
          "/rooms/Serenity/serenity8.jpg",
          "/rooms/Serenity/serenity9.jpg",
          "/rooms/Serenity/serenity4.jpg",
          "/rooms/Serenity/serenity1.jpg",
          "/rooms/Paradiso/paradiso4.jpg",
          "/rooms/Magnifica/magnifica17.webp",
          "/rooms/Magnifica/magnifica13.webp",
          "/rooms/Magnifica/magnifica4.jpg",
          "/rooms/Magnifica/magnifica1.jpg",
          "/rooms/Magnifica/magnifica5.jpg",
          "/rooms/Magnifica/magnifica9.jpg",
          "/rooms/Magnifica/magnifica15.jpg",
          "/rooms/Magnifica/magnifica16.webp",
          "/rooms/Magnifica/magnifica20.jpg",
          "/rooms/Magnifica/magnifica3.jpg",
          "/rooms/Magnifica/magnifica7.jpg",
          "/rooms/Emerald/Emerald.png",
          "/rooms/Emerald/emerald1.jpg",
          "/rooms/Emerald/emerald6.webp",
          "/rooms/Emerald/emerald2.jpg",
          "/rooms/Emerald/emerald3.jpg",
          "/rooms/Emerald/emerald4.jpg",
          "/rooms/Emerald/emerald5.webp",
          "/rooms/Regal/Regal.png",
          "/rooms/Regal/regal1.jpg",
          "/rooms/Regal/regal2.jpg",
          "/rooms/Regal/regal3.jpg",
          "/rooms/Regal/regal4.jpg",
          "/rooms/Regal/regal5.jpg",
          "/rooms/Regal/regal6.jpg",
          "/rooms/Regal/regal7.jpg",
          "/rooms/Regal/regal8.jpg",
          "/rooms/Regal/regal9.webp",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },

      // {
      //   title: "Suite De Onyx",
      //   type: "Apartment",
      //   description:
      //     "Mediterranean-inspired apartment with two king suites, workstations, kitchen, and secluded balconies.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "2 BR" },
      //     { icon: <BathTubIcon />, label: "2 Baths" },
      //     { icon: <GuestIcon />, label: "4 Guests" },
      //     { label: "1200 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: ["/rooms/Onyx/Onyx.png"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Suite De Lumina",
      //   type: "Apartment",
      //   description:
      //     "Sunlit master suites with king-size beds. Ideal for families and friend groups seeking a tranquil base.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "2 BR" },
      //     { icon: <BathTubIcon />, label: "2 Baths" },
      //     { icon: <GuestIcon />, label: "4 Guests" },
      //     { label: "1200 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: ["/rooms/Lumina/Lumina.png"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Suite De Emerald",
      //   type: "Apartment",
      //   description:
      //     "Calm coastal sensibility with a fully equipped kitchen and workstation. Second-floor with lift access.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "1 BR" },
      //     { icon: <BathTubIcon />, label: "1 Bath" },
      //     { icon: <GuestIcon />, label: "2 Guests" },
      //     { label: "800 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: [
      //     "/rooms/Emerald/Emerald.png",
      //     "/rooms/Emerald/emerald1.jpg",
      //     "/rooms/Emerald/emerald6.webp",
      //     "/rooms/Emerald/emerald2.jpg",
      //     "/rooms/Emerald/emerald3.jpg",
      //     "/rooms/Emerald/emerald4.jpg",
      //     "/rooms/Emerald/emerald5.webp",
      //   ],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Suite De Platinum",
      //   type: "Studio",
      //   description:
      //     "A thoughtfully designed studio retreat. Master suite with king-size bed and dedicated workstation.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "Studio" },
      //     { icon: <BathTubIcon />, label: "1 Bath" },
      //     { icon: <GuestIcon />, label: "2 Guests" },
      //     { label: "400 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: ["/rooms/Platinum/Platinum.png"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Suite De Prestige",
      //   type: "Studio",
      //   description:
      //     "Sunlit master suite with king-size bed, terrace, and in room essentials for effortless coastal stays.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "Studio" },
      //     { icon: <BathTubIcon />, label: "1 Bath" },
      //     { icon: <GuestIcon />, label: "2 Guests" },
      //     { label: "400 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: ["/rooms/Prestige/Prestige.png"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Suite De Regal",
      //   type: "Apartment",
      //   description:
      //     "Spacious master suite, fully equipped kitchen, and a versatile layout for couples, friends and families.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "1 BR" },
      //     { icon: <BathTubIcon />, label: "1 Bath" },
      //     { icon: <GuestIcon />, label: "2 Guests" },
      //     { label: "800 sqft" },
      //   ],
      //   location: "MANDREM",
      //   images: [
      //     "/rooms/Regal/Regal.png",
      //     "/rooms/Regal/regal1.jpg",
      //     "/rooms/Regal/regal2.jpg",
      //     "/rooms/Regal/regal3.jpg",
      //     "/rooms/Regal/regal4.jpg",
      //     "/rooms/Regal/regal5.jpg",
      //     "/rooms/Regal/regal6.jpg",
      //     "/rooms/Regal/regal7.jpg",
      //     "/rooms/Regal/regal8.jpg",
      //     "/rooms/Regal/regal9.webp",
      //   ],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Aroha palms majestic",
      //   type: "Apartment",
      //   description:
      //     "Greek-inspired villa nestled between river and mountains, just 2 km from Mandrem Beach for a serene tropical escape.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "5 Rooms" },
      //     { icon: <BathTubIcon />, label: "5 Bath" },
      //     { icon: <GuestIcon />, label: "14 Guests" },
      //   ],
      //   location: "pilerne",
      //   images: ["/rooms/Majestic/Majestic.jpg"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
      // {
      //   title: "Aroha palms grande",
      //   type: "Apartment",
      //   description:
      //     "Luxury six-bedroom art villa blending privacy, elegance, and comfort in Goa's serene countryside near the beaches.",
      //   amenities: [
      //     { icon: <BedIcon />, label: "6 Rooms" },
      //     { icon: <GuestIcon />, label: "12 Guests" },
      //   ],
      //   location: "pilerne",
      //   images: ["/rooms/Grande/Grande.jpg"],
      //   cta: {
      //     label: "Book Now",
      //     href: contact.WhatsappCta,
      //   },
      // },
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
          "24/7 dedicated concierge for bookings, transfers, chef service and events.",
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
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
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
  experienceSection: {
    tagline: "BEYOND THE VILLA",
    title: "Live Goa the local way.",
    experiences: [
      {
        title: "Beach & Adventure",
        image: "/landing-page/beach.png",
        description:
          "Sunlit beaches, water sports and coastal trails just a short drive away.",
      },
      {
        title: "Heritage & Culture",
        image: "/landing-page/culture.png",
        description:
          "Explore churches, forts and local markets where Goa's history comes alive.",
      },
      {
        title: "Casino & Nightlife",
        image: "/landing-page/casino.png",
        description:
          "Cruise casinos, live music and Goa's iconic beach clubs after dark.",
      },
      {
        title: "Yoga & Wellbeing",
        image: "/landing-page/yoga.png",
        description:
          "Yoga sessions, Ayurvedic rituals, and calm surroundings for inner ease.",
      },
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  testimonials: {
    tagline: "GUEST STORIES",
    title: "Trusted by travellers.",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    reviews: [
      {
        name: "Naveen Kumar Dagar",
        review:
          "Amazing place amazing staff members Kuldeep, seeta ji and Manoj everyone is very nice and taking care of small small requirements, will miss this villa, checking out today",
      },
      {
        name: "vedant chavan",
        review:
          "The place and the staff of this place is very polite and gives homely vibes to all its guet, specially manoj ji who manages it is very friemdly and always ready to help the person It feels like the dream house of many people",
      },
      {
        name: "Gudiya Yadav",
        review:
          "Paradiso is an excellent luxury villa for families and groups visiting Goa. Beautiful interiors, relaxing pool area, and easy access to restaurants, nightlife, and beaches. We especially appreciated that the beach was only a 2-minute drive away manager Manoj yadav was very helpful,kind and loyal ",
      },
      {
        name: "Atharva burle",
        review:
          "The villa was superb , and villa manager named Mr. Manoj he treated us very well and was too nyc and kind . I enjoyed a lot . 😃",
      },
      {
        name: "Sonu Rawat",
        review:
          "Aroha Palms Paradiso combines luxury, privacy, and location perfectly. The villa is close to Mandrem and Ashwem beaches while still feeling calm and exclusive. Loved evenings at Lazy Dog and the nearby cafes. One of the finest luxury villas in Goa",
      },
    ],
  },

  faq: {
    image: "",
    tagline: "ANSWERS",
    title: "Everything you want to know.",
    items: [
      {
        q: "How much does a stay at Aroha Palms cost?",
        a: "Rates vary by season, villa type, and duration. Share your dates via the enquiry form and our concierge will send you a personalised quote within a few hours.",
      },
      {
        q: "What are the check-in and check-out timings?",
        a: "Standard check-in is 2:00 PM and check-out is 11:00 AM. Early check-in or late check-out can be arranged based on availability.",
      },
      {
        q: "Can I book a villa for weddings or corporate offsites?",
        a: "Yes. Villas like Marisol (36 guests) and Encanto (20 guests) are ideal for weddings, birthday celebrations and corporate offsites. Our team helps with décor, catering and event planning.",
      },
      {
        q: "Are the villas pet-friendly?",
        a: "Select villas welcome well-behaved pets. Please mention it in your enquiry so we can confirm and prepare the villa.",
      },
      {
        q: "Do all properties have private pools?",
        a: "Every villa at Aroha Palms features a private Swimming Pool. Apartments and suites have access to the shared property pool.",
      },
      {
        q: "Is the location safe?",
        a: "All properties feature 24/7 on-site security, CCTV surveillance, and a dedicated concierge available round the clock.",
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
};
