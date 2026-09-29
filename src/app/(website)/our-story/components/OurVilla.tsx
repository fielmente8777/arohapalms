"use client";

import { Section } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";
import Image from "next/image";
import Link from "next/link";

interface OurVillasProps {
  title: string;
  description: string[];
  videos: {
    video: string;
    thumbnail: string;
  }[];
  card: {
    title: string;
    description: string;
  };
  buttons: {
    label: string;
    href: string;
    variant: string;
  }[];
}

const OurVillas = ({
  title,
  description,
  videos,
  card,
  buttons,
}: OurVillasProps) => {
  return (
    <Section defaultPadding={false} className="bg-background-2 ">
      <div className="max_screen_width px-8">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[0.75fr_1.25fr]
            md:gap-12
            lg:gap-16
          "
        >
          <div className="lg:max-w-[480px]">
            <h2
              className="
                text-3xl
                lg:text-start
                text-center
                text-blue
                lg:text-5xl

              "
            >
              {title}
            </h2>

            <div className="mt-5 hidden lg:block space-y-4">
              {description.map((text, index) => (
                <p
                  key={index}
                  className="
                    text-lg
                    text-[#666]
                    lg:text-xl
                  "
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-7 hidden lg:flex flex-wrap mx-auto items-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={`${button.href}-${index}`}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-5 py-2.5 text-[10px] font-medium uppercase md:text-sm transition duration-300 ${
                    button.variant === "solid"
                      ? "bg-navy text-white hover:bg-blue"
                      : "border-b border-blue text-blue hover:bg-blue hover:text-white"
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.slice(0, 2).map((item, index) => (
              <div
                key={`${item.video}-${index}`}
                className="
        group
        relative
        w-full
        aspect-[3/4]
        md:aspect-[3/4] lg:h-[550] lg:aspect-[2/3]
        overflow-hidden
      "
              >
                <LazyLoadedVideo src={item.video} poster={item.thumbnail} />
              </div>
            ))}
          </div>
                      <div className="mt-5 lg:hidden space-y-4">
              {description.map((text, index) => (
                <p
                  key={index}
                  className="
                    text-lg
                    text-[#666]
                    lg:text-xl
                  "
                >
                  {text}
                </p>
              ))}
            </div>

                      <div className="mt-7 w-full lg:hidden flex flex-row mx-auto items-center justify-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={`${button.href}-${index}`}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-5 py-2.5 text-[10px] font-medium uppercase md:text-sm transition duration-300 ${
                    button.variant === "solid"
                      ? "bg-navy text-white hover:bg-blue"
                      : "border-b border-blue text-blue hover:bg-blue hover:text-white"
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
        </div>
      </div>
      <div className="mt-10 w-full overflow-hidden md:mt-16 rotate-180">
        <Image
          src="/images/Greek1.png"
          alt=""
          width={1440}
          height={80}
          className="h-auto w-full object-cover"
        />
      </div>
      <div
        className="
    bg-background-2
    py-6
    md:py-8
    lg:py-12
  "
      >
        <div
          className="
      max_width
      grid
      grid-cols-1
      gap-8
      md:grid-cols-[1fr_1fr]
      lg:items-center
      md:gap-2
    "
        >
          {/* TITLE */}
          <div>
            <h3
              className="
          lg:max-w-[624px]
          text-3xl
          font-light
          text-[#1670B7]
          lg:text-[40px]
          
        "
            >
              {card.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p
              className="
          lg:max-w-[676px]
          lg:text-[14px]
          font-normal
          text-lg
          text-[#6B6B6B]
          lg:text-[20px]
          
        "
            >
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurVillas;
