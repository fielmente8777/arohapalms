import { SectionWithContainer } from "@/components/sectionComponants";

interface StayIntroProps {
  title: string;
  description: string[];
}

const StayIntro = ({ title, description }: StayIntroProps) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-light text-blue mb-4 leading-tight">
        {title}
      </h1>
      <div className="w-full max-w-[200px] my-4 h-px bg-blue" />

      <div className="space-y-3 text-sm sm:text-base font-light text-dark leading-relaxed">
        {description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default StayIntro;
