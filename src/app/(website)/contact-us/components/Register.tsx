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
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* IMAGE */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">
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

            <p className="text-sm md:text-xl ">{address}</p>

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
