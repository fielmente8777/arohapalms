import { SectionWithContainer } from "@/components/sectionComponants";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

const AboutSection = ({ title, description, button }: AboutSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="w-full bg-background-2 ">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        {/* TITLE */}
        <h2
          className="mb-4
            font-primary
            md:text-[72px]
            font-light
            text-p2
            text-3xl
          "
        >
          {title}
        </h2>

        <div className=" relative w-[304px] aspect-[34/1]">
          <Image
            src="/images/design.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <p
          className="mt-6
            max-w-[700px]
            text-sm
            font-normal
            text-[#777777]
            md:text-[20px]
          "
        >
          {description}
        </p>

        <Link
          href={button.href}
          className="
            group
            mt-7
            inline-flex
            items-center
            gap-2
            border-b
            border-p2
            pb-1
            text-[14px]
            font-medium
            uppercase
            text-p2
            transition-opacity
            hover:opacity-70
          "
        >
          {button.label}
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
