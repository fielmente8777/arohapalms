import Image from "next/image";
import { ExperienceSectionProps } from "../ExperienceSection";

const ExperienceCard: React.FC<
  ExperienceSectionProps["experiences"][0] & { active: number; index: number }
> = ({ image, title, index, active }) => {
  return (
    <div
      className={`w-full relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ease-in-out ${index === active ? "md:aspect-4/5.5 " : "md:aspect-[4/5.1] md:mt-5!"}`}
    >
      <Image src={image} alt={title} fill className="object-covers" />
      <div className="absolute z-10 inset-2 border border-white rounded-lg"></div>
      <div className="absolute bottom-2 inset-x-2 py-1.5 px-4 bg-black/50 rounded-b-lg">
        <p className="text-center capitalize text-white md:text-lg text-nowrap">{title}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
