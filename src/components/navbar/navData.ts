import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [
    // { label: "CALL NOW", href: contact.callCta },
    { label: "BOOK YOUR STAY", href: contact.WhatsappCta },
  ],

  links: [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
  ],
};

export const WebsiteNavData = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
  ],
};

export const HomeNavData = {
  logo: "/logo1.png",

  showLinks: false,
  showHamburger: true,
};

export const InnerNavData = {
  logo: "/logo1.png",

  links: [
    // {
    //   label: "First Impressions",
    //   href: "/",
    // },
    {
      label: "Your Stay",
      href: "/destination/",
      children: [
        {
          label: "Mandrem",
          href: "/destination/mandrem",
        },
        {
          label: "Pilerne",
          href: "/destination/pilerne",
        },
      ],
    },
    {
      label: "How To Reach",
      href: "/contact-us/",
    },
    {
      label: "The Experience",
      href: "/experience/",
    },
    {
      label: "Our Story",
      href: "/our-story/",
    },
    {
      label: "Articles",
      href: "/articles",
    },
    {
      label: "Contact Us",
      href: "/contact-us/",
    },
  ],

  showLinks: true,
  showHamburger: true,
};
