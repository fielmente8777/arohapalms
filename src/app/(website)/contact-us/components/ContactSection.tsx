"use client";

import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";

import { EmailIcon, MapIcon, PhoneIcon } from "@/utils/icons";

interface ContactUsProps {
  title: string;
  subTitle: string;
  description: string;

  button: {
    label: string;
    href: string;
  };

  illustration: string;

  email: {
    label: string;
    value: string;
    href: string;
  };

  phone: {
    label: string;
    value: string;
    href: string;
  };

  locations: {
    label: string;
    items: string[];
  };
}

const ContactUs = ({
  title,
  subTitle,
  description,
  button,
  illustration,
  email,
  phone,
  locations,
}: ContactUsProps) => {
  return (
    <Section defaultPadding={false} className="pt-15 bg-background-2">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 bg-background-2">

   
        <div className="flex flex-col items-center justify-center bg-tertiary text-center max-md:py-10 px-4">

       
          <div>
            <p
              className="text-blue text-sm uppercase mb-4"
              style={{
                fontFamily: "var(--font-gfs-neohellenic), 'GFS Neohellenic', sans-serif",
                letterSpacing: "0.3em",
              }}
            >
              {subTitle}
            </p>

            <h2 className="font-inter text-blue text-4xl lg:text-[48px] leading-none font-light">
              {title}
            </h2>
          </div>

      
          <div className="relative my-12 aspect-[4.11/1] w-full">
            <Image
              src={illustration}
              alt=""
              fill
              className="object-contain"
            />
          </div>


       
          <p className="text-secondary max-w-[500px] text-sm md:text-base leading-relaxed">
            {description}
          </p>

       
          <Link
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-navy px-7 md:mb-10 py-3 text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:opacity-80"
          >
            {button.label}
          </Link>
        </div>

     
        <div className="relative bg-navy text-white min-h-[500px] lg:min-h-[650px] px-4 sm:px-6 md:px-12 lg:px-14 py-10 md:py-12 lg:py-14">
          <div className="absolute lg:hidden left-0 top-0 z-0 h-[20px] sm:h-[24px] w-full">
            <Image
              src="/home/design5.png"
              alt=""
              fill
              className="object-contain object-top"
            />
          </div>
          <div className="absolute hidden lg:block left-0 top-0 z-0 h-full w-[16px]">
            <Image
              src="/home/design6.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-[600px] mx-auto pt-4 md:pt-0">

            {/* EMAIL */}
            <div className="pb-6 md:pb-10 border-b border-white/30">

              <div className="flex items-center gap-3 md:gap-4">

                <span className="shrink-0 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  <EmailIcon />
                </span>

                <h3 className="font-inter font-light text-xl sm:text-2xl md:text-3xl">
                  {email.label}
                </h3>

              </div>

              <Link
                href={email.href}
                className="block mt-3 md:mt-5 font-inter text-sm sm:text-base md:text-lg text-white/90 hover:text-white transition-colors"
              >
                {email.value}
              </Link>

            </div>

            {/* PHONE */}
            <div className="py-6 md:py-10 border-b border-white/30">

              <div className="flex items-center gap-3 md:gap-4">

                <span className="shrink-0 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  <PhoneIcon />
                </span>

                <h3 className="font-inter font-light text-xl sm:text-2xl md:text-3xl">
                  {phone.label}
                </h3>

              </div>

              <Link
                href={phone.href}
                className="block mt-3 md:mt-5 font-inter text-sm sm:text-base md:text-lg text-white/90 hover:text-white transition-colors"
              >
                {phone.value}
              </Link>

            </div>

            {/* LOCATIONS */}
            <div className="pt-6 md:pt-10">

              <div className="flex items-center gap-3 md:gap-4">

                <span className="shrink-0 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center [&>svg]:w-auto [&>svg]:h-6 md:[&>svg]:h-7 text-white">
                  <MapIcon />
                </span>

                <h3 className="font-inter font-light text-xl sm:text-2xl md:text-3xl">
                  {locations.label}
                </h3>

              </div>

              <div className="mt-3 md:mt-5 space-y-3 md:space-y-4 font-inter text-sm sm:text-base md:text-lg leading-relaxed text-white/90">

                {locations.items.map((location, index) => (
                  <p key={index}>
                    {location}
                  </p>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </Section>
  );
};

export default ContactUs;