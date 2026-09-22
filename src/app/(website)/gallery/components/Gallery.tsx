"use client";

import Image from "next/image";

interface GalleryProps {
  image: string;
  title?: string;
  description?: string;
}

const Gallery = ({
  image,
  title = "Gallery",
  description = `A glimpse of the comfort, beauty, and memories that await.
Every photo tells the story of your perfect stay.`,
}: GalleryProps) => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden md:h-[560px]">
      {/* BACKGROUND IMAGE */}
      <Image
        src={image}
        alt="Aroha Palms Gallery"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#07182b]/35" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mt-16 max-w-[700px] px-6 text-center text-white">
          <h1
            className="
              text-[34px]
              font-light
              leading-[1.2]
              md:text-[48px]
            "
          >
            {title}
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              whitespace-pre-line
              text-[13px]
              font-light
              leading-[1.7]
              md:text-[15px]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;