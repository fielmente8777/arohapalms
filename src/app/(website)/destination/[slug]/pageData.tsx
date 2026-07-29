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
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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

          description:
            "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

          features: ["5 Rooms", "5 Baths", "10 Guests"],

          bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
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
          title: "Aroha Palms Paradiso",
          description:
            "Tucked away in the serene landscape of Mandrem, Aroha Palms Paradiso is where luxury meets laid-back Goan charm. Start your day with a refreshing dip in the private pool or sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. Back at the villa, the lush lawn sets the stage for corporate offsites, intimate events, or a friendly game of football. As the sun dips, grill up a BBQ feast, and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",

          features: ["5 Rooms", "5 Baths", "10 Guests"],
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
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",

                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
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
          bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
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
          title: "Aroha Palms Serenity",
          description:
            "This luxury villa offers a serene and picturesque Greek-inspired setting with elegant whitewashed walls, blue accents, and lush greenery. Guests rave about the spotless and tranquil ambiance, perfect for a relaxing getaway. The spacious interiors, stylish decor, and well-equipped facilities provide a comfortable and memorable stay. Visitors appreciate the private pool, outdoor terraces, and cozy seating areas. The attentive staff and delectable food enhance the overall experience, making it a highly recommended choice for a memorable holiday.",

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
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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

          features: ["5 Rooms", "5 Baths", "10 Guests"],

          bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
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
                "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
            },
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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
          description:
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Marisol, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Marisol promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
          features: ["18 Rooms", "18 Baths", "36 Guests"],

            bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Encanto",
          description:
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Encanto, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",
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
                "The villa is super amazing and aesthetically made for comfort, and relaxation. The property is incredibly clean and hygienic because of the helpers of the property Manoj and Gudiya. They are very polite, and helpful. Over all the property is beautiful with a nice Swimming Pool, big rooms and hygiene.",
            },
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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

          features: ["10 Rooms", "10 Baths", "20 Guests"],

           bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
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
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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
          description:
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Prana, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Encanto promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

          features: ["9 Rooms", "9 Baths", "18 Guests"],

            bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Aroha Palms Caia",
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
            sectionButton: [
              {
                btn: "FAQ",
                listOfData: [
                  {
                    title: "PROPERTY OVERVIEW & VIBE",
                    list: [
                      {
                        title: "What is the total capacity of Aroha Palms?",
                        subTitle:
                          "Aroha Palms consists of 18 luxury rooms in total, divided into:",
                        items: [
                          "3 Luxury Villas: Villa Serenity (5 BR), Villa Paradisio (5 BR), and Villa Magnifica (4 BR).",
                          "4 Luxury Apartments: Suite de Emerald. The entire estate can be booked exclusively for large groups of 36–45 guests, depending on availability. Please contact us as early as possible for buyout inquiries.",
                        ],
                      },
                      {
                        title:
                          "What makes the location and design of the villas unique?",
                        subTitle:
                          "We follow a “Natural Luxury” philosophy. Instead of cold concrete walls, we use lush, dense tropical plants and natural bio-fencing. This provides 100% visual privacy while allowing the mountain breeze to flow through. We are just 3 minutes’ drive from the most exotic beach in Goa which is very popular with foreign tourists.",
                      },
                      {
                        title: "What are the views like from the property?",
                        subTitle:
                          "Aroha Palms offers a rare “Zen” experience. The villas and apartments back onto a gentle, flowing stream with stunning, unobstructed views of the lush Mandrem mountains and forest canopy. It is one of the most tranquil spots in North Goa.",
                      },
                    ],
                  },
                  {
                    title: "VILLA & APARTMENT SPECIFICS",
                    list: [
                      {
                        title:
                          "Are the villas interconnected for large groups?",
                        subTitle:
                          "Yes. While each villa is private, they are interconnected through lockable garden doors. We can unlock these for large families to create a seamless, expansive garden space across the estate.",
                      },
                      {
                        title: "Is the swimming pool private?",
                        items: [
                          "Villas: Each villa has a 10-meter private swimming pool that is not shared with any other guests while the villa is occupied.",
                          "Apartments: Apartment guests have “Conditional Access.” You may use a villa pool only when that specific villa is vacant. If all villas are occupied, the pools remain private to the villa guests.",
                          "Note: Our pools are not heated, but the Goa climate ensures pleasant water temperatures year-round.",
                        ],
                      },
                      {
                        title:
                          "What other outdoor spaces do the apartments have?",
                        subTitle:
                          "All apartments feature access to a beautifully landscaped 360-degree Roof Garden offering panoramic views of the Mandrem landscape.",
                      },
                    ],
                  },
                  {
                    title: "ARRIVAL, LOGISTICS & PARKING",
                    list: [
                      {
                        title: "Which airport is closer to Aroha Palms?",
                        items: [
                          "Mopa (Manohar International Airport – GOX): The preferred choice, located only 28 km (35 – 45 mins) away.",
                          "Dabolim (GOI): Located 56 km (1.5–2 hours) away depending on traffic.",
                        ],
                      },
                      {
                        title: "Do you provide airport transfers?",
                        subTitle:
                          "We do not provide complimentary pickups, but we can arrange a premium car (Innova Crysta or Luxury Sedan) at a reasonable price.",
                        items: [
                          "Note: A night surcharge applies for flights landing between late-night hours and 6:00 AM, as per standard Goa taxi practices.",
                        ],
                      },
                      {
                        title: "What are the parking and EV facilities?",
                        subTitle:
                          "We provide secure, on-site parking allocated as follows:",
                        items: [
                          "Villas: 2 dedicated car parks per villa.",
                          "Apartments: 1 dedicated car park per apartment.",
                          "There is also on street parking if required",
                          "EV Charging: Each villa is equipped with its own electrical charging point. Apartment guests should check with the manager for the nearest available on-site station.",
                        ],
                      },
                      {
                        title: "Is the road access “Sedan-friendly”?",
                        subTitle:
                          "Yes. The access road is fully accessible and wide enough for luxury sedans and large SUVs like an Innova or Fortuner.",
                      },
                    ],
                  },
                  {
                    title: "SERVICES, STAFFING & DINING",
                    list: [
                      {
                        title: "Is there on-site management?",
                        subTitle:
                          "Yes. Aroha Palms provides 24/7 on-site management and a resident caretaker to ensure a secure and seamless stay.",
                      },
                      {
                        title: "What are the dining and breakfast options?",
                        subTitle:
                          "Stays are typically room-only, but we offer maximum flexibility:",
                        items: [
                          "Self-Cooking: Each unit has a full-fledged kitchen.",
                          "Private Chef: We can arrange a professional chef for private meals (breakfast, lunch, or dinner). Charges are per meal or per day (plus groceries). Please provide 24-48 hours’ notice.",
                          "Next Door: An excellent restaurant right next door provides direct service to our villas and apartments.",
                          "Delivery: Swiggy and other food apps operate in the area.",
                          "Grocery Stocking: Our caretaker can assist you with grocery shopping before or during your stay.",
                        ],
                      },
                      {
                        title: "What is the housekeeping policy?",
                        subTitle:
                          "Housekeeping is performed daily. Sheets and towels are changed every 3 days. However, if something is soiled, we can change it immediately upon request.",
                      },
                    ],
                  },
                  {
                    title: "ACCESSIBILITY, SAFETY & POLICIES",
                    list: [
                      {
                        title:
                          "Is the property senior-citizen or handicapped-friendly?",
                        items: [
                          "Villas: Each villa has at least one bedroom on the ground floor to avoid stairs.",
                          "Apartments: The building features a modern lift (elevator) serving all floors and the roof garden.",
                          "Note: We do not currently have full wheelchair ramps/access.",
                        ],
                      },
                      {
                        title: "What are the Check-in and Check-out times?",
                        items: [
                          "Check-in: 3:00 PM | Check-out: 10:00 AM.",
                          "Early/Late Policy: We allow up to 2 hours of flexibility if there is no back-to-back booking. Beyond 2 hours, a half-day rent is charged.",
                        ],
                      },
                      {
                        title:
                          "Are there safety lockers and security deposits?",
                        subTitle:
                          "Each unit is equipped with a safety locker (guests are responsible for their valuables). We collect a refundable security deposit at check-in, which is returned at checkout minus any damages (charged at actuals).",
                      },
                      {
                        title: "What are your core house policies?",
                        items: [
                          "Pets: Aroha Palms is not pet-friendly.",
                          "Noise: As per Goa Government law and to protect the serenity of our neighbors, loud music is prohibited after 10:00 PM.",
                          "Guests: We are family-friendly. ‘Stags’ are welcome provided they adhere to house rules and government laws.",
                          "Security: 24/7 CCTV is active in common areas. There is no CCTV in private guest areas.",
                          "Extra Beds: Extra mattresses are available at Rs. 2,000 per day",
                        ],
                      },
                    ],
                  },
                  {
                    title: "LOCATION, RECREATION & MEDICAL",
                    list: [
                      {
                        title: "How far is the beach and what can we do there?",
                        items: [
                          "Mandrem Beach: A peaceful 3-minute drive. It is one of Goa’s most exotic beaches, popular for its quiet shacks and fresh seafood.",
                          "Water Sports: We can help book surfing and kayaking in Mandrem or high-speed Jet-skis in Arambol (15 mins away).",
                          "Swimming: Sea swimming is safe from Oct–May but prohibited during Monsoon (June–Sept) due to currents. Please check with beach life guard",
                        ],
                      },
                      {
                        title: "Distances to Nearby Beaches & Hubs:",
                        items: [
                          "Mandrem Beach: 2 km (Exotic Beach very popular with foreign tourists)",
                          "Ashwem Beach: 4 km (Boutiques/Trendy crowds).",
                          "Arambol Beach: 6 km (Hippie vibe/Sweet Water Lake).",
                          "Morjim Beach: 9 km (Turtle nesting/Bird watching).",
                          "Siolim: 15–20 mins | Vagator/Anjuna: 30–40 mins | Assagao: 25 mins.",
                        ],
                      },
                      {
                        title:
                          "What are the best nearby restaurants and clubs?",
                        items: [
                          "Dining: Artjuna (Breakfast), Burger Factory (Lunch), Susegado, L’Atelier, Anahata, Lazy Dog and Saz on the Beach.",
                          "Clubs: Thalassa, Antares, Marbela Beach Club, and La Plage (all within 15–25 mins).",
                          "Casinos: Offshore casinos (Deltin Royale/Pride) are in Panjim (1-hour drive). We can arrange a private car for a late-night drop and return.",
                        ],
                      },
                      {
                        title: "Medical Facilities & Rentals:",
                        items: [
                          "Hospitals: The nearest high-end medical facilities are Manipal Hospital (approx. 1 hour) or local clinics in Siolim (20 mins).",
                          "",
                          "Car Rental: We can assist in arranging ‘Self-Drive’ luxury car rentals.",
                        ],
                      },
                    ],
                  },
                  {
                    title: "Booking & Cancellation Policy",
                    list: [
                      {
                        title:
                          "A) We offer a tiered cancellation policy based on how far in advance you notify us. Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                        items: [
                          "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                          "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                          "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                          "Within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                        ],
                      },
                      {
                        title:
                          "B) Can I adjust my advance payment against a future booking?",
                        subTitle:
                          "Yes! We highly recommend the Future Stay Credit option if your plans change. Instead of taking a partial cash refund, you can apply your payment toward a new booking.",
                        items: [
                          "Validity: Credits are typically valid for 6 months from your original check-in date.",
                          "Rate Difference: If your new dates fall in a higher-priced season (e.g., moving from August to December), you simply pay the difference in the prevailing villa rate.",
                        ],
                      },
                      {
                        title:
                          "C) Are there any “Blackout Dates” for cancellations?",
                        subTitle:
                          "Yes. Due to extremely high demand, bookings for Peak Season (December 20th – January 5th), Diwali, and long holiday weekends are strictly Non-Refundable and Non-Reschedulable. Once confirmed, these dates cannot be changed or credited.",
                      },
                      {
                        title:
                          "D) What happens if I need to leave earlier than planned?",
                        subTitle:
                          "If you choose to shorten your stay after checking in, we are unable to offer refunds or credits for the unused nights.",
                      },
                      {
                        title:
                          "E) Is my Security Deposit refundable if I cancel?",
                        subTitle:
                          "Absolutely. If you cancel your booking within any window, your Security Deposit is always refunded to you in full (100%).",
                      },
                      {
                        title:
                          "F) How do I request a rescheduling or cancellation?",
                        subTitle:
                          "All requests must be sent via email to our booking team. The “days notice” is calculated from the time we receive your written request.",
                      },
                    ],
                  },
                ],
              },

              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                ],
              },

              {
                btn: "REFUND & CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
            ],
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
          description:
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Villa Caia, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke. The private pool and spacious terrace set the stage for Goa’s signature sundowners, whether you’re lounging with a cocktail or making a splash. Whether it’s a family retreat, a romantic escape, or a getaway with friends, Villa Caia promises a luxurious yet homely vibe that will make leaving feel like the hardest part. Pack your bags—paradise awaits!",

          features: ["7 Rooms", "7 Baths", "14 Guests"],

           bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Onyx",
          description:
            "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

          features: ["2 Rooms", "2 Baths", "4 Guests", "Terrace", "Kitchen"],
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
          bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
          moreInfo: {
            description: [
              "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy.",
              "The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",
            ],
            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Onyx stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },
            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
          },
          note: {
            title: "Note:",
            notes: [
              "All rates are on a per person, per day basis.",
              "Additional guests are chargeable.",
              "Barbecue can also be arranged at an additional cost.",
              "Consumption of non-vegetarian food is allowed.",
              "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
              "Guests do not have access to the property kitchen.",
            ],
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Lumina",
          description:
            "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy. The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",

          features: ["2 Rooms", "2 Baths", "4 Guests"],

           bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
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
          moreInfo: {
            description: [
              "A thoughtfully designed 1,200 sq. ft. apartment that blends Mediterranean-inspired elegance with the vibrant, coastal soul of the Arabian sea. Located on the first floor with modern lift access, the space is crafted for seamless flow and total privacy.",
              "The apartment features two sunlit master suites (800 and 400 sq. ft.) with king-size beds and a flexible layout perfectly suited for families, friend groups, or couples seeking a tranquil base. Dedicated workstations and a fully equipped kitchen allow for a stay that combines functionality and complete independence, complemented by secluded attached balconies for quiet reflection.",
            ],
            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Lumina stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },
            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
          },
          note: {
            title: "Note:",
            notes: [
              "All rates are on a per person, per day basis.",
              "Additional guests are chargeable.",
              "Barbecue can also be arranged at an additional cost.",
              "Consumption of non-vegetarian food is allowed.",
              "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
              "Guests do not have access to the property kitchen.",
            ],
          },
        },

        {
          image: "/landing-page/bnr.jpg",
          title: "Suite De Emerald",
           images: [
          "/rooms/Emerald/Emerald.png",
          "/rooms/Emerald/emerald1.jpg",
          "/rooms/Emerald/emerald6.webp",
          "/rooms/Emerald/emerald2.jpg",
          "/rooms/Emerald/emerald3.jpg",
          "/rooms/Emerald/emerald4.jpg",
          "/rooms/Emerald/emerald5.webp",
        ],
          description:
            "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features two sunlit master suites with king-size beds and a flexible layout suited for families, friend groups, or extended stays. A dedicated workstation and a fully equipped kitchen allow for a stay that combines relaxation, functionality, and complete independence.",

          features: ["1 Rooms", "2 Guests"],

            bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
          },
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
          moreInfo: {
            description: [
              "The apartment features two sunlit master suites with king-size beds, generous proportions, and a flexible layout suited for families, friend groups, or longer stays. A dedicated workstation and in-room essentials ensure a comfortable balance between rest and productivity.",
              "Suite De Emerald is a thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
            ],
            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Emerald stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },
            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
          },
          note: {
            title: "Note:",
            notes: [
              "All rates are on a per person, per day basis.",
              "Additional guests are chargeable.",
              "Barbecue can also be arranged at an additional cost.",
              "Consumption of non-vegetarian food is allowed.",
              "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
              "Guests do not have access to the property kitchen.",
            ],
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

          moreInfo: {
            description: [
              "Suite De Platinum is a thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
              "The studio features a spacious master suite with a king-size bed, abundant natural light, and a flexible layout suited for couples, friends, or small families. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",
            ],
            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Platinum stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },
            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
          },
          note: {
            title: "Note:",
            notes: [
              "All rates are on a per person, per day basis.",
              "Additional guests are chargeable.",
              "Barbecue can also be arranged at an additional cost.",
              "Consumption of non-vegetarian food is allowed.",
              "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
              "Guests do not have access to the property kitchen.",
            ],
          },

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
          description:
            "Thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the second floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.0 The studio features a spacious master suite with a king-size bed, abundant natural light, and a flexible layout suited for couples, friends, or small families. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",

          features: ["1 Rooms", "2 Guests", "Terrace"],

            bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
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

          moreInfo: {
            description: [
              "A thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
              "The studio features a sunlit master suite with a king-size bed and a versatile layout suited for couples, friend groups, or small families. A dedicated workstation and in-room essentials ensure it supports both slow, relaxed stays and moments of productivity with ease.",
            ],
            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Prestige stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Emerald looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },
            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },
            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },
              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
          },
          note: {
            title: "Note:",
            notes: [
              "All rates are on a per person, per day basis.",
              "Additional guests are chargeable.",
              "Barbecue can also be arranged at an additional cost.",
              "Consumption of non-vegetarian food is allowed.",
              "Please inform us of your meal preference in advance and allow us a minimum 48 hrs notice prior to your check-in date.",
              "Guests do not have access to the property kitchen.",
            ],
          },
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
          description:
            "A thoughtfully designed 400 sq. ft. studio retreat that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.The studio features a sunlit master suite with a king-size bed and a versatile layout suited for couples, friend groups, or small families. A dedicated workstation and in-room essentials ensure it supports both slow, relaxed stays and moments of productivity with ease.",

          features: ["1 Rooms", "2 Guests"],

            bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
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

          moreInfo: {
            description: [
              "Suite De Regal is a thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Located on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout.",
              "The apartment features a spacious master suite with a king-size bed, abundant natural light, and a versatile layout suited for couples, families, or groups of friends. A dedicated workstation and in-room essentials ensure it comfortably supports both relaxation and productivity.",
            ],

            listOfData: {
              title: "Explore your stay",
              list: [
                "Suite de Regal stands out as one of the top apartments in Mandrem due to its:",
                "– Secluded North Goa location, offering the perfect escape to experience the susegad lifestyle",
                "– Bright, Greek-inspired interiors, exuding subtle luxury with top-notch amenities",
                "– Serene river flowing by the property, creating a soothing backdrop to wake up to",
                "– Easy access to Goa’s stunning beaches and vibrant tourist attractions",
                "Sway. Sip. Sunset – That’s what a day at Suite De Regal looks like.",
                "Tucked away in the serene landscape of Mandrem, this apartment is where luxury meets laid-back Goan charm. Start your day with a sip on your morning coffee while soaking in the river and mountain views from the terrace. Just 2 km away from Mandrem Beach, a quick drive takes you to golden sands and azure waters—perfect for sunbathing, swimming, or simply lazing with a coconut in hand. As the sun dips, gather around and let the good times roll. Feeling adventurous? Explore North Goa’s iconic spots—Ashwem Beach, Chapora Fort, and the bustling Anjuna Flea Market. As the night deepens, retreat to your luxurious haven, where every corner whispers relaxation and revelry in equal measure.",
                "ADD-ON SERVICES",
                "– All vegetarian and non-vegetarian meals are available in-house at an additional cost.",
                "– The costs for the aforementioned food and beverage offerings and events are subject to an 18% GST charge.",
                "– Prices may vary subject to availability and peak season rates.",
              ],
            },

            review: {
              author: "Varshitha R",
              description:
                "Good ambience and close to beach. Very aesthetic place and perfect for photos",
            },

            sectionButton: [
              {
                btn: "HOUSE RULES",
                listOfData: [
                  {
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
                      "Refer to our <a href='https://arohapalms.com/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },

              {
                btn: "REFUND POLICY",
                listOfData: [
                  {
                    list: [
                      "45+ Days Notice: Full refund (less 5% processing fee) or 100% credit for a future stay.",
                      "30 – 44 Days Notice: 50% cash refund or 100% credit for a future stay.",
                      "15 – 29 Days Notice: No cash refund. However, we offer a 50% credit for a future stay.",
                    ],
                  },
                ],
              },

              {
                btn: "CANCELLATION",
                listOfData: [
                  {
                    list: [
                      "Our goal is to balance flexibility for our guests with the operational requirements of maintaining a luxury estate.",
                      "Cancellation within 14 Days: Cancellations made within two weeks of check-in are non-refundable and not eligible for credit.",
                      "Refer to our <a href='https://arohapalms.com/faq/'>FAQs for any questions/queries.</a>",
                    ],
                  },
                ],
              },
            ],
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
          images: [
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
          description:
            "A thoughtfully designed 800 sq. ft. apartment that blends Mediterranean-inspired aesthetics with a calm, coastal sensibility. Situated on the first floor with lift access, the space is crafted for effortless living, offering privacy, openness, and a seamless flow throughout. The apartment features a spacious master suite with a king-size bed and a versatile layout suited for couples, friend groups, or families. A dedicated workstation, along with a fully equipped kitchen, ensures a stay that balances comfort, independence, and everyday convenience with ease.",
          features: ["1 Rooms", "2 Guests"],

           bookNow: {
            text: "Book Now",
            href: contact.WhatsappCta,
          },

          cta: {
            text: "View Villa",
            href: "popup",
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
          description:
            "Picture this: Greek-inspired elegance meets tropical bliss, all wrapped up in the heart of Goa. Welcome to Aroha Palms Magnifica, a stunning retreat in Mandrem that radiates both sophistication and warmth—the perfect blend for a dreamy vacation. Perched between a serene river and lush mountains, this villa truly gives you the best of both worlds. And with Mandrem Beach just 2 km away, your dose of sun, sand, and sea is just a short ride away—like the cherry on a perfectly chilled Coke.",

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
          description:
            "Welcome to Aroha Palms Grande, Goa’s premier luxury art villa rental. Nestled in the heart of Goa’s picturesque countryside quaint village that is close to all beaches, our villa offers the ultimate in privacy, comfort, and elegance. This stunning six-bedroom white villa is the epitome of luxury and comfort, offering the perfect blend of indulgence and relaxation. Come and experience the refined elegance and architectural brilliance that awaits you in this magnificent villa.",

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
