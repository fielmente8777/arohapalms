// pageData.tsx
// Central content/config file for the villa landing page.
// Swap image paths, copy, and numbers here without touching page.tsx.

import { contact } from "@/utils/constent";

export const siteConfig = {
  name: "Aroha Palms",
  tagline: "Luxury Villas & Hotel",
  phone: "+91 98342 20573",
  whatsappNumber: "919834220573",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const hero = {
  backgroundImage: "/images/5-bhk-monsson-.jpg",
  eyebrow: "North Goa · Private Pool Villa",
  headline: "Experience Ultra-Luxury in North Goa This Monsoon",
  subline:
    "Get 50% off on the entire 5-BHK private villa in Mandrem — now available for a limited time.",
  priceOriginal: "₹40,000/N",
  priceDiscounted: "₹20,000/N",
  priceNote: "+ taxes",
  primaryButton: {
    label: "Check Availability & Secure 50% Off",
    href: contact.WhatsappCta,
  },
};

export const amenities = [
  { icon: "bed", label: "5 BHK · 10 – 15 Guests" },
  { icon: "pool", label: "Private Pool" },
  { icon: "wifi", label: "High Speed WiFi" },
  { icon: "star", label: "Daily Housekeeping" },
  { icon: "kitchen", label: "Full Kitchen" },
  { icon: "pin", label: "Near Mandrem Beach" },
  { icon: "users", label: "Groups & Couples" },
  { icon: "shield", label: "24/7 Support" },
];

export const promo = {
  title: "Limited Dates Available for This Exclusive Promotion",
  description:
    "To maintain our uncompromising standard of luxury hospitality, this 50% discount is strictly limited to select dates during the monsoon season.",
  priceOriginal: "₹40,000 + taxes / night",
  priceDiscounted: "₹20,000 + taxes / night",
  primaryButton: {
    label: "Claim Your 50% Discount Now",
    href: contact.WhatsappCta,
  },
  footnote:
    "Rate applies to the entire 5-BHK villa per night. Minimum stay requirements may apply during peak weekends.",
};

export const experienceIntro = {
  eyebrow: "The Aroha Experience · Mandrem, North Goa",
  heading: ["More Than a Stay,", "It's a Private Villa Getaway"],
  body:
    "Step into a 5 BHK villa in Goa with a private pool, where time slows down and every space feels intentional. Designed for larger groups, this luxury villa brings together open living, quiet corners, and seamless indoor-outdoor flow. Whether you're planning a getaway with friends or looking for a family stay, the experience here is both expansive and personal — never crowded, always comfortable.",
  primaryButton: {
    label: "Plan Your Stay",
    href: contact.WhatsappCta,
  },
  image: "/images/aroha-palms.png",
};

export const gallery = {
  eyebrow: "Photo Gallery",
  heading: "Every Corner, Carefully Considered",
  images: [
    { src: "/images/villa-magnifica-74475b.jpg", alt: "Private pool in daylight" },
    { src: "/images/villa-serenity-463337.webp", alt: "Bright living room" },
    { src: "/images/chair.png", alt: "Quiet study nook" },
    { src: "/images/sofa.jpg", alt: "Warm lounge seating" },
    { src: "/images/bedroom.jpg", alt: "King bedroom in the evening" },
    { src: "/images/dining.jpg", alt: "Art-lined dining space" },
  ],
  ctaLabel: "Check Availability for This 5 BHK Villa in Goa",
};

export const walkthrough = {
  eyebrow: "Villa Walkthrough · 5 BHK Private Pool Villa",
  heading: "Spaces Crafted for Comfort & Connection",
  sections: [
    {
      index: "01",
      tag: "Living Area",
      title: "Open, Airy & Made for Gathering",
      body:
        "The central living area in this 5 BHK villa is a bright, open space designed for connection. It flows effortlessly between indoors and out, bringing in light, air, and a sense of ease. Thoughtfully curated furniture and warm textures create an atmosphere that feels comfortable and lived-in, never staged. Whether you're planning a group stay or a relaxed family getaway, this space naturally becomes the heart of the home — perfect for gatherings, easy conversations, shared moments, or simply unwinding together.",
      image: "/images/sofa.jpg",
      imageSide: "right",
    },
    {
      index: "02",
      tag: "Bedrooms · 5 BHK",
      title: "Five Rooms, Each With Their Own Story",
      body:
        "Our 5 BHK villa in North Goa features five private retreats — each with king-size beds dressed in premium linen, en-suite baths, and large windows framing views of the garden or pool. Designed for restful nights and unhurried mornings, every room offers a self-contained sanctuary. Whether you're a couple seeking privacy or a large family spreading out, each bedroom maintains the same refined, luxury standard throughout.",
      image: "/images/bedroom.jpg",
      imageSide: "left",
    },
    {
      index: "03",
      tag: "Pool & Outdoors",
      title: "Your Private Pool. Your Hours.",
      body:
        "The private pool is the soul of Aroha Palms — and the reason guests call us the best villa with a private pool in Goa. Surrounded by sun loungers, tropical greenery, and a shaded cabana area, it's yours entirely. No shared pool, no timings, no strangers. Just water, warmth, and your people. The kind of Goa private pool stay that makes every holiday feel extraordinary.",
      image: "/images/pool.jpg",
      imageSide: "right",
    },
    {
      index: "04",
      tag: "Kitchen & Dining",
      title: "A Space for Unhurried Meals Together",
      body:
        "A fully equipped open kitchen with modern appliances, generous counter space, and a large dining table seats your entire group comfortably. Whether it's a self-catered breakfast for couples or a catered dinner for twelve, this kitchen handles it all. One of the standout features of renting a luxury villa with a private pool — no restaurant queues, no fixed timings, just great food on your schedule.",
      image: "/images/dining.jpg",
      imageSide: "left",
    },
  ],
};

export const reviews = {
  eyebrow: "Guest Stories",
  heading: "Words from Our Guests",
  rating: 4.9,
  outOf: 5,
  reviewCount: 88,
};

export const whyUs = {
  eyebrow: "Why Aroha Palms",
  heading: "The Best Luxury Villa in North Goa — Here's Why",
  cards: [
    {
      icon: "lock",
      title: "Complete Privacy",
      body:
        "The entire villa is exclusively yours — a true private villa in Goa with private pool. No shared spaces, no other guests. Just your group, your pool, your space. Whether you're booking a couple's retreat or a group of twelve, privacy is never compromised.",
    },
    {
      icon: "users",
      title: "Built for Groups",
      body:
        "Five bedrooms, expansive communal areas, a large pool deck, and a dining table for the whole gang. As one of the best villas in North Goa for group stays, Aroha Palms is designed from the ground up for both intimate couple getaways and larger family gatherings.",
    },
    {
      icon: "pin",
      title: "Prime North Goa",
      body:
        "Nestled in Mandrem, minutes from Anjuna, Vagator, and Morjim beaches — this private villa near Mandrem beach puts Goa's finest cafes, markets, and sunset spots at your doorstep, while staying completely secluded from the crowds.",
    },
    {
      icon: "shield",
      title: "Managed Experience",
      body:
        "From north Goa villa booking to checkout, our concierge team handles everything. Housekeeping, airport transfers, local tips, restaurant bookings, private chef arrangements — we're just a WhatsApp away, every step of the way.",
    },
  ],
};

export const location = {
  eyebrow: "Where We Are",
  heading: "Nestled in Mandrem, North Goa",
  body:
    "One of the most sought-after private villas in North Goa near the beach — perfectly placed in serene Mandrem, within minutes of Goa's finest beaches, cafes, and sunset spots, yet completely secluded from the tourist rush.",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=Iframe - Aroha Palms, House No. 290, Marathwada, near Pateshwar Temple, Madhalamaj, Mandrem, Goa 403527 → Html → Body", 
  highlightsLabel: "Nearby Highlights",
  driveLabel: "Approx. Drive Time",
  highlights: [
    { name: "Mandrem Beach", time: "3 min drive" },
    { name: "Lazy Dog", time: "5 min drive" },
    { name: "Ashwem Beach", time: "5 min drive" },
    { name: "Arambol Beach", time: "10 min drive" },
    { name: "La Plage", time: "10 min drive" },
    { name: "Burger Factory", time: "15 min drive" },
    { name: "Thalassa", time: "15 min drive" },
    { name: "Morjim Beach", time: "18 min drive" },
  ],
  calloutText:
    "Aroha Palms has various premium private villas for rent in North Goa with a private pool.",
};

export const faq = {
  eyebrow: "Common Questions",
  heading: "Everything You Need to Know Before Booking",
  items: [
    {
      question: "How many guests can the 5 BHK Villa of Aroha Palms comfortably accommodate?",
      answer:
        "The villa comfortably sleeps 10–15 guests across five en-suite bedrooms, with additional space in the living areas for larger gatherings.",
    },
    {
      question: "Is the pool truly private — no shared pool or common areas?",
      answer:
        "Yes. The entire pool, garden, and villa are reserved exclusively for your booking. There are no shared facilities or other guests on the property.",
    },
    {
      question: "What is the check-in and check-out time?",
      answer:
        "Standard check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can be arranged in advance, subject to availability.",
    },
    {
      question: "Is cooking allowed? What kitchen facilities are available?",
      answer:
        "The villa has a fully equipped open kitchen with modern appliances, cookware, and a large dining table. You're welcome to self-cater, or arrange a private chef through our concierge team.",
    },
    {
      question: "What is your cancellation and villa booking policy?",
      answer:
        "Cancellation terms vary by season and rate plan. Full details are shared at the time of booking confirmation, and our team is happy to walk you through them beforehand.",
    },
    {
      question: "Is Aroha Palms good for couples as well as large groups?",
      answer:
        "Absolutely. The villa works equally well for an intimate couple's retreat or a large family and friends gathering, thanks to its mix of private bedrooms and generous shared spaces.",
    },
    {
      question: "How do we get to the villa from the airport?",
      answer:
        "We can arrange airport transfers from Goa's Dabolim or Manohar International Airport directly to the villa — just let our concierge team know your flight details.",
    },
    {
      question: "Is housekeeping included in the stay?",
      answer:
        "Yes, daily housekeeping is included for the duration of your stay at no extra charge.",
    },
  ],
  stillHaveQuestions: {
    heading: "Still have questions?",
    body: "Our team is available on WhatsApp and email.",
    ctaLabel: "Chat on WhatsApp",
  },
};