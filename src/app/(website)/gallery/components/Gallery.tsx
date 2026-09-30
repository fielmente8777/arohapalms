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
      <div className="absolute inset-0 bg-[#07182b]/35" />

      {/* Bottom Content */}
      <div className="relative z-10 flex h-full items-end justify-center ">
        <div className="max-w-[700px] px-6 text-center text-white">
          <h1 className="text-[34px] font-light leading-[1.2] md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-3 sm:mt-4 max-w-[620px] whitespace-pre-line text-base leading-relaxed font-light md:text-xl">
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