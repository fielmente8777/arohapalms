import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import ExperienceSlider from "./Slider/ExperienceSlider";
import LinkButton from "@/components/buttons/LinkButton";

export interface ExperienceSectionProps {
  tagline: string;
  title: string;
  experiences: {
    title: string;
    image: string;
    description: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  tagline,
  title,
  experiences,
  buttons
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-10">
        <div className="space-y-2 text-center">
          <p className="text-sm text-primary uppercase tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} textCenter />
        </div>
        <ExperienceSlider cards={experiences} />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((feature, index) => (
            <ExperienceSectionCard key={index} {...feature} />
          ))}
        </div> */}
        <ul className="flex flex-wrap gap-4 justify-center">
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
      </div>
    </SectionWithContainer>
  );
};

export default ExperienceSection;

export const ExperienceSectionCard: React.FC<
  ExperienceSectionProps["experiences"][0]
> = ({ title, image, description }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden md:aspect-4/2.25 aspect-4/2.75">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 text-white flex flex-col justify-end gap-3 md:p-8 p-4">
        <h3 className="lg:text-3xl text-2xl">{title}</h3>
        <p className="lg:text-lg text-sm">{description}</p>
      </div>
    </div>
  );
};
