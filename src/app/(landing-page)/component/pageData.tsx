import {
  BathroomIcon,
  EvChargingFacilityIcon,
  HighSpeedInternetIcon,
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
    "Monsoon Bonanza 30% off limited time offer valid till <span class='text-[#A20000]'>31st August.</span> Use discount code : <span class='text-[#A20000]'>MONSOON30</span>",
    "Monsoon Bonanza 30% off limited time offer valid till <span class='text-[#A20000]'>31st August.</span> Use discount code : <span class='text-[#A20000]'>MONSOON30</span>",
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
    title: "Luxury Villas Crafted for Your Perfect Goa Getaway",
    description:
      "Explore every villa, apartment and suite across Mandrem, each one thoughtfully designed for private, unhurried Goa stays.",
    note: "Some trips need room for everyone. Our villas and apartments join into larger estates a villa and an apartment for the family, two villas for a celebration, or the full compound for 36. Whatever the size, everything stays private and the hosting is handled.",
    cards: [
      {
        title: "Villa Magnifica",
        discountCode: "MONSOON30",
        span: "The Intimate One",
        type: "Villa",
        description: "Mediterranean Grace Meets Coastal Tranquility",
        amenities: [
          { icon: <BedIcon />, label: "4 Rooms" },
          { icon: <BathTubIcon />, label: "4 Baths" },
          { icon: <GuestIcon />, label: "8 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 23400/night",
        startingPrice: "From ₹ 28,000/night",
        moreInfo: {
          title: "Mediterranean Grace Meets Coastal Tranquility",
          roomInfo: [
            "4 Bedrooms ",
            "4,000 Sq. Ft. ",
            "Private 10m Pool ",
            "Streamside Sanctuary",
          ],
          description: [
            "Where the soothing rhythm of a flowing stream meets Mediterranean architecture, Villa Magnifica is the hidden gem of our Mandrem collection. Spanning 4,000 square feet of private sanctuary, this intimate retreat owns its waterfront setting, offering guests an exclusive escape immersed in nature's quiet beauty. Just a 3-5-minute drive from the shores of Mandrem Beach, it provides the ultimate balance between quiet seclusion and coastal adventure.",
            "Wake up to bird calls over the water, spend peaceful afternoons beside your private 10-meter pool, or host low-key sundowners on the breezy balcony. Featuring 4 light-filled bedrooms and an airy indoor-outdoor layout, Villa Magnifica is crafted specifically for intimate family stays, small group retreats, or couples seeking a secluded Goan sanctuary. And when you're ready for the sea? The white sands of Mandrem Beach are just minutes away.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Magnifica stands out as Mandrem's premier waterfront sanctuary due to its:",
              list: [
                "Intimate 4-bedroom layout across 4,000 sq. ft., offering maximum privacy for smaller groups",
                "Prime streamside positioning, delivering soothing water views and nature-filled backdrops from morning to night",
                "Timeless Mediterranean aesthetic featuring sunlit living spaces and refined interior finishes",
                "Private 10m swimming pool and poolside terrace designed for quiet relaxation under the Goan sun",
                "Premium estate infrastructure, including whisper-quiet AC, spa-inspired rain showers, and smart entertainment displays",
                "Prime location approx. 3–5 minutes drive from Mandrem Beach and close to culinary icons like La Plage and Thalassa, and Lazy Dog",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable villa requirements arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Kajal",
            description:
              "Had a great stay! The caretaker was helpful, the room was clean and comfortable, and the location was perfect. I would definitely recommend this place to others.",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Magnifica"),
        },
      },
      {
        title: "Villa Paradiso",
        discountCode: "MONSOON30",
        span: " The All-Rounder",
        type: "Villa",
        description: "Unmatched Scale, Tropical Privacy, and Grand Elegance",
        amenities: [
          { icon: <BedIcon />, label: "5 Rooms" },
          { icon: <BathTubIcon />, label: "5 Baths" },
          { icon: <GuestIcon />, label: "10 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 28600",
        startingPrice: "From ₹ 35,000/night",
        moreInfo: {
          title: "Unmatched Scale, Tropical Privacy, and Grand Elegance",
          roomInfo: [
            "5 Bedrooms",
            "5,000 Sq. Ft.",
            "Private 10m Pool",
            "Sprawling Estate",
          ],
          description: [
            "Bright, open, and undeniably vibrant, Villa Paradiso by Aroha Palms is designed around the art of effortless hosting. Sprawling across an impressive 5,000 square feet in Mandrem, this 5-bedroom estate boasts the largest and sunniest pool terrace on the property, earning its place as the undeniable social hub of the collection. Framed by lush tropical greenery and set beside a gentle running stream, it offers an inviting oasis where high-end Greek-inspired elegance meets coastal freedom, just a 3-5 minutes' drive from Mandrem Beach.",
            "Days at Paradiso naturally center around the water — from morning laps in the private 10-meter pool to sun-drenched afternoons and golden-hour cocktails on the sweeping deck. Featuring 5 spacious bedrooms and fluid, open-plan living areas that flow seamlessly into the outdoor pool yard, it is uniquely built for families and friends who love to gather, celebrate, and unwind together in total comfort.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Paradiso stands out as Mandrem's ultimate social estate due to its:",
              list: [
                "Generous 5-bedroom floor plan spanning 5,000 sq. ft., crafted for effortless group hosting and togetherness",
                "Expansive private sundeck surrounding a 10m swimming pool, optimized for all-day sunbathing and poolside dining",
                "Fluid indoor-outdoor architectural layout connecting main living spaces directly to the terrace",
                "Serene streamside surroundings providing a peaceful, nature-filled backdrop from sunrise to sunset",
                "Premium estate infrastructure, including whisper-quiet AC, spa-style rain showers, and high-speed Wi-Fi",
                "Approx. 3–5 minutes by car to Mandrem Beach and close proximity to iconic dining spots like Thalassa and La Plage",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable villa requirements arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Rushikesh Nimbhorkar",
            description:
              "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Paradiso"),
        },
      },
      {
        title: "Villa Serenity",
        discountCode: "MONSOON30",
        span: "The Stillwater",
        type: "Villa",
        description: "Understated Luxury Wrapped in Coastal Calm",
        amenities: [
          { icon: <BedIcon />, label: "5 Rooms" },
          { icon: <BathTubIcon />, label: "5 Baths" },
          { icon: <GuestIcon />, label: "10 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 28600/night",
        startingPrice: "From ₹ 35,000/night",
        moreInfo: {
          title: "Understated Luxury Wrapped in Coastal Calm",
          roomInfo: [
            "5 Bedrooms",
            "5,000 Sq. Ft.",
            "Private 10m Pool",
            "Peaceful Retreat",
          ],
          description: [
            "True to its name, Villa Serenity is a retreat for the senses — a place where time slows down and the gentle murmur of a nearby stream replaces the noise of daily life. Set within 5,000 square feet of lush garden grounds in Mandrem, this 5-bedroom villa distills calm into every detail. Located just a 3-5 minutes' drive from the white sands of Mandrem Beach, it offers a peaceful haven wrapped in timeless Greek-inspired architecture.",
            "Spend your mornings sipping coffee on shaded balconies overlooking tropical foliage, afternoons relaxing beside the private 10-meter pool, and evenings indulging in quiet dining under the stars. Designed with 5 beautifully styled bedrooms and fluid indoor-outdoor living spaces, Villa Serenity is crafted for restful group holidays, multi-generational family gatherings, or wellness retreats. Pack your bags—your peaceful paradise awaits!",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Serenity stands out as Mandrem's most peaceful retreat due to its:",
              list: [
                "Quiet garden setting wrapped in lush tropical greenery and calm streamside views",
                "5 light-filled, beautifully appointed bedrooms spanning 5,000 sq. ft. of private estate",
                "Private 10m swimming pool surrounded by open decks, ideal for sunbathing and tranquil swims",
                "Timeless Greek-inspired design featuring airy layouts and soothing interior palettes",
                "Premium living infrastructure, including whisper-quiet AC, spa-style rain showers, and smart entertainment systems",
                "Prime position in North Goa, approx. 3–5 minutes drive to Mandrem Beach, Ashwem, and top dining spots like Thalassa and La Plage",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Chirag",
            description:
              "It was amazing experience with aroha palms the luxury villas. This villa one of the best luxury villa in goa the care taker Mr Kuldeep also very nice guy he taking care of us very nicely so definitely visit again. Specially thanks to ishu bhaiya (indrajeet singh rajpurohit) and nikhil Kashyap Bhaiya for geving us this wonderful experience",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Serenity"),
        },
      },
      {
        title: "Villa Caia",
        discountCode: "MONSOON30",
        span: "The Reunion",
        type: "Villa",
        description: "Together in Luxury, Designed for Every Generation",
        amenities: [
          { icon: <BedIcon />, label: "7 Rooms" },
          { icon: <BathTubIcon />, label: "7 Baths" },
          { icon: <GuestIcon />, label: "14 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 40300/night",
        startingPrice: "From ₹ 45,000/night",
        moreInfo: {
          title: "Together in Luxury, Designed for Every Generation",
          roomInfo: [
            "7 Bedrooms",
            "Combination Estate: 5-BR Villa + 2-BR Apartment",
            "Sleeps up to 14",
          ],
          description: [
            "When a single villa isn't quite enough for your group, Villa Caia offers the perfect step up in space and flexibility. Combining a flagship 5-bedroom Greek-inspired villa with an adjacent, private 2-bedroom luxury apartment, Caia provides 7 bedrooms in total. This thoughtful layout gives multi-generational families or groups of friends the ability to holiday together on the same private grounds while retaining separate living quarters for quiet downtime. Situated along a serene streamside and framed by lush tropical greenery, it delivers absolute privacy just a 3-5 minutes' drive from Mandrem Beach.",
            "Centered around a refreshing 10-meter private pool and spacious outdoor terrace, Villa Caia sets a captivating scene for Goa's signature sundowners, poolside lunches, and evening toasts under the stars. Fluid indoor-outdoor living areas and sun-drenched interiors balance warm Goan hospitality with subtle Mediterranean luxury. Whether hosting a family reunion or relaxing on a long-awaited escape, Caia offers an upscale, welcoming vibe that turns every moment into a lasting memory.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Caia stands out as Mandrem's premier reunion estate due to its:",
              list: [
                "Versatile 7-bedroom combination layout, uniting a 5-BR villa and a 2-BR luxury apartment for up to 14 guests",
                "Perfect balance of vibrant shared spaces for gathering and independent private quarters for quiet downtime",
                "Peaceful streamside setting in North Goa, offering a quiet environment to immerse yourself in the susegad lifestyle",
                "Private 10m swimming pool and scenic lounging terrace deck, ideal for all-day sunbathing and poolside dining",
                "Elevated modern infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
                "Prime location near North Goa's vibrant beach circuit (approx. 3–5 minutes drive) and celebrated dining venues like Thalassa, La Plage, and Lazy Dog",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Nilesh Agarwal",
            description:
              "Villa is beautiful. The caretaker kuldip is a great guy. Good service.",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Caia"),
        },
      },
      {
        title: "Villa Prana",
        discountCode: "MONSOON30",
        span: " The Breathing Space",
        type: "Villa",
        description: "A Sanctuary of Wellness, Space & Timeless Luxury",
        amenities: [
          { icon: <BedIcon />, label: "9 Rooms" },
          { icon: <BathTubIcon />, label: "9 Baths" },
          { icon: <GuestIcon />, label: "18 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 52000/night",
        startingPrice: "From ₹ 63,000/night",
        moreInfo: {
          title: "A Sanctuary of Wellness, Space & Timeless Luxury",
          roomInfo: [
            "9 Bedrooms",
            "Combination Estate: 5-BR Villa + 4-BR Villa",
            "Sleeps up to 18",
          ],
          description: [
            "Named after the Sanskrit word for 'vital life force,' Villa Prana by Aroha Palms is designed as a rejuvenating breathing space for larger groups. Spanning 9 bedrooms across a flagship 5-bedroom luxury villa and connected 4-bedroom luxury villa, this estate offers the spatial and mental room needed to slow down, stretch out, and exhale. Set along a calm stream surrounded by lush tropical greenery in Mandrem, it provides an uplifting backdrop for wellness retreats, extended family reunions, or creative group getaways. Best of all, the golden sands of Mandrem Beach are just 3-5 minutes' drive away.",
            "Spend your mornings practicing yoga on the manicured lawn, afternoons lounging beside the private 10-meter pool, and evenings dining under open skies. The villa's seamless indoor-outdoor layout and bright, picture-perfect interiors make it an exceptional choice for those seeking both restorative privacy and vibrant communal gathering.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Prana stands out as a dedicated wellness and retreat destination due to its:",
              list: [
                "Generous 9-bedroom estate featuring 5-BR and 4-BR villas side-by-side, providing generous space and refined comfort for up to 18 guests",
                "Timeless Greek-inspired architecture featuring bright, elegant spaces and stylish interior design",
                "Peaceful streamside setting in North Goa, wrapping your stay in calm natural surroundings and the authentic susegad spirit",
                "Private 10m swimming pool and scenic terrace deck, ideal for poolside lounging, morning yoga, and refreshing swims",
                "Flawless modern infrastructure, including whisper-quiet climate control, high-pressure rain showers, and premium sound systems",
                "Prime access to North Goa's finest beaches (approx. 3–5 minutes drive) and dining spots like Thalassa, La Plage, and Lazy Dog",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Rajatha BM",
            description:
              "Great property, good food and amazing service. Manoj Yadav, Gudiya Yadav (care takers) took good care of our stay for 2 nights and 3 days",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Prana"),
        },
      },
      {
        title: "Villa Encanto",
        discountCode: "MONSOON30",
        span: "The Celebration House",
        type: "Villa",
        description: "Where Grand Celebrations Meet Timeless Luxury",
        amenities: [
          { icon: <BedIcon />, label: "10 Rooms" },
          { icon: <BathTubIcon />, label: "10 Baths" },
          { icon: <GuestIcon />, label: "20 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 57200/night",
        startingPrice: "From ₹ 70,000/night",
        moreInfo: {
          title: "Where Grand Celebrations Meet Timeless Luxury",
          roomInfo: [
            "10 Bedrooms",
            "Combination Estate: Two Joined 5-BR Villas",
            "Sleeps up to 20",
          ],
          description: [
            "Created by joining two of our flagship 5-bedroom luxury villas, Villa Encanto is purpose-built for life's big moments. Offering 10 spacious bedrooms, dual living halls, and private pool spaces, this grand compound provides the scale and sophistication required for milestone birthdays, family reunions, and special gatherings. Positioned along a calm, flowing stream and surrounded by lush tropical greenery, it serves as an exclusive, peaceful haven in North Goa. Best of all, the sun-kissed shores of Mandrem Beach are just 3-5 minutes' drive away.",
            "Here, grand occasion hosting feels effortless. Guests can gather together on the central lawn and sweeping terrace decks for sunset cocktails and barbecue evenings, while enjoying the luxury of two distinct villas to retreat to at night. Designed with fluid indoor-outdoor living areas and light-filled interiors, Villa Encanto offers an elevated, luxurious vibe where relaxation and celebration come naturally.",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Encanto stands out as Mandrem's premier celebration estate due to its:",
              list: [
                "Combined 10-bedroom estate featuring two complete 5-BR villas side-by-side, providing generous space and refined comfort for up to 20 guests",
                "Dual living complexes and private 10m pool spaces, ensuring ample room for vibrant gatherings and quiet downtime",
                "Tranquil streamside location in North Goa, wrapping your stay in calm natural surroundings and the authentic susegad rhythm",
                "Expansive outdoor lawn and scenic terrace areas, built for daytime sunbathing, outdoor dining, and evening poolside events",
                "High-end estate infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
                "Strategic proximity as its just 3-5 minutes from Mandrem Beach and top culinary destinations like Thalassa, La Plage, and Lazy Dog",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Encanto"),
        },
      },
      {
        title: "Villa Marisol",
        discountCode: "MONSOON30",
        span: "The Grand Estate",
        type: "Grand Villa",
        description: "The Ultimate Private Luxury Estate in North Goa",
        amenities: [
          { icon: <BedIcon />, label: "18 Rooms" },
          { icon: <BathTubIcon />, label: "18 Baths" },
          { icon: <GuestIcon />, label: "36 Guests" },
        ],
        inRoomAmenities: [
          { icon: <HighSpeedInternetIcon />, label: "High Speed Internet" },
          { icon: <EvChargingFacilityIcon />, label: "EV Charging Facility" },
          { icon: <WorkStationIcon />, label: "Work Station" },
          { icon: <SwimmingPoolIcon />, label: "Swimming Pool" },
          { icon: <SmartTvIcon />, label: "Smart TV" },
          { icon: <KitchenIcon />, label: "Kitchen" },
          { icon: <BathroomIcon />, label: "Bathroom" },
        ],
        originalPrice: "₹ 97500/night",
        startingPrice: "From ₹ 1,18,000/night",
        moreInfo: {
          title: "The Ultimate Private Luxury Estate in North Goa",
          roomInfo: [
            "18 Bedrooms",
            "Full Compound: All 3 Villas + 2 Apartments",
            "Sleeps up to 36"
          ],
          description: [
            "The pinnacle of private group luxury in North Goa, Villa Marisol is the ultimate total takeover of our Mandrem collection. Created by combining all three luxury villas and both 2-bedroom apartments into a massive 18-bedroom compound, Marisol turns what would usually be a fragmented booking into one seamless, private retreat that comfortably sleeps up to 36 guests. Set along a peaceful, flowing stream and wrapped in lush tropical greenery, this grand estate balances complete exclusive privacy with generous, open communal spaces. Best of all, the sun-kissed shores of Mandrem Beach are just a 3-5 minutes' drive away.",
            "Designed for corporate offsites, milestone celebrations, and large multi-family gatherings, Marisol offers unmatched scale and versatility. Enjoy exclusive access to three 10-meter private swimming pools, sunlit terrace decks, and expansive outdoor grounds ideal for golden-hour cocktails or gala dinners under the stars. Fluid indoor-outdoor living spaces flow effortlessly into light-filled interiors, ensuring everyone in your party enjoys both shared celebration and quiet personal space. Pack your bags—your private coastal sanctuary awaits!",
          ],
          listOfData: [
            {
              title: "Explore your stay",
              description:
                "Villa Marisol stands out as North Goa's premier private compound due to its:",
              list: [
                "Rare capacity and flexible configurations, offering up to 18 private, elegantly appointed bedrooms across 3 villas and 2 apartments for groups of up to 36",
                "Complete exclusive domain over the entire estate, ensuring total privacy for your retreat or event",
                "Three private 10m swimming pools and surrounding sun decks designed for daytime lounging and evening gatherings",
                "Tranquil streamside setting in North Goa, providing a serene natural environment to embrace the relaxed susegad pace",
                "Flawless estate infrastructure, including whisper-quiet AC, spa-inspired rain showers, high-speed Wi-Fi, and smart entertainment systems",
                "Prime location approx. 3–5 minutes drive to Mandrem Beach and close to iconic dining spots like Thalassa, La Plage, and Lazy Dog",
              ],
            },
            {
              title: "CURATED ADD-ON SERVICES",
              list: [
                "<b>Chef-on-Call Service:</b> Enjoy freshly cooked gourmet meals served right in your villa—from poolside breakfast spreads to multi-course custom dinners (prior booking required).",
                "<b>Private Airport Transfers:</b> Chauffeur-driven pickups and drop-offs curated directly for Mopa (GOX) and Dabolim (GOI) airports (prior booking required).",
                "<b>Coastal & Watersports Itineraries:</b> Custom group activity planning including watersports packages, yacht charters, and local excursions.",
                "<b>Flexible Accommodation Options:</b> Configurable suite and villa combinations arranged with our reservation specialists to fit your exact group size.",
                "<b>Event Options:</b> Configurable event arrangements and bespoke hosting services for special occasions.",
              ],
            },
            {
              title: "Essential Stay Information:",
              list: [
                " All rates are quoted on a full compound buyout, per-night basis for up to 36 guests.",
                " <b>Dedicated On-Site Caretakers:</b> On-premises caretaker assistance available daily from 9:00 AM to 9:00 PM for guest support and housekeeping.",
                " <b>Cooking facilities:</b> Villa kitchens are fully equipped for guest self-cooking, and the restaurant next door can also deliver meals.",
                " <b>24/7 Estate Security:</b> Complete peace of mind with round-the-clock security personnel and CCTV surveillance.",
              ],
            },
          ],
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
          },
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
         href:"#form",
          // href: createWhatsappCta("Aroha Palms Villa Marisol"),
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
        link: "#form",
        // link: contact.WhatsappCta,
      },
      // {
      //   label: "Book Now",
      //   link: "#form",
      // },
    ],
  },

  testimonials: {
    tagline: "GUEST STORIES",
    title: "Trusted by travellers.",
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
        a: "Standard check-in is 3:00 PM and check-out is 10:00 AM. Early check-in or late check-out can be arranged based on availability.",
      },
      {
        q: "Can I book a villa for weddings or corporate offsites?",
        a: "Yes. Villas like Marisol (36 guests) and Encanto (20 guests) are ideal for weddings, birthday celebrations and corporate offsites. Our team helps with décor, catering and event planning.",
      },
      {
        q: "Are the villas pet-friendly?",
        a: "While we love animals, our villas are strictly pet-free to ensure a comfortable stay for all guests.",
      },
      {
        q: "Do all properties have private pools?",
        a: "Pool access for apartment and suite guests is only available when booked together with a villa.",
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
