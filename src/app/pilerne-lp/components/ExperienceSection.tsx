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
    description?: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
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
