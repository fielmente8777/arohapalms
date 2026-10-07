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
    <>
    <Section className="relative max-md:h-[500px] max-lg:h-[760px] lg:h-[760px] w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07182b]/70 via-[#07182b]/40 to-[#07182b]/25" />

      {/* Bottom Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[720px] px-6 text-center text-white">
          <h1 className="text-[34px] sm:text-[42px] md:text-5xl font-light leading-[1.2] tracking-wide">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-3 sm:mt-4 max-w-[620px] whitespace-pre-line text-base sm:text-lg md:text-xl leading-relaxed font-light text-white">
              {description}
            </p>
          )}
        </div>
      </div>
      
    </Section>
              <div className="bg-background-2 max_screen_width overflow-hidden">
                <Image
                  src="/images/Greek1.png"
                  alt=""
                  width={1440}
                  height={80}
                  className="h-auto w-full object-cover"
                />
              </div>
              </>
  );
};

export default Gallery;