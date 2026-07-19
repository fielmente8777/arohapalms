import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AccommodationCardsSection from "./AccommodationCardsSection";

const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  tagline,
  title,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="space-y-2 text-center ">
          <p className="text-sm text-primary uppercase tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} />
          <p className="text-secondary lg:px-36 lg:text-lg max-w-5xl mx-auto">{description}</p>
        </div>
        <AccommodationCardsSection cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default AccommodationSection;
