"use client";

import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface RegisterProps {
  image: string;
  logo: string;
  title: string;
  address: string;
  cin: string;
  gst: string;
}

const Register = ({
  image,
  logo,
  title,
  address,
  cin,
  gst,
}: RegisterProps) => {
  return (
    <Section defaultPadding={false}>
      {/* MOBILE VIEW ONLY (< lg) */}
      <div className="block lg:hidden bg-background-2 px-4 sm:px-6 py-10">
        {/* 1. LOGO */}
        <div className="relative w-[200px] sm:w-[220px] h-[80px] sm:h-[100px] mx-auto mb-6">
          <Image
            src={logo}
            alt="Aroha Palms"
            fill
            className="object-contain"
          />
        </div>

        {/* 2. IMAGE */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[300px] overflow-hidden mb-8">
          <Image src={image} alt="Aroha Palms" fill className="object-cover" />
        </div>

        {/* 3. REGISTERED ADDRESS DETAILS */}
        <div className="max-w-[500px] mx-auto font-inter text-[#162534] text-center">
          <h3 className="font-semibold text-lg sm:text-xl mb-3">{title}</h3>

          <p className="text-base leading-relaxed text-[#2b2b2b]">{address}</p>

          {/* CIN */}
          <p className="mt-4 text-base sm:text-lg">
            <span className="font-semibold">CIN:</span> {cin}
          </p>

          {/* GST */}
          <p className="mt-2 text-base sm:text-lg">
            <span className="font-semibold">GST:</span> {gst}
          </p>
        </div>
      </div>

      {/* DESKTOP VIEW ONLY (lg:) - 100% UNTOUCHED ORIGINAL */}
      <div className="hidden lg:grid w-full grid-cols-2 min-h-[600px] bg-background-2">
        {/* IMAGE */}
        <div className="relative min-h-[600px]">
          <Image src={image} alt="Aroha Palms" fill className="object-cover" />
        </div>

        {/* CONTENT */}
        <div className="bg-background-2 flex flex-col items-center justify-center text-center px-6 py-12">
          {/* LOGO */}
          <div className="relative w-[220px] h-[100px] mb-8">
            <Image
              src={logo}
              alt="Aroha Palms"
              fill
              className="object-contain"
            />
          </div>

          {/* REGISTERED ADDRESS */}
          <div className="max-w-[500px] font-inter text-[#162534]">
            <h3 className="font-semibold text-xl mb-3">{title}</h3>

            <p className="text-xl">{address}</p>

            {/* CIN */}
            <p className="mt-5 text-xl">
              <span className="font-semibold">CIN:</span> {cin}
            </p>

            {/* GST */}
            <p className="mt-3 text-xl">
              <span className="font-semibold">GST:</span> {gst}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
