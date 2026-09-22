"use client";

import { useRef } from "react";
import { Section } from "@/components/sectionComponants";
import AboutImageSlider, { AboutImageSliderRef } from "./silder/Image";
import { ChevronRight } from "lucide-react";

interface AboutProps {
  title: string;
  intro: string;
  description: string[];
  images: string[];
}

const About = ({ title, intro, description, images }: AboutProps) => {
  const sliderRef = useRef<AboutImageSliderRef>(null);

  return (
    <Section className="bg-[#fefcf4] py-16! ">
      <div className="max_screen_width">
      
        <div className="mx-auto w-full max-w-[1408px]">
          <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:gap-10">
   
            <div className="w-full md:w-auto">
              <AboutImageSlider ref={sliderRef} images={images} title={title} />
            </div>


            <div className="flex w-full flex-col justify-between pt-0 md:h-[568px] md:max-w-[443px] ">
              <div>
                <h2 className="text-2xl font-normal tracking-tight text-[#17384e] md:text-[38px] lg:text-[40px]">
                  {title}
                </h2>

              
                <p className="mt-6 text-sm  text-gray-600 md:text-[14px] lg:text-[15px]">
                  {intro}
                </p>

               
                <div className="mt-4 space-y-4">
                  {description.map((text, index) => (
                    <p
                      key={index}
                      className="text-sm leading-[1.65] text-gray-600 md:text-[14px] lg:text-[15px]"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-2">
              
                <button
                  type="button"
                  onClick={() => sliderRef.current?.next()}
                  aria-label="Next image"
                  className="flex items-center text-[#d2a45d] transition-opacity duration-300 hover:opacity-60"
                >
                  <span className="w-10 border-t border-[#d2a45d]" />
                  <span className="ml-1 text-2xl font-light leading-none">
                  <ChevronRight size={18} strokeWidth={1.4} />
                </span>
                </button>

                {/* CONTACT */}
                <a
                  href="/contact"
                  className="border-b border-[#17384e] pb-0.5 text-[10px] uppercase tracking-wider text-[#17384e]"
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
