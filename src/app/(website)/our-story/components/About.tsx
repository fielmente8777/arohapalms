"use client";

import { Section } from "@/components/sectionComponants";
import GallerySlider, { BtnIcon } from "./silder/Image";

interface AboutProps {
  title: string;
  intro: string;
  description: string[];
  images: string[];
}

const About = ({ title, intro, description, images }: AboutProps) => {
  return (
    <Section className="bg-[#fefcf4] ">
      <div className="">
        <div className="mx-auto w-full ">
          <div className="flex flex-col items-start md:flex-row">
            {/* LEFT + MAIN IMAGE */}
            <div className="w-full md:w-auto">
              <GallerySlider images={images} />
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="flex w-full flex-col justify-between  
            md:ml-10
            md:h-[568px]
            md:px-0
            lg:ml-10
            md:pr-6
            lg:pr-8
            "
            >
              <div>
                <h2 className="text-2xl font-normal text-[#17384e] md:text-[38px] lg:text-5xl">
                  {title}
                </h2>

                <p className="mt-6 text-sm text-gray-600 md:text-lg lg:text-xl">
                  {intro}
                </p>

                <div className="mt-4 space-y-4">
                  {description.map((text, index) => (
                    <p
                      key={index}
                      className="text-sm text-gray-600 md:text-lg lg:text-xl"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="mt-8 flex items-center justify-between pt-2">
                {/* SAME GALLERY NEXT BUTTON */}
                <button
                  type="button"
                  className="
                   -mt-14
                    gallery-slider-next
                    flex
                    items-center
                    rotate-180
                  "
                  aria-label="Next image"
                >
                  <BtnIcon />
                </button>

                {/* CONTACT */}
                <a
                  href="/contact-us"
                  className="
                    border-b
                    border-[#17384e]
                    pb-0.5
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-[#17384e]
                  "
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
