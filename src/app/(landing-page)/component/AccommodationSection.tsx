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
      <div className="flex flex-col gap-6">
        <div className="space-y-2 text-center lg:px-4 max-w-5xl mx-auto">
          <p className="text-sm text-primary uppercase tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} />
          <p className="text-secondary">{description}</p>
        </div>
        <AccommodationCardsSection cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default AccommodationSection;
