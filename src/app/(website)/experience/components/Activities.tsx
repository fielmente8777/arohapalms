

import { Section } from "@/components/sectionComponants";

import GallerySlider from "../../home/components/slider/Slider";

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
}

const Activities = ({ title, slides }: ActivitiesProps) => {
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
    </Section>
  );
};

export default Activities;
