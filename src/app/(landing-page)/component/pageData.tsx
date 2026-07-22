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

export const landingPageData = {
  offer: [
    "Monsoon Bonanza 30% off limited time offer",
    "Monsoon Bonanza 30% off limited time offer",
  ],
  hero: {
    tag: "A Paradise in North Goa",
    title: "Barefoot Luxury, Quietly your Own",
    description:
      "Greek-inspired villas & apartments with private pools, lush gardens and effortless access to Goa's finest beaches. ",
    benefits:
      "<span class='text-[#A20000]'>Save 25%</span> when you book direct • No prepayment • Free cancellation",
    image: "/landing-page/bnr.jpg",
    video: {
      src: "/video/Aroha-video.mp4",
      poster: "/video/Aroha-video.png",
    },
  },

  unforgettableSection: {
    // title: "Unwind, Explore, and Create Unforgettable Memories at Aroha Palms.",
    // description:
    //   "Escape to the peaceful charm of Aroha Palms, where lush gardens, open spaces, and tranquil surroundings offer the perfect place to relax and recharge. Just minutes from Goa's beaches, water sports, heritage sites, wellness retreats, and vibrant nightlife, you can explore the best of the destination before returning to the comfort of your private retreat.",
    title: "Elevated Living Between the Palms and the Sea.",
    description:
      "Global elites and discerning travelers are shifting away from the high-energy crowds of Calangute and Anjuna in search of the serene privacy, pristine shores, and refined luxury of Mandrem.",
    images: [
      "/landing-page/gallery/img-1.webp",
      "/landing-page/gallery/img-2.webp",
      "/landing-page/gallery/img-3.webp",
      "/landing-page/gallery/img-4.webp",
      "/landing-page/gallery/img-5.webp",
      "/landing-page/gallery/img-6.webp",
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
    title: "18 Boutique Homes Crafted for Your Perfect Goa Getaway",
    description:
      "Explore every villa, apartment and suite across Mandrem, each one thoughtfully designed for private, unhurried Goa stays.",
    note: "No need to split up the group or book multiple hotel rooms. Our largest estate villas offer seamless group living with space for up to 40 guests. Enjoy private amenities, expansive outdoor lounges, and effortless hosting—all in one magnificent setting.",
    cards: [
      {
        title: "Aroha Palms Magnifica",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Magnifica promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Aroha Palms Magnifica stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
              "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
              "– Prices may vary subject to availability and peak season rates.",
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
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Magnifica/Magnifica.png",
          "/rooms/Magnifica/magnifica1.jpg",
          "/rooms/Magnifica/magnifica2.webp",
          "/rooms/Magnifica/magnifica3.jpg",
          "/rooms/Magnifica/magnifica4.jpg",
          "/rooms/Magnifica/magnifica5.jpg",
          "/rooms/Magnifica/magnifica6.jpg",
          "/rooms/Magnifica/magnifica7.jpg",
          "/rooms/Magnifica/magnifica8.jpg",
          "/rooms/Magnifica/magnifica9.jpg",
          "/rooms/Magnifica/magnifica10.webp",
          "/rooms/Magnifica/magnifica11.jpg",
          "/rooms/Magnifica/magnifica12.webp",
          "/rooms/Magnifica/magnifica13.webp",
          "/rooms/Magnifica/magnifica14.webp",
          "/rooms/Magnifica/magnifica15.jpg",
          "/rooms/Magnifica/magnifica16.webp",
          "/rooms/Magnifica/magnifica17.webp",
          "/rooms/Magnifica/magnifica18.jpg",
          "/rooms/Magnifica/magnifica19.webp",
          "/rooms/Magnifica/magnifica20.jpg",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Paradiso",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Paradiso, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Paradiso promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Aroha Palms Paradiso stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
              "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
              "– Prices may vary subject to availability and peak season rates.",
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
            "All rates are on a per person, per day basis.",
            "Additional guests are chargeable.",
            "Consumption of non-vegetarian food is allowed.",
            "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
            "Guests do not have access to the villa kitchen.",
          ],
        },
        location: "Mandrem",
        images: [
          "/rooms/Paradiso/Paradiso.png",
          "/rooms/Paradiso/paradiso1.jpg",
          "/rooms/Paradiso/paradiso2.jpg",
          "/rooms/Paradiso/paradiso3.jpg",
          "/rooms/Paradiso/paradiso4.jpg",
          "/rooms/Paradiso/paradiso5.jpg",
          "/rooms/Paradiso/paradiso6.webp",
          "/rooms/Paradiso/paradiso7.jpg",
          "/rooms/Paradiso/paradiso8.jpg",
          "/rooms/Paradiso/paradiso9.jpg",
          "/rooms/Paradiso/paradiso10.jpg",
          "/rooms/Paradiso/paradiso11.jpg",
          "/rooms/Paradiso/paradiso12.jpg",
          "/rooms/Paradiso/paradiso13.webp",
          "/rooms/Paradiso/paradiso14.webp",
          "/rooms/Paradiso/paradiso15.webp",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Serenity",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Serenity, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Serenity promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Aroha Palms Serenity stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Private pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
              "– A bonfire can be set up for the guests at an extra charge of Rs. 3000 per session.",
              "– Prices may vary subject to availability and peak season rates.",
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
          "/rooms/Serenity/serenity1.jpg",
          "/rooms/Serenity/serenity2.jpg",
          "/rooms/Serenity/serenity3.webp",
          "/rooms/Serenity/serenity4.jpg",
          "/rooms/Serenity/serenity5.webp",
          "/rooms/Serenity/serenity6.jpg",
          "/rooms/Serenity/serenity7.jpg",
          "/rooms/Serenity/serenity8.jpg",
          "/rooms/Serenity/serenity9.jpg",
          "/rooms/Serenity/serenity10.jpg",
          "/rooms/Serenity/serenity11.jpg",
          "/rooms/Serenity/serenity12.jpg",
          "/rooms/Serenity/serenity13.jpg",
          "/rooms/Serenity/serenity14.jpg",
          "/rooms/Serenity/serenity15.jpg",
          "/rooms/Serenity/serenity16.webp",
          "/rooms/Serenity/serenity17.webp",
        ],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Marisol",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Marisol, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Marisol promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Marisol stands out as one of the top villas in Mandrem due to its",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Private pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% G'ST charge.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
              "– Prices may vary subject to availability and peak season rates.",
              "Tan. Tunes. Tranquility – That’s what a day at Villa Marisol looks like.",
              "Tucked away in the serene landscape of Mandrem, Villa Marisol is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
            ],
          },
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice swimming pool, big rooms and hygiene.",
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
        images: ["/rooms/Marisol/Marisol.png"],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Encanto",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Encanto, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Encanto stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Private pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",

              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
              "– Prices may vary subject to availability and peak season rates.",
              "Tan. Tunes. Tranquility – That’s what a day at Villa Encanto looks like.",
              "Tucked away in the serene landscape of Mandrem, Villa Encanto is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
            ],
          },
          review: {
            author: "Nishant Chury",
            description:
              "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice swimming pool, big rooms and hygiene.",
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
        images: ["/rooms/Encanto/Encanto.png"],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Prana",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Prana, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Prana promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Prana stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Private pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",

              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
              "– Prices may vary subject to availability and peak season rates.",
              "Tan. Tunes. Tranquility – That’s what a day at Villa Prana looks like.",
              "Tucked away in the serene landscape of Mandrem, Villa Prana is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
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
        images: ["/rooms/Prana/Prana.png"],
        cta: {
          label: "Enquire Now",
          href: contact.WhatsappCta,
        },
      },
      {
        title: "Aroha Palms Caia",
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
            icon: <PoolIcon />,
            label: "Bonfire",
          },
          {
            icon: <PoolIcon />,
            label: "EV Charging Facility",
          },
          {
            icon: <PoolIcon />,
            label: "Shared Pool",
          },
          {
            icon: <PoolIcon />,
            label: "Smart TV",
          },
          {
            icon: <PoolIcon />,
            label: "Kitchen",
          },
          {
            icon: <PoolIcon />,
            label: "Bathroom",
          },
        ],
        startingPrice: "Starting from ₹ XXX.XX",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Caia, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Caia promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Villa Caia stands out as one of the top villas in Mandrem due to its:",
              "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
              "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
              "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
              "– Charming terrace, ideal for enjoying your morning brew and a leisurely breakfast",
              "– Private pool, perfect for lounging and soaking up the Goan sun",
              "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",

              "ADD-ON SERVICES",
              "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
              "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
              "– Prices may vary subject to availability and peak season rates.",
              "Tan. Tunes. Tranquility – That’s what a day at Villa Caia looks like.",
              "Tucked away in the serene landscape of Mandrem, Villa Caia is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
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
        images: ["/rooms/Caia/Caia.png"],
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
          "Every villa comes with its own swimming pool for uninterrupted relaxation.",
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
        a: "Every villa at Aroha Palms features a private swimming pool. Apartments and suites have access to the shared property pool.",
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
