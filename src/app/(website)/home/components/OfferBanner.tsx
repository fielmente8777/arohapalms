"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface OfferBannerProps {
  background: string[] ;
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
      <Image src={background} alt={title} fill className="object-cover" />

  <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-end justify-center pb-32">
        <div className="w-180 rounded-full bg-white/40 px-12 py-4 backdrop-blur-md">
          <h2 className="text-center md:text-3xl text-white md:text-blue">
            {title}
          </h2>

      <div className="mx-auto mt-3 h-px w-3/4 bg-white" />

          <div className="mt-3 flex justify-center">
            <Link
              href={cta.href}
              className="rounded-full border md:border-blue px-6 py-1.5 text-xs uppercase tracking-wider  text-white md:text-blue transition-all duration-150 hover:underline"
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