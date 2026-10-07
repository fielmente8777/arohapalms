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
        <div
          className="relative w-full max-w-[427px] h-[80px] sm:h-[112px] mx-auto mb-6 opacity-100 rotate-0"
          style={{
            maxWidth: "427px",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        >
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
        <div className="max-w-[500px] mx-auto text-[#162534] text-center font-light">
          <h3 className="font-light text-lg sm:text-xl mb-3">{title}</h3>

          <p className="text-base leading-relaxed text-[#2b2b2b] font-light">{address}</p>

          {/* CIN */}
          <p className="mt-4 text-base sm:text-lg font-light">
            <span className="font-light">CIN:</span> {cin}
          </p>

          {/* GST */}
          <p className="mt-2 text-base sm:text-lg font-light">
            <span className="font-light">GST:</span> {gst}
          </p>
        </div>
      </div>

      {/* DESKTOP VIEW ONLY (lg:) */}
      <div className="hidden lg:grid w-full grid-cols-2 min-h-[600px] bg-background-2">
        {/* IMAGE */}
        <div className="relative min-h-[600px]">
          <Image src={image} alt="Aroha Palms" fill className="object-cover" />
        </div>

        {/* CONTENT */}
        <div className="bg-background-2 flex flex-col items-center justify-center text-center px-6 py-12">
          {/* LOGO */}
          <div
            className="relative w-full max-w-[427px] h-[112px] mb-8 mx-auto opacity-100 rotate-0"
            style={{
              maxWidth: "427px",
              height: "112px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            <Image
              src={logo}
              alt="Aroha Palms"
              fill
              className="object-contain"
            />
          </div>

          {/* REGISTERED ADDRESS */}
          <div className="max-w-[500px] text-[#162534] font-light">
            <h3 className="font-light text-xl mb-3">{title}</h3>

            <p className="text-xl font-light">{address}</p>

            {/* CIN */}
            <p className="mt-5 text-xl font-light">
              <span className="font-light">CIN:</span> {cin}
            </p>

            {/* GST */}
            <p className="mt-3 text-xl font-light">
              <span className="font-light">GST:</span> {gst}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Register;
