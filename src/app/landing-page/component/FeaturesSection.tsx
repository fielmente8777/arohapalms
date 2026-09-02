import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { JSX } from "react/jsx-runtime";

export interface FeaturesSectionProps {
  tagline: string;
  title: string;
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  tagline,
  title,
  features,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background-2">
      <div className="flex flex-col gap-10">
        <div className="space-y-2">
          <p className="text-sm text-primary uppercase tracking-widest">
            {tagline}
          </p>
          <SectionHeading title={title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeaturesSectionCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FeaturesSection;

export const FeaturesSectionCard: React.FC<
  FeaturesSectionProps["features"][0]
> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl border border-primary p-8.5">
      <div className="bg-background-2 w-12 h-12 rounded-full flex items-center justify-center text-p2">{icon}</div>
      <h3 className="text-xl font-semibold text-p2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
