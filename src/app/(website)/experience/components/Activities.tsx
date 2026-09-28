import { Section } from "@/components/sectionComponants";

import GallerySlider from "../../home/components/slider/Slider";
import Image from "next/image";

interface Activity {
  image: string;
  label: string;
}

interface ActivitiesProps {
  title: {
    prefix: string;
    words: string[];
  };
  slides: Activity[];
  exploreBeyond?: {
    title: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
}

const Activities = ({ title, slides, exploreBeyond }: ActivitiesProps) => {
  return (
    <Section className="bg-background-2">
      {/* HEADING */}
      <div className="mx-auto mb-8 max-w-[650px] text-center md:mb-10">
        <h2
          className="
            font-primary
            text-3xl
            font-light
            text-p2
            md:text-[48px]
          "
        >
          {title.prefix}
          <br />
          {title.words[0]}
        </h2>
      </div>

      {/* SLIDER */}
      <GallerySlider images={slides.map((slide) => slide.image)} />

      {/* GREEK DIVIDER */}
      <div className="mt-10 w-full overflow-hidden rotate-180 md:mt-16">
        <Image
          src="/images/Greek1.png"
          alt=""
          width={1440}
          height={80}
          className="h-auto w-full object-cover"
        />
      </div>


      {exploreBeyond && (
        <div className="mt-10 md:mt-16 ">
          <div className="mx-auto w-full max-w-[1165px] border border-primary">
            <div
              className="
                grid
                grid-cols-1
                items-center
                gap-8
                bg-[#171717]
                px-7
                py-8
                md:grid-cols-2
                md:gap-12
                md:px-8
                md:py-9
              "
            >
              {/* LEFT */}
              <div>
                <h2
                  className="
                    font-primary
                    text-3xl
                    font-light
                     max-w-[350px]
                    text-white
                    md:text-[40px]
                    lg:text-5xl
                  "
                >
                  {exploreBeyond.title}
                </h2>
              </div>

              {/* RIGHT */}
              <div>
                <p
                  className="
                    max-w-[643px]
                    font-primary
                    text-sm
                    font-light
                    
                    text-white
                    md:text-[16px]
                    lg:text-[20px]
                  "
                >
                  {exploreBeyond.description}
                </p>

                <a
                  href={exploreBeyond.cta.href}
                  className="
                    mt-4
                    inline-block
                    font-primary
                    text-[10px]
                    font-medium
                    uppercase
                   lg:text-sm
                    text-white
                    transition-opacity
                    hover:opacity-70
                  "
                >
                  {exploreBeyond.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Activities;
