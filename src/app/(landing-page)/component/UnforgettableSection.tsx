import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import GallerySlider from "./Slider/GallerySlider";
import LinkButton from "@/components/buttons/LinkButton";

interface UnforgettableSectionProps {
  title: string;
  description: string;
  images: string[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const UnforgettableSection: React.FC<UnforgettableSectionProps> = ({
  title,
  description,
  images,
  buttons,
}) => {
  return (
    <SectionWithContainer containerClassName="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <Image src="/Group.png" width={62.54} height={62.54} alt="Image" />
        <SectionHeading title={title} wrapperClassName="max-w-5xl" textCenter />
      </div>
      <GallerySlider images={images} />
      <p className="text-secondary text-center lg:text-lg max-w-7xl mx-auto">
        {description}
      </p>
      <ul className="flex flex-wrap gap-4 justify-center ">
        {buttons.map((button, index) => (
          <li key={index}>
            <LinkButton
              href={button.link}
              label={button.label}
              whatsAppIcon={index === 0}
              calendarIcon={index === 1}
              className="rounded-sm text-white bg-primary border-none"
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default UnforgettableSection;
