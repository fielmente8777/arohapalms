import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import { SectionHeading } from "@/components/typography";
import Section from "../../../components/sectionComponants/Section";
import AccommodationCardsSection from "./AccommodationCardsSection";
import { Container } from "@/components/sectionComponants";

const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  tagline,
  title,
  description,
  cards,
  note,
}) => {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:gap-10">
        {(tagline || title || description) && (
          <div className="flex flex-col items-center gap-2 text-center max-w-4xl mx-auto">
            {tagline && (
              <p className="text-primary text-center font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
                {tagline}
              </p>
            )}
            {title && (
              <SectionHeading
                title={title}
                textCenter
                wrapperClassName="max-w-3xl mx-auto"
              />
            )}
            <span className="w-12 h-[2px] bg-primary/60 mx-auto my-1 rounded-full"></span>
            {description && (
              <p className="text-secondary text-center lg:text-lg max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <AccommodationCardsSection cards={cards} note={note} />
      </div>
    </Section>
  );
};

export default AccommodationSection;
