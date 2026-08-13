import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import { SectionHeading } from "@/components/typography";
import Section from "../../../components/sectionComponants/Section";
import AccommodationCardsSection from "./AccommodationCardsSection";
import { Container } from "@/components/sectionComponants";

const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  cards,
  note,
}) => {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:gap-10">
        <AccommodationCardsSection cards={cards} note={note} />
      </div>
    </Section>
  );
};

export default AccommodationSection;
