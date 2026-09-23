"use client";

import { Section } from "@/components/sectionComponants";
import Link from "next/link";

interface OurVillasProps {
  title: string;
  description: string[];
  videos: string[];
  card: {
    title: string;
    description: string;
  };
}

const OurVillas = ({ title, description, videos, card }: OurVillasProps) => {
  return (
    <Section className="bg-[#fefcf4] ">
      <div className="max_screen_width px-8">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            md:grid-cols-[0.75fr_1.25fr]
            md:gap-12
            lg:gap-16
          "
        >
    
          <div className="max-w-[430px]">
          
            <h2
              className="
                text-2xl
                
                text-blue
                md:text-5xl
              "
            >
              {title}
            </h2>

          
            <div className="mt-5 space-y-4">
              {description.map((text, index) => (
                <p
                  key={index}
                  className="
                    text-sm
                    text-[#666]
                    md:text-xl
                  "
                >
                  {text}
                </p>
              ))}
            </div>

           
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/destination/mandrem"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-blue
                  px-5
                  py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wide
                  text-blue
                  transition
                  duration-300
                  hover:bg-blue
                  hover:text-white
                "
              >
                Explore Mandrem
              </Link>

              <Link
                href="/destination/pilerne"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-blue
                  px-5
                  py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wide
                  text-blue
                  transition
                  duration-300
                  hover:bg-blue
                  hover:text-white
                "
              >
                Explore Pilerne
              </Link>
            </div>
          </div>


          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {videos.slice(0, 2).map((video, index) => (
              <div
                key={`${video}-${index}`}
                className="
                  group
                  relative
                  aspect-[0.82/1]
                  w-full
                  overflow-hidden
                "
              >
                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* PLAY ICON */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-blue
                    "
                  >
                    <span className="ml-1 text-base">▶</span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div
          className="
    bg-[#fefcf4]
    py-16
    md:py-12
  "
        >
          <div
            className="
      max_width
      grid
      grid-cols-1
      gap-8
      md:grid-cols-[1fr_1fr]
      md:items-center
      md:gap-0
    "
          >
            {/* TITLE */}
            <div>
              <h3
                className="
          max-w-[624px]
          text-[28px]
          font-light
          
          text-[#1670B7]
          md:text-[40px]
          
        "
              >
                {card.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p
                className="
          max-w-[676px]
          text-[14px]
          font-normal
          
          text-[#6B6B6B]
          md:text-[20px]
          
        "
              >
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurVillas;
