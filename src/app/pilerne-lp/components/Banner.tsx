"use client";
import LandingNavbar from "@/components/navbar/LandingNavbar";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface BannerProps {
  tag?: string;
  title?: string;
  description?: string;
  benefits?: string;
  image?: string;
  images?: string[];
}

const Banner: React.FC<BannerProps> = ({ image, images }) => {
  const bannerImage = image || (images && images.length > 0 ? images[0] : "/hero-banner.jpg");

  return (
    <Section defaultPadding={false} className="relative w-full">
      <div className="inset-x-0 absolute z-30">
        <LandingNavbar />
      </div>
      <div className="absolute inset-0 z-10 bg-black/10" />
      <div className="relative w-full lg:aspect-[16/7.7] aspect-[4/3.7] overflow-hidden">
        <Image
          src={bannerImage}
          alt="banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Section>
  );
};

export default Banner;
