import { SectionWithContainer } from "@/components/sectionComponants";

interface StayIntroProps {
  title: string;
  description: string[];
}

const StayIntro = ({ title, description }: StayIntroProps) => {
  return (
    <SectionWithContainer sectionClassName="">
      <h1 className="text-4xl font-normal! text-blue mb-4">{title}</h1>
      <div className=" w-200 mt-10! mb-4 h-px bg-blue text-blue" />

      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </SectionWithContainer>
  );
};

export default StayIntro;
