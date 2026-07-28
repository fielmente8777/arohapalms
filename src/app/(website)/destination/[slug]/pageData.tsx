import { BathroomIcon, EvChargingFacilityIcon, HighSpeedInternetIcon, KitchenIcon, SmartTvIcon, SwimmingPoolIcon, WorkStationIcon } from "@/utils/amenitiesIcon";

export const roomData = [
  {
    slug: "mandrem",
    metaData: {
      title: "Mandrem Villas | Aroha Palms",
      description: "Discover luxury villas in Mandrem, Goa.",
    },

    hero: {
      image: "/landing-page/beach.png",
      subtitle:
        "Discover serene luxury — where elegant villas meet Goa's timeless charm.",
      title: "Mandrem",
    },

    properties: {
      title: "Explore Our Properties in Mandrem",

      cards: [
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha palms magnifica",
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
                  startingPrice: "Starting from ₹ 18,000/night",
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
                    sectionbutton : [ 
                      {

                        btn : "FAQ",
                        listOfData:[ {
                      title: "PROPERTY OVERVIEW & VIBE",
                      list: [
                        "What is the total capacity of Aroha Palms?",
                        "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                        "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        "What makes the location and design of the villas unique?",
                        "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                        "What are the views like from the property?",
                        "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      ],
                    },
                    {

                        btn : "HOUSE RULES",
                        listOfData:[ {
                      list: [
                        "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
                        "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
                        "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
                        "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
                        "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
                        "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
                        "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
                        "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
                        "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
                        "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
                      ],
                    },
                  
                      {
                  btn : "REFUND & CANCELLATION",
                        listOfData:[ {
                      list: [
                        "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
"45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
"30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
"15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                      ],
                    },
                  ]
                      }
                  ]
                      }
]                    
                  },
                ]
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
                
          description: "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

          features: ["5 Rooms", "5 Baths", "10 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/magnolia",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Paradiso",
          description: "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

          features: ["5 Rooms", "5 Baths", "10 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
      
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Serenity",
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
        startingPrice: "Starting from ₹ 18,000/night",
        moreInfo: {
          description: [
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",
            "The pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Aroha Palms Magnifica promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          ],
          listOfData: {
            title: "Explore your stay",
            list: [
              "Aroha Palms Paradiso stands out as one of the top villas in Mandrem due to its:",
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
            ],
          },
          review: {
            author: "Rushikesh Nimbhorkar",
            description:
              "Had a great experience with Aroha Palms with the pool parties and much needed escape from the daily chaos. Place was very spacious and awesome for people looking for modern and aesthetically pleasing things. Awesome help from Rahul and Renu with managing all the maintenance of the place and was much needed help, greatly appreciate their efforts.",
          },
          sectionbutton : [ 
                      
                    {

                        btn : "HOUSE RULES",
                        listOfData:[ {
                      list: [
                        "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
                        "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
                        "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
                        "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
                        "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
                        "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
                        "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
                        "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
                        "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
                        "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
                      ],
                    },
                  
                      {
                  btn : "REFUND POLICY",
                        listOfData:[ {
                      list: [
                        "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                        "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                        "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                      ],
                    },
                  ],
                      },
                      {
                  btn : "CANCELLATION",
                        listOfData:[ {
                      list: [
                        "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",

"Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
"Refer to our FAQs for any questions/queries.",
                      ],
                    },
                  ],
                      },
                  ],
                      }       
                    ],
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
        
        features: ["5 Rooms", "5 Baths", "10 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
      },


        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Marisol",
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
        startingPrice: "Starting from ₹ 18,000/night",
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
          description: "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Marisol, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Marisol promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          features: ["18 Rooms", "18 Baths", "36 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Encanto",
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
        startingPrice: "Starting from ₹ 18,000/night",
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
        sectionbutton : [ 
                      {

                        btn : "FAQ",
                        listOfData:[ {
                      title: "PROPERTY OVERVIEW & VIBE",
                      list: [
                        "What is the total capacity of Aroha Palms?",
                        "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                        "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        "What makes the location and design of the villas unique?",
                        "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                        "What are the views like from the property?",
                        "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      ],
                    },
                    {

                        btn : "HOUSE RULES",
                        listOfData:[ {
                      list: [
                        "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
                        "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
                        "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
                        "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
                        "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
                        "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
                        "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
                        "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
                        "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
                        "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
                      ],
                    },
                  
                      {
                  btn : "REFUND & CANCELLATION",
                        listOfData:[ {
                      list: [
                        "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                        "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                        "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                      ],
                    },
                  ],
                      },
                      
                    
                  ],
                      },
                  ],
                      }       
                    ],
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
          description: "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Encanto, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

          features: ["10 Rooms", "10 Baths", "20 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },


        
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Prana",
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
        startingPrice: "Starting from ₹ 18,000/night",
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
        sectionbutton : [ 
                      {

                        btn : "FAQ",
                        listOfData:[ {
                      title: "PROPERTY OVERVIEW & VIBE",
                      list: [
                        "What is the total capacity of Aroha Palms?",
                        "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                        "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        "What makes the location and design of the villas unique?",
                        "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                        "What are the views like from the property?",
                        "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      ],
                    },
                    {

                        btn : "HOUSE RULES",
                        listOfData:[ {
                      list: [
                        "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
                        "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
                        "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
                        "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
                        "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
                        "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
                        "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
                        "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
                        "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
                        "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
                      ],
                    },
                  
                      {
                  btn : "REFUND & CANCELLATION",
                        listOfData:[ {
                      list: [
                        "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                        "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                        "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                      ],
                    },
                  ],
                      },
                      
                    
                  ],
                      },
                  ],
                      }       
                    ],
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
          description: "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Prana, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

          features: ["9 Rooms", "9 Baths", "18 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Onyx",
          description: "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

          features: ["2 Rooms", "2 Baths", "4 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Lumina",
          description: "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

          features: ["2 Rooms", "2 Baths", "4 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Emerald",
          description: "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features two sunlit master suites with king-size beds and a flexible layout suited for families, friend groups, or extended stays. A dedicated workstation and a fully equipped kitchen allow for a stay that combines relaxation, functionality, and complete independence.",

          features: ["1 Rooms", "2 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Platinum",
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
        startingPrice: "Starting from ₹ 18,000/night",
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
        sectionbutton : [ 
                      {

                        btn : "FAQ",
                        listOfData:[ {
                      title: "PROPERTY OVERVIEW & VIBE",
                      list: [
                        "What is the total capacity of Aroha Palms?",
                        "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                        "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        "What makes the location and design of the villas unique?",
                        "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                        "What are the views like from the property?",
                        "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      ],
                    },
                    {

                        btn : "HOUSE RULES",
                        listOfData:[ {
                      list: [
                        "Check-in time is at 3 PM. If you expect to arrive earlier, please inform the villa owner or representative in advance so arrangements can be made to accommodate you if possible.",
                        "You will be greeted by the villa manager or representative upon arrival, who will show you around the villa and provide you with keys, remotes, and any other necessary information.",
                        "You will be asked to provide a valid ID and sign a Customer Conduct document upon check-in.",
                        "A security deposit will be taken upon check-in, which will be returned to you upon check-out if there are no damages or additional charges.",
                        "The villa owner or representative will provide you with a tour of the villa and demonstrate how to use any appliances, electronics, or other equipment.",
                        "You will be provided with information about local amenities, transportation, and any other important details that you should know during your stay.",
                        "The villa manager or representative will be available to assist you with any questions or concerns that you may have during your stay.",
                        "Each villa and apartment is provided with a fully equipped kitchen. Villa caretakers can make tea and coffee for you. We can also provide you with a chef on payment. Please inform the manager in advance. There are several restaurants and eating places in the vicinity. A detailed list of nearby restaurants is included in the folder. You can also order food through Swiggy and other online delivery services.",
                        "You will be provided with the contact details of the villa manager or representative in case of any emergency or urgent situation upon arrival. This information is also available in the welcome instructions in each villa.",
                        "Please contact our manager Mr Kismat for any assistance +91 883-01242549",
                      ],
                    },
                  
                      {
                  btn : "REFUND & CANCELLATION",
                        listOfData:[ {
                      list: [
                        "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                        "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                        "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                      ],
                    },
                  ],
                      },
                      
                    
                  ],
                      },
                  ],
                      }       
                    ],
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
          description: "Thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.0 The studio features a spacious master suite with a king-size bed, abundant natural light, and a flexible layout suited for couples, friends, or small families. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",

          features: ["1 Rooms", "2 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Prestige",
          
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
        startingPrice: "Starting from ₹ 18,000/night",
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
          description: "A thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.The studio features a sunlit master suite with a king-size bed and a versatile layout suited for couples, friend groups, or small families. A dedicated workstation and in-room essentials ensure it supports both slow, relaxed stays and moments of productivity with ease.",

          features: ["1 Rooms", "2 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Regal",
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
        startingPrice: "Starting from ₹ 18,000/night",
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
          description: "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features a spacious master suite with a king-size bed and a versatile layout suited for couples, friend groups, or families. A dedicated workstation, along with a fully equipped kitchen, ensures a stay that balances comfort, independence, and everyday convenience with ease.",
          features: ["1 Rooms", "2 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/paradiso",
          },
        },
        
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
      image: "/landing-page/bnr.jpg",
      subtitle:
        "Discover serene luxury — where elegant villas meet Goa's timeless charm.",
      title: "Pilerne",
    },

    properties: {
      title: "Explore Our Properties in Pilerne",

      cards: [
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha palms majestic",
          description: "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",

          features: ["5 Rooms", "2 Lofts", "5 Baths", "12 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/grande",
          },
        },
        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha palms grande",
          description: "Welcome to Aroha Palms Grande, Goa’s premier luxury art villa rental. Nestled in the heart of Goa’s picturesque countryside quaint village that is close to all beaches, our villa offers the ultimate in privacy, comfort, and elegance. This stunning six-bedroom white villa is the epitome of luxury and comfort, offering the perfect blend of indulgence and relaxation. Come and experience the refined elegance and architectural brilliance that awaits you in this magnificent villa.",

          features: ["6 Rooms", "12 Guests"],

          bookNow: {
            text: "Book Now",
            href: "/booking",
          },

          cta: {
            text: "View Villa",
            href: "/villa/grande",
          },
        },
      ],
    },
  },
];
