import { JSX } from "react/jsx-runtime";

export interface AccommodationSectionProps {
  tagline: string;
  title: string;
  description: string;
  cards: {
    title: string;
    type: string;
    description: string;
    amenities: {
      icon?: JSX.Element;
      label: string;
    }[];
    location: string;
    images: string[];
    cta: {
      label: string;
      href: string;
    };
  }[];
}

export interface TestimonialsProps {
  tagline: string;
  title: string;
  reviews: {
    name: string;
    review: string;
    rating?: number;
  }[];
}

export interface FaqSectionProps {
  tagline: string;
  title: string;
  items: {
    q: string;
    a: string;
  }[];
  concierge: {
    tagline: string;
    title: string;
    description: string;
    note: string;
  };
}
