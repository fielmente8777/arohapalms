"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface OfferBannerProps {
  background: string[];
  title: string;
  cta: {
    text: string;
    href: string;
  };
}

const OfferBanner = ({ background = [], title, cta }: OfferBannerProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (background.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % background.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [background]);

  // Don't render the image if no valid images are available
  if (!background.length || !background[currentImage]) {
    return null;
  }

  return (
   <section className="sticky top-0 h-screen overflow-hidden">
  <Image
    src={background[currentImage]}
    alt={title}
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 flex h-full items-end justify-center px-4 pb-10 sm:pb-16 md:pb-24 lg:pb-32">
    <div className="w-full max-w-[95%] rounded-2xl bg-white/40 px-5 py-5 backdrop-blur-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:rounded-full lg:px-12 lg:py-4">
      <h2 className="text-center text-xl font-medium text-white md:text-3xl md:text-[#25375A]">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-px w-3/4 bg-white" />

      <div className="mt-4 flex justify-center">
        <Link
          href={cta.href}
          className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#25375A] md:border-[#25375A] md:px-6 md:py-2 md:text-sm md:text-[#25375A]"
        >
          {cta.text}
        </Link>
      </div>
    </div>
  </div>
</section>
  );
};

export default OfferBanner;