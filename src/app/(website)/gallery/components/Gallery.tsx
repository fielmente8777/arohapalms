"use client";

import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface GalleryProps {
  image: string;
  title?: string;
  description?: string;
}

const Gallery = ({
  image,
  title = "Gallery",
  description,
}: GalleryProps) => {
  return (
    <Section className="relative h-[760px] w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#07182b]/35" />

      {/* Bottom Content */}
      <div className="relative z-10 flex h-full items-end justify-center ">
        <div className="max-w-[700px] px-6 text-center text-white">
          <h1 className="text-[34px] font-light leading-[1.2] md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-4 max-w-[620px] whitespace-pre-line text-[13px] font-light md:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;