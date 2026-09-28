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
import { contact } from "@/utils/constent";
import { BathTubIcon, BedIcon, GuestIcon } from "@/utils/landingIcon";

export const roomData = [
  {
    slug: "mandrem",
    metaData: {
      title: "Mandrem Villas | Aroha Palms",
      description: "Discover luxury villas in Mandrem, Goa.",
    },

    hero: {
      image: "/images/mandrem-beach.png",
      subtitle:
        "Discover serene luxury — where elegant villas meet Goa's timeless charm.",
      title: "Mandrem",
    },

    properties: {
        sectionHeader: {
    locationTag: "MANDREM",
    title: "Luxury Villas Crafted for Your Perfect Goa Getaway",
  },
      title: "Explore Our Properties in Mandrem",

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
        //   image: "/landing-page/bnr.jpg",
        //   title: "Aroha palms magnifica",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Magnifica promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Aroha Palms Magnifica stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
        //         "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Rushikesh Nimbhorkar",
        //       description:
        //         "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },

        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },

        //   images: [
        //     "/rooms/Magnifica/villa-magnifica-6e53f8-1024x683.webp",
        //     "/rooms/Magnifica/villa-magnifica-312c93-1024x683.webp",
        //     "/rooms/Magnifica/villa-magnifica-2316a7-1024x683.webp",
        //     "/rooms/Magnifica/villa-magnifica-18092a-1024x683.webp",
        //     "/rooms/Magnifica/villa-magnifica-650024-1024x683.webp",
        //     "/rooms/Magnifica/Magnifica.png",
        //     "/rooms/Magnifica/magnifica1.jpg",
        //     "/rooms/Magnifica/magnifica2.webp",
        //     "/rooms/Magnifica/magnifica3.jpg",
        //     "/rooms/Magnifica/magnifica4.jpg",
        //     "/rooms/Magnifica/magnifica5.jpg",
        //     "/rooms/Magnifica/magnifica6.jpg",
        //     "/rooms/Magnifica/magnifica7.jpg",
        //     "/rooms/Magnifica/magnifica8.jpg",
        //     "/rooms/Magnifica/magnifica9.jpg",
        //     "/rooms/Magnifica/magnifica10.webp",
        //     "/rooms/Magnifica/magnifica11.jpg",
        //     "/rooms/Magnifica/magnifica12.webp",
        //     "/rooms/Magnifica/magnifica13.webp",
        //     "/rooms/Magnifica/magnifica14.webp",
        //     "/rooms/Magnifica/magnifica15.jpg",
        //     "/rooms/Magnifica/magnifica16.webp",
        //     "/rooms/Magnifica/magnifica17.webp",
        //     "/rooms/Magnifica/magnifica18.jpg",
        //     "/rooms/Magnifica/magnifica19.webp",
        //     "/rooms/Magnifica/magnifica20.jpg",
        //   ],

        //   description:
        //     "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

        //   features: ["5 Rooms", "5 Baths", "10 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   images: [
        //     "/rooms/Paradiso/villa-paradiso-0c9ca2-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-2e426b-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-4fe0ac-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-7d232a-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-8b2233-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-9b07fa-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-678b4d-1024x683.jpg",
        //     "/rooms/Paradiso/villa-paradiso-1424e9-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-8000d3-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-48828c-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-ade8a9-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-c7ffc9-1024x683.webp",
        //     "/rooms/Paradiso/villa-paradiso-da5883-1024x683.webp",
        //     "/rooms/Paradiso/Paradiso.png",
        //     "/rooms/Paradiso/paradiso1.jpg",
        //     "/rooms/Paradiso/paradiso2.jpg",
        //     "/rooms/Paradiso/paradiso3.jpg",
        //     "/rooms/Paradiso/paradiso4.jpg",
        //     "/rooms/Paradiso/paradiso5.jpg",
        //     "/rooms/Paradiso/paradiso6.webp",
        //     "/rooms/Paradiso/paradiso7.jpg",
        //     "/rooms/Paradiso/paradiso8.jpg",
        //     "/rooms/Paradiso/paradiso9.jpg",
        //     "/rooms/Paradiso/paradiso10.jpg",
        //     "/rooms/Paradiso/paradiso11.jpg",
        //     "/rooms/Paradiso/paradiso12.jpg",
        //     "/rooms/Paradiso/paradiso13.webp",
        //     "/rooms/Paradiso/paradiso14.webp",
        //     "/rooms/Paradiso/paradiso15.webp",
        //   ],
        //   title: "Aroha Palms Paradiso",
        //   description:
        //     "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

        //   features: ["5 Rooms", "5 Baths", "10 Guests"],
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],
        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Paradiso, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Paradiso promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Aroha Palms Paradiso stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
        //         "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Rushikesh Nimbhorkar",
        //       description:
        //         "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",

        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   images: [
        //     "/rooms/Serenity/villa-serenity-5c0998-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-7c716f-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-09d362-1024x683.jpg",
        //     "/rooms/Serenity/villa-serenity-98f7d7-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-971a97-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-4261c0-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-49921f-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-463337-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-ad37d9-1024x683.jpg",
        //     "/rooms/Serenity/villa-serenity-b1dc41-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-b4877d-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-be9006-1024x683.jpg",
        //     "/rooms/Serenity/villa-serenity-bea102-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-beba5c-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-c8c4e8-1024x683.jpg",
        //     "/rooms/Serenity/villa-serenity-ccdafa-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-e3de9d-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-e37d80-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-ea148b-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-f55774-1024x683.jpg",
        //     "/rooms/Serenity/villa-serenity-feecf1-1024x683.webp",
        //     "/rooms/Serenity/aroha-palms-serenity-fcecc8-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-000a5b-1024x683.webp",
        //     "/rooms/Serenity/villa-serenity-5c491e-1024x683.webp",
        //   ],
        //   title: "Aroha Palms Serenity",
        //   description:
        //     "This luxury villa offers a serene and picturesque Greek-inspired setting with elegant whitewashed walls, blue accents, and lush greenery. Guests rave about the spotless and tranquil ambiance, perfect for a relaxing getaway. The spacious interiors, stylish decor, and well-equipped facilities provide a comfortable and memorable stay. Visitors appreciate the private pool, outdoor terraces, and cozy seating areas. The attentive staff and delectable food enhance the overall experience, making it a highly recommended choice for a memorable holiday.",

        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Serenity, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Serenity promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Aroha Palms Serenity stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Private pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
        //         "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Chirag",
        //       description:
        //         "It was amazing experience with aroha palms the luxury villas. This villa one of the best luxury villa in goa the care taker Mr Kuldeep also very nice guy he taking care of us very nicely so definitely visit again. Specially thanks to ishu bhaiya (indrajeet singh rajpurohit) and nikhil Kashyap Bhaiya for geving us this wonderful experience",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },

        //   features: ["5 Rooms", "5 Baths", "10 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Aroha Palms Marisol",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Marisol, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke",
        //       "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Marisol promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Villa Marisol stands out as one of the top villas in Mandrem due to its",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Private pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //         "Tan. Tunes. Tranquility – That’s what a day at Villa Marisol looks like.",
        //         "Tucked away in the serene landscape of Mandrem, Villa Marisol is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //       ],
        //     },
        //     review: {
        //       author: "Nishant Chury",
        //       description:
        //         "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Marisol/aroha-palms-serenity-fcecc8-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-0c9ca2-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-2e426b-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-4fe0ac-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-7d232a-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-8b2233-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-9b07fa-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-678b4d-1024x683.jpg",
        //     "/rooms/Marisol/villa-paradiso-1424e9-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-8000d3-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-48828c-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-ade8a9-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-c7ffc9-1024x683.webp",
        //     "/rooms/Marisol/villa-paradiso-da5883-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-000a5b-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-5c491e-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-5c0998-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-7c716f-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-09d362-1024x683.jpg",
        //     "/rooms/Marisol/villa-serenity-98f7d7-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-971a97-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-4261c0-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-49921f-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-463337-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-ad37d9-1024x683.jpg",
        //     "/rooms/Marisol/villa-serenity-b1dc41-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-b4877d-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-be9006-1024x683.jpg",
        //     "/rooms/Marisol/villa-serenity-bea102-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-beba5c-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-c8c4e8-1024x683.jpg",
        //     "/rooms/Marisol/villa-serenity-ccdafa-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-e3de9d-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-e37d80-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-ea148b-1024x683.webp",
        //     "/rooms/Marisol/villa-serenity-f55774-1024x683.jpg",
        //     "/rooms/Marisol/villa-serenity-feecf1-1024x683.webp",
        //   ],
        //   description:
        //     "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Marisol, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Marisol promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //   features: ["18 Rooms", "18 Baths", "36 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Aroha Palms Encanto",
        //   description:
        //     "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Encanto, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Encanto, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Villa Encanto stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Private pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",

        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //         "Tan. Tunes. Tranquility – That’s what a day at Villa Encanto looks like.",
        //         "Tucked away in the serene landscape of Mandrem, Villa Encanto is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //       ],
        //     },
        //     review: {
        //       author: "Nishant Chury",
        //       description:
        //         "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },

        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Encanto/villa-serenity-be9006-1024x683.jpg",
        //     "/rooms/Encanto/villa-serenity-bea102-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-beba5c-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-c8c4e8-1024x683.jpg",
        //     "/rooms/Encanto/villa-serenity-ccdafa-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-e3de9d-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-e37d80-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-ea148b-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-f55774-1024x683.jpg",
        //     "/rooms/Encanto/villa-serenity-feecf1-1024x683.webp",
        //     "/rooms/Encanto/aroha-palms-serenity-fcecc8-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-0c9ca2-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-2e426b-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-4fe0ac-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-7d232a-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-8b2233-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-9b07fa-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-678b4d-1024x683.jpg",
        //     "/rooms/Encanto/villa-paradiso-1424e9-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-8000d3-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-48828c-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-ade8a9-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-c7ffc9-1024x683.webp",
        //     "/rooms/Encanto/villa-paradiso-da5883-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-000a5b-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-5c491e-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-5c0998-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-7c716f-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-09d362-1024x683.jpg",
        //     "/rooms/Encanto/villa-serenity-98f7d7-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-971a97-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-4261c0-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-49921f-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-463337-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-ad37d9-1024x683.jpg",
        //     "/rooms/Encanto/villa-serenity-b1dc41-1024x683.webp",
        //     "/rooms/Encanto/villa-serenity-b4877d-1024x683.webp",
        //   ],

        //   features: ["10 Rooms", "10 Baths", "20 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Aroha Palms Prana",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Magnifica promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Aroha Palms Magnifica stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
        //         "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Rushikesh Nimbhorkar",
        //       description:
        //         "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },

        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Prana/suite-de-regal-7591f1-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-0c9ca2-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-2e426b-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-4fe0ac-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-7d232a-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-8b2233-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-9b07fa-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-678b4d-1024x683.jpg",
        //     "/rooms/Prana/villa-paradiso-1424e9-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-8000d3-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-48828c-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-ade8a9-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-c7ffc9-1024x683.webp",
        //     "/rooms/Prana/villa-paradiso-da5883-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-0c2ec6-1024x683.jpg",
        //     "/rooms/Prana/suite-de-emerald-4a8a5f-1024x768.webp",
        //     "/rooms/Prana/suite-de-emerald-4bae35-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-5deaba-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-48fb29-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-575c62-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-033720-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-794512-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-af28ef-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-b3a38e-1024x683.webp",
        //     "/rooms/Prana/suite-de-emerald-ea3ee5-1024x683.webp",
        //     "/rooms/Prana/suite-de-regal-5a8cf5-1024x683.jpg",
        //   ],
        //   description:
        //     "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Prana, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

        //   features: ["9 Rooms", "9 Baths", "18 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Aroha Palms Caia",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],
        //   moreInfo: {
        //     description: [
        //       "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Caia, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
        //       "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Caia promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Villa Caia stands out as one of the top villas in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
        //         "– Private pool, perfect for lounging and soaking up the Goan sun",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",

        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //         "Tan. Tunes. Tranquility – That’s what a day at Villa Caia looks like.",
        //         "Tucked away in the serene landscape of Mandrem, Villa Caia is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //       ],
        //     },
        //     review: {
        //       author: "Nilesh Agarwal",
        //       description:
        //         "Villa is beautiful. The caretaker kuldip is a great guy. Good service.",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "FAQ",
        //         listOfData: [
        //           {
        //             title: "PROPERTY OVERVIEW & VIBE",
        //             list: [
        //               {
        //                 title: "What is the total capacity of Aroha Palms?",
        //                 subTitle:
        //                   "Aroha Palms consists of 18 luxury rooms in total, divided into:",
        //                 items: [
        //                   "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
        //                   "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What makes the location and design of the villas unique?",
        //                 subTitle:
        //                   "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
        //               },
        //               {
        //                 title: "What are the views like from the property?",
        //                 subTitle:
        //                   "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "VILLA & APARTMENT SPECIFICS",
        //             list: [
        //               {
        //                 title:
        //                   "Are the villas interconnected for large groups?",
        //                 subTitle:
        //                   "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
        //               },
        //               {
        //                 title: "Is the swimming pool private?",
        //                 items: [
        //                   "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
        //                   "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
        //                   "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What other outdoor spaces do the apartments have?",
        //                 subTitle:
        //                   "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ARRIVAL, LOGISTICS & PARKING",
        //             list: [
        //               {
        //                 title: "Which airport is closer to Aroha Palms?",
        //                 items: [
        //                   "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
        //                   "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
        //                 ],
        //               },
        //               {
        //                 title: "Do you provide airport transfers?",
        //                 subTitle:
        //                   "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
        //                 items: [
        //                   "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the parking and EV facilities?",
        //                 subTitle:
        //                   "We provide secure, on-site parking allocated as follows:",
        //                 items: [
        //                   "Villas: 2 dedicated car parks per villa.",
        //                   "Apartments: 1 dedicated car park per apartment.",
        //                   "There is also on street parking if required",
        //                   "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
        //                 ],
        //               },
        //               {
        //                 title: "Is the road access “Sedan-friendly”?",
        //                 subTitle:
        //                   "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "SERVICES, STAFFING & DINING",
        //             list: [
        //               {
        //                 title: "Is there on-site management?",
        //                 subTitle:
        //                   "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
        //               },
        //               {
        //                 title: "What are the dining and breakfast options?",
        //                 subTitle:
        //                   "Stays are typically room-only, but we offer maximum flexibility:",
        //                 items: [
        //                   "Self-Cooking: Each unit has a full-fledged kitchen.",
        //                   "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
        //                   "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
        //                   "Delivery: Swiggy and other food apps operate in the area.",
        //                   "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
        //                 ],
        //               },
        //               {
        //                 title: "What is the housekeeping policy?",
        //                 subTitle:
        //                   "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
        //               },
        //             ],
        //           },
        //           {
        //             title: "ACCESSIBILITY, SAFETY & POLICIES",
        //             list: [
        //               {
        //                 title:
        //                   "Is the property senior-citizen or handicapped-friendly?",
        //                 items: [
        //                   "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
        //                   "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
        //                   "Note: We do not currently have full wheelchair ramps/access.",
        //                 ],
        //               },
        //               {
        //                 title: "What are the Check-in and Check-out times?",
        //                 items: [
        //                   "Check-in: 3:00 PM | Check-out: 10:00 AM.",
        //                   "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "Are there safety lockers and security deposits?",
        //                 subTitle:
        //                   "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
        //               },
        //               {
        //                 title: "What are your core house policies?",
        //                 items: [
        //                   "Pets: Aroha Palms is not pet-friendly.",
        //                   "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
        //                   "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
        //                   "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
        //                   "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "LOCATION, RECREATION & MEDICAL",
        //             list: [
        //               {
        //                 title: "How far is the beach and what can we do there?",
        //                 items: [
        //                   "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
        //                   "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
        //                   "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
        //                 ],
        //               },
        //               {
        //                 title: "Distances to Nearby Beaches & Hubs:",
        //                 items: [
        //                   "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
        //                   "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
        //                   "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
        //                   "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
        //                   "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "What are the best nearby restaurants and clubs?",
        //                 items: [
        //                   "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
        //                   "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
        //                   "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
        //                 ],
        //               },
        //               {
        //                 title: "Medical Facilities & Rentals:",
        //                 items: [
        //                   "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
        //                   "",
        //                   "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
        //                 ],
        //               },
        //             ],
        //           },
        //           {
        //             title: "Booking & Cancellation Policy",
        //             list: [
        //               {
        //                 title:
        //                   "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //                 items: [
        //                   "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //                   "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //                   "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //                   "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "B) Can I adjust my advance payment against a future booking?",
        //                 subTitle:
        //                   "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
        //                 items: [
        //                   "Validity: Credits are typically valid for 6 months from your original check-in date.",
        //                   "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
        //                 ],
        //               },
        //               {
        //                 title:
        //                   "C) Are there any “Blackout Dates” for cancellations?",
        //                 subTitle:
        //                   "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
        //               },
        //               {
        //                 title:
        //                   "D) What happens if I need to leave earlier than planned?",
        //                 subTitle:
        //                   "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
        //               },
        //               {
        //                 title:
        //                   "E) Is my Security Deposit refundable if I cancel?",
        //                 subTitle:
        //                   "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
        //               },
        //               {
        //                 title:
        //                   "F) How do I request a rescheduling or cancellation?",
        //                 subTitle:
        //                   "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
        //               },
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND & CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Caia/villa-serenity-ea148b-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-f55774-1024x683.jpg",
        //     "/rooms/Caia/villa-serenity-feecf1-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-0c2ec6-1024x683.jpg",
        //     "/rooms/Caia/suite-de-emerald-4a8a5f-1024x768.webp",
        //     "/rooms/Caia/suite-de-emerald-4bae35-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-5deaba-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-48fb29-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-575c62-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-033720-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-794512-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-af28ef-1024x683.webp",
        //     "/rooms/Caia/suite-de-emerald-ea3ee5-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-000a5b-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-5c491e-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-5c0998-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-7c716f-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-09d362-1024x683.jpg",
        //     "/rooms/Caia/villa-serenity-98f7d7-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-971a97-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-4261c0-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-49921f-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-463337-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-ad37d9-1024x683.jpg",
        //     "/rooms/Caia/villa-serenity-b1dc41-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-b4877d-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-be9006-1024x683.jpg",
        //     "/rooms/Caia/villa-serenity-bea102-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-beba5c-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-c8c4e8-1024x683.jpg",
        //     "/rooms/Caia/villa-serenity-ccdafa-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-e3de9d-1024x683.webp",
        //     "/rooms/Caia/villa-serenity-e37d80-1024x683.webp",
        //   ],
        //   description:
        //     "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Caia, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke. The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Caia promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

        //   features: ["7 Rooms", "7 Baths", "14 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   images: [
        //     "/rooms/Onyx/suite-de-emerald-0c2ec6-1024x683.jpg",
        //     "/rooms/Onyx/suite-de-emerald-4a8a5f-1024x768.webp",
        //     "/rooms/Onyx/suite-de-emerald-4bae35-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-5deaba-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-48fb29-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-575c62-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-033720-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-794512-1024x683.webp",
        //     "/rooms/Onyx/suite-de-emerald-af28ef-1024x683.webp",
        //     "/rooms/Onyx/suite-de-regal-ac4cb9-1024x683.webp",
        //     "/rooms/Onyx/suite-de-regal-dcd5bb-1024x683.webp",
        //     "/rooms/Onyx/Onyx.png",
        //   ],
        //   title: "Suite De Onyx",
        //   description:
        //     "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

        //   features: ["2 Rooms", "2 Baths", "4 Guests", "Terrace", "Kitchen"],
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],
        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        //   moreInfo: {
        //     description: [
        //       "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy.",
        //       "The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Onyx stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the property kitchen.",
        //     ],
        //   },
        // },

        // {
        //   images: [
        //     "/rooms/Lumina/suite-de-regal-11fa20-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-45c2fc-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-86bd8d-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-850ce5-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-2700ac-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-7591f1-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-8179d7-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-ac4cb9-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-dcd5bb-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-ed2ebb-1024x683.webp",
        //     "/rooms/Lumina/suite-de-regal-2f3711-1024x681.webp",
        //     "/rooms/Lumina/suite-de-regal-4d7a0a-1024x768.webp",
        //   ],
        //   title: "Suite De Lumina",
        //   description:
        //     "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

        //   features: ["2 Rooms", "2 Baths", "4 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],
        //   moreInfo: {
        //     description: [
        //       "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy.",
        //       "The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Lumina stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the property kitchen.",
        //     ],
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Suite De Emerald",
        //   images: [
        //     "/rooms/Emerald/Emerald.png",
        //     "/rooms/Emerald/emerald1.jpg",
        //     "/rooms/Emerald/emerald6.webp",
        //     "/rooms/Emerald/emerald2.jpg",
        //     "/rooms/Emerald/emerald3.jpg",
        //     "/rooms/Emerald/emerald4.jpg",
        //     "/rooms/Emerald/emerald5.webp",
        //   ],
        //   description:
        //     "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features two sunlit master suites with king-size beds and a flexible layout suited for families, friend groups, or extended stays. A dedicated workstation and a fully equipped kitchen allow for a stay that combines relaxation, functionality, and complete independence.",

        //   features: ["1 Rooms", "2 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],
        //   moreInfo: {
        //     description: [
        //       "The apartment features two sunlit master suites with king-size beds, generous proportions, and a flexible layout suited for families, friend groups, or longer stays. A dedicated workstation and in-room essentials ensure a comfortable balance between rest and productivity.",
        //       "Suite De Emerald is a thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Emerald stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the property kitchen.",
        //     ],
        //   },
        // },

        // {
        //   images: [
        //     "/rooms/Emerald/suite-de-emerald-4a8a5f-1024x768.webp",
        //     "/rooms/Emerald/suite-de-emerald-4bae35-1024x683.webp",
        //     "/rooms/Emerald/suite-de-emerald-5deaba-1024x683.webp",
        //     "/rooms/Emerald/suite-de-emerald-48fb29-1024x683.webp",
        //     "/rooms/Emerald/suite-de-emerald-575c62-1024x683.webp",
        //     "/rooms/Emerald/suite-de-emerald-af28ef-1024x683.webp",
        //     "/rooms/Emerald/suite-de-regal-ac4cb9-1024x683.webp",
        //     "/rooms/Emerald/06-Bed-2-1024x683.jpg",
        //   ],
        //   title: "Suite De Platinum",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Suite De Platinum is a thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
        //       "The studio features a spacious master suite with a king-size bed, abundant natural light, and a flexible layout suited for couples, friends, or small families. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Platinum stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the property kitchen.",
        //     ],
        //   },

        //   description:
        //     "Thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.0 The studio features a spacious master suite with a king-size bed, abundant natural light, and a flexible layout suited for couples, friends, or small families. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",

        //   features: ["1 Rooms", "2 Guests", "Terrace"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },

        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Suite De Prestige",

        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "A thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
        //       "The studio features a sunlit master suite with a king-size bed and a versatile layout suited for couples, friend groups, or small families. A dedicated workstation and in-room essentials ensure it supports both slow, relaxed stays and moments of productivity with ease.",
        //     ],
        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Prestige stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },
        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },
        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Barbecue can also be arranged at an additional cost.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the property kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Prestige/suite-de-emerald-ea3ee5-1024x683.webp",
        //     "/rooms/Prestige/suite-de-regal-2f3711-1024x681.webp",
        //     "/rooms/Prestige/suite-de-regal-850ce5-1024x683.webp",
        //     "/rooms/Prestige/suite-de-regal-ed2ebb-1024x683.webp",
        //     "/rooms/Prestige/Prestige.png",
        //     "/rooms/Prestige/suite-de-emerald-4a8a5f-1024x768.webp",
        //   ],
        //   description:
        //     "A thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.The studio features a sunlit master suite with a king-size bed and a versatile layout suited for couples, friend groups, or small families. A dedicated workstation and in-room essentials ensure it supports both slow, relaxed stays and moments of productivity with ease.",

        //   features: ["1 Rooms", "2 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },
        // {
        //   image: "/landing-page/bnr.jpg",
        //   title: "Suite De Regal",
        //   inRoomAmenities: [
        //     {
        //       icon: <HighSpeedInternetIcon />,
        //       label: "High Speed Internet",
        //     },
        //     {
        //       icon: <EvChargingFacilityIcon />,
        //       label: "EV Charging Facility",
        //     },
        //     {
        //       icon: <WorkStationIcon />,
        //       label: "Work Station",
        //     },

        //     {
        //       icon: <SwimmingPoolIcon />,
        //       label: "Swimming Pool",
        //     },
        //     {
        //       icon: <SmartTvIcon />,
        //       label: "Smart TV",
        //     },
        //     {
        //       icon: <KitchenIcon />,
        //       label: "Kitchen",
        //     },
        //     {
        //       icon: <BathroomIcon />,
        //       label: "Bathroom",
        //     },
        //   ],

        //   moreInfo: {
        //     description: [
        //       "Suite De Regal is a thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
        //       "The apartment features a spacious master suite with a king-size bed, abundant natural light, and a versatile layout suited for couples, families, or groups of friends. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",
        //     ],

        //     listOfData: {
        //       title: "Explore your stay",
        //       list: [
        //         "Suite de Regal stands out as one of the top apartments in Mandrem due to its:",
        //         "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
        //         "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
        //         "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
        //         "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
        //         "Sway. Sip. Sunset – That’s what a day at Suite De Regal looks like.",
        //         "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
        //         "ADD-ON SERVICES",
        //         "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
        //         "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
        //         "– Prices may vary subject to availability and peak season rates.",
        //       ],
        //     },

        //     review: {
        //       author: "Varshitha R",
        //       description:
        //         "Good ambience and close to beach. Very aesthetic place and perfect for photos",
        //     },

        //     sectionButton: [
        //       {
        //         btn: "HOUSE RULES",
        //         listOfData: [
        //           {
        //             list: [
        //               "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
        //               "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
        //               "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
        //               "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
        //               "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
        //               "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
        //               "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
        //               "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
        //               "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
        //               "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
        //               "Refer to our <a href='https://arohapalms.com/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "REFUND POLICY",
        //         listOfData: [
        //           {
        //             list: [
        //               "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
        //               "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
        //               "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
        //             ],
        //           },
        //         ],
        //       },

        //       {
        //         btn: "CANCELLATION",
        //         listOfData: [
        //           {
        //             list: [
        //               "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
        //               "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
        //               "Refer to our <a href='https://arohapalms.com/faq/'>FAQs for any questions/queries.</a>",
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   },

        //   note: {
        //     title: "Note:",
        //     notes: [
        //       "All rates are on a per person, per day basis.",
        //       "Additional guests are chargeable.",
        //       "Consumption of non-vegetarian food is allowed.",
        //       "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
        //       "Guests do not have access to the villa kitchen.",
        //     ],
        //   },
        //   images: [
        //     "/rooms/Regal/06-Bed-2-1024x683.jpg",
        //     "/rooms/Regal/suite-de-emerald-4a8a5f-1024x768.webp",
        //     "/rooms/Regal/suite-de-emerald-4bae35-1024x683.webp",
        //     "/rooms/Regal/suite-de-emerald-5deaba-1024x683.webp",
        //     "/rooms/Regal/suite-de-emerald-48fb29-1024x683.webp",
        //     "/rooms/Regal/suite-de-emerald-575c62-1024x683.webp",
        //     "/rooms/Regal/suite-de-emerald-af28ef-1024x683.webp",
        //     "/rooms/Regal/suite-de-regal-ac4cb9-1024x683.webp",
        //   ],
        //   description:
        //     "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features a spacious master suite with a king-size bed and a versatile layout suited for couples, friend groups, or families. A dedicated workstation, along with a fully equipped kitchen, ensures a stay that balances comfort, independence, and everyday convenience with ease.",
        //   features: ["1 Rooms", "2 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "popup",
        //   },
        // },
      ],
    },
  },

  {
    slug: "pilerne",
    metaData: {
      title: "Pilerne Villas | Aroha Palms",
      description: "Discover luxury villas in Pilerne, Goa.",
    },

    hero: {
      image: "/images/Gemini_Generated.jpg",
      subtitle:
        "Discover serene luxury — where elegant villas meet Goa's timeless charm.",
      title: "Pilerne",
    },

    properties: {
        sectionHeader: {
    locationTag: "PILERNE",
    title: "Boutique Homes Crafted for Your Perfect Goa Getaway",
  },
      title: "Explore Our Properties in Pilerne",

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
        // {
        //   images: [
        //     "/rooms/Majestic/DJI_0216-Edit-scaled-1-1024x768.jpg",
        //     "/rooms/Majestic/DSC00002-Edit-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/DSC00046-Edit-1-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/DSC00046-Edit-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/DSC00056-Edit-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/DSC00080-Edit-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/DSC00306-Edit-scaled-1-1024x683.jpg",
        //     "/rooms/Majestic/P1126008-Edit-scaled-2-1024x683.jpg",
        //   ],
        //   title: "Aroha Palms Majestic",
        //   description:
        //     "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",

        //   features: ["5 Rooms", "2 Lofts", "5 Baths", "12 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "villa-majestic",
        //   },
        // },
        // {
        //   images: [
        //     "/rooms/Grande/AOB_3725-1024x683.jpg",
        //     "/rooms/Grande/AOB_0007-1024x683.jpg",
        //     "/rooms/Grande/AOB_0106-1024x683.jpg",
        //     "/rooms/Grande/AOB_0110-1024x683.jpg",
        //     "/rooms/Grande/AOB_0138-scaled.jpg",
        //     "/rooms/Grande/AOB_0164-1024x683.jpg",
        //     "/rooms/Grande/AOB_0171-1024x683.jpg",
        //     "/rooms/Grande/AOB_3620-1-1024x683.jpg",
        //     "/rooms/Grande/AOB_3656-1024x683.jpg",
        //     "/rooms/Grande/AOB_3704-1024x683.jpg",
        //   ],
        //   title: "Aroha Palms Grande",
        //   description:
        //     "Welcome to Aroha Palms Grande, Goa’s premier luxury art villa rental. Nestled in the heart of Goa’s picturesque countryside quaint village that is close to all beaches, our villa offers the ultimate in privacy, comfort, and elegance. This stunning six-bedroom white villa is the epitome of luxury and comfort, offering the perfect blend of indulgence and relaxation. Come and experience the refined elegance and architectural brilliance that awaits you in this magnificent villa.",

        //   features: ["6 Rooms", "12 Guests"],

        //   bookNow: {
        //     text: "Book Now",
        //     href: contact.WhatsappCta,
        //   },

        //   cta: {
        //     text: "View Villa",
        //     href: "villa-grande",
        //   },
        // },
      ],
    },
  },
];
