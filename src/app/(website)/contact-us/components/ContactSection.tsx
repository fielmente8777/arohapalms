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
    <Section defaultPadding={false}>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col items-center justify-center bg-tertiary text-center max-md:py-10 px-4">

          {/* Title */}
          <div>
            <p className="font-inter text-primary text-sm tracking-[0.3em] uppercase mb-4">
              {subTitle}
            </p>

            <h2 className="font-inter text-primary text-4xl lg:text-[48px] leading-none font-light">
              {title}
            </h2>
          </div>

          {/* Illustration */}
          <div className="relative my-12 aspect-[4.11/1] w-full">
            <Image
              src={illustration}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-secondary max-w-[500px] text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Button */}
          <Link
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-navy px-7 py-3 text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:opacity-80"
          >
            {button.label}
          </Link>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative bg-navy text-white min-h-[500px] lg:min-h-[650px] px-8 md:px-12 lg:px-14 py-12 lg:py-14">

          <div className="max-w-[600px] mx-auto">

            {/* EMAIL */}
            <div className="pb-10 border-b border-white/30">

              <div className="flex items-center gap-4">

                <span>
                  <EmailIcon />
                </span>

                <h3 className="font-inter font-light text-2xl md:text-3xl">
                  {email.label}
                </h3>

              </div>

              <Link
                href={email.href}
                className="block mt-5 font-inter text-base md:text-lg text-white/90 hover:text-white transition-colors"
              >
                {email.value}
              </Link>

            </div>

            {/* PHONE */}
            <div className="py-10 border-b border-white/30">

              <div className="flex items-center gap-4">

                <span>
                  <PhoneIcon />
                </span>

                <h3 className="font-inter font-light text-2xl md:text-3xl">
                  {phone.label}
                </h3>

              </div>

              <Link
                href={phone.href}
                className="block mt-5 font-inter text-base md:text-lg text-white/90 hover:text-white transition-colors"
              >
                {phone.value}
              </Link>

            </div>

            {/* LOCATIONS */}
            <div className="pt-10">

              <div className="flex items-center gap-4">

                <span>
                  <MapIcon />
                </span>

                <h3 className="font-inter font-light text-2xl md:text-3xl">
                  {locations.label}
                </h3>

              </div>

              <div className="mt-5 space-y-4 font-inter text-base md:text-lg leading-relaxed text-white/90">

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