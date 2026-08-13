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
        <Container>
          <div className="space-y-2 text-center ">
            <p className="text-sm text-primary uppercase tracking-widest">
              {tagline}
            </p>
            <SectionHeading title={title} />
            <p className="text-secondary lg:px-36 lg:text-lg max-w-5xl mx-auto">
              {description}
            </p>
          </div>
        </Container>
        <AccommodationCardsSection cards={cards} note={note} />
      </div>
    </Section>
  );
};

export default AccommodationSection;
