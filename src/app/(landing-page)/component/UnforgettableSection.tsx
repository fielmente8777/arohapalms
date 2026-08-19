import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import GallerySlider from "./Slider/GallerySlider";
import LinkButton from "@/components/buttons/LinkButton";

interface UnforgettableSectionProps {
  tag?: string;
  title: string;
  description: string[];
  images: string[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const UnforgettableSection: React.FC<UnforgettableSectionProps> = ({
  tag,
  title,
  description,
  images,
  buttons,
}) => {
  return (
    <SectionWithContainer containerClassName="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-3">
        <Image src="/Group.png" width={62.54} height={62.54} alt="Image" />
        {tag && (
          <p className="text-primary text-center font-semibold tracking-[0.2em] text-xs md:text-lg uppercase mt-1">
            {tag}
          </p>
        )}
        <SectionHeading title={title} wrapperClassName="max-w-3xl mx-auto" textCenter />
        <p className="text-secondary text-center lg:text-lg max-w-5xl mx-auto mt-2">
          {description[0]}
        </p>
      </div>
      <GallerySlider images={images} />
      <div className="flex flex-col items-center gap-4 text-center max-w-5xl mx-auto">
        <p className="text-secondary text-center lg:text-lg leading-relaxed">
          {description[1]}
        </p>
        {description[2] && <p className="text-gray-700 font-semibold text-base md:text-lg tracking-wide mt-1">
          {/* Relax, Rejuvenate, Revive. */}
          {description[2]}
        </p>}
        <ul className="mx-auto mt-1">
          {buttons.map((button, index) => (
            <li key={index}>
              <LinkButton
                href={button.link}
                label={button.label}
                whatsAppIcon={false}
                calendarIcon={true}
                className="rounded-lg text-white bg-primary border-none w-full justify-center uppercase px-6 py-3 shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default UnforgettableSection;
