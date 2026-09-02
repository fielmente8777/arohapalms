import { JSX } from "react/jsx-runtime";

export interface AccommodationSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  note: string;
  cards: {
    title: string;
    span: string;
    discountCode: string;
    type: string;
    description: string;
    amenities: {
      icon: JSX.Element;
      label: string;
    }[];
    inRoomAmenities: {
      icon: JSX.Element;
      label: string;
    }[];
    originalPrice: string;
    startingPrice: string;
    moreInfo: {
      title: string;
      roomInfo: string[];
      description: string[];
      listOfData: {
        title: string;
        description?: string;
        list: string[];
      }[];
      review: {
        author: string;
        description: string;
      };
    };
    note?: {
      title: string;
      notes: string[];
    };
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
    avatar?: string;
    googleIcon?: string;
    name: string;
    review: string;
    time?: string;
    rating?: number;
  }[];
}

export interface FaqSectionProps {
  image?: string;
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
