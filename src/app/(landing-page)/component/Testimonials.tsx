import { TestimonialsProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import TestimonialsSlider from "./Slider/TestimonialsSlider";

const Testimonials: React.FC<TestimonialsProps> = ({
  tagline,
  title,
  reviews,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background-dark">
      <div className="flex flex-col gap-10">
        <div className="space-y-2">
          <p className="text-sm text-primary uppercase tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} titleColor="white" />
        </div>
        <TestimonialsSlider reviews={reviews} />
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
