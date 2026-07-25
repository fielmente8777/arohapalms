import Image from "next/image";

interface AboutSectionProps {
  title: string;
  logo: string;
  sectionTitle: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
}

const AboutSection = ({
  title,
  logo,
  sectionTitle,
  description,
  details,
}: AboutSectionProps) => {
  return (
    <section className="bg-white py-24">
      <div className="max_width text-center">
        <h1 className="text-[68px] leading-[1.08] mx-auto max-w-[900px] text-blue mb-20">
          {title}
        </h1>

        <div className="relative flex justify-center mb-8">
          <Image
            src={logo}
            alt={sectionTitle}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        <h2 className="text-[56px] leading-none items-center text-blue mb-12">
          {sectionTitle}
        </h2>

        <p className="max-w-[760px] mx-auto text-xl leading-9 text-[#444] mb-12">
          {description}
        </p>

        <div className="max-w-[760px] mx-auto text-left space-y-4 text-lg leading-9 text-[#444]">
          {details.map((item) => (
            <p key={item.label}>
              <span className="font-medium">{item.label}:</span> {item.value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
