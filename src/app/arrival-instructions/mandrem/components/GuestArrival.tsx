import { SectionWithContainer } from "@/components/sectionComponants";
import {
  MapPin,
  Plane,
  Train,
  Car,
  KeyRound,
  Phone,
} from "lucide-react";

export interface Section {
  title: React.ReactNode;
  icon?: "map" | "plane" | "train" | "car" | "key" | "phone";
  content?: React.ReactNode;
  points?: React.ReactNode[];
  ordered?: boolean;
}

export interface GuestArrivalProps {
  title: React.ReactNode;
  introduction: React.ReactNode;
  sections: Section[];
  closingNote: React.ReactNode;
}

const icons = {
  map: <MapPin className="h-9 w-9" />,
  plane: <Plane className="h-8 w-8" />,
  train: <Train className="h-8 w-8" />,
  car: <Car className="h-8 w-8" />,
  key: <KeyRound className="h-9 w-9" />,
  phone: <Phone className="h-8 w-8" />,
};

export default function GuestArrival({
  title,
  introduction,
  sections,
  closingNote,
}: GuestArrivalProps) {
  return (
    <SectionWithContainer sectionClassName="pt-4 pb-10 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-0 md:px-8">

        {/* Hero */}
        <header className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[4.8rem] font-normal leading-tight md:leading-none tracking-tight text-blue">
            {title}
          </h1>

          <div className="mx-auto mt-6 md:mt-8 max-w-4xl text-base sm:text-lg md:text-[20px] font-normal md:font-semibold leading-relaxed md:leading-9 text-blue">
            {introduction}
          </div>
        </header>

        {/* Sections */}
        <div className="mt-12 md:mt-24 space-y-12 md:space-y-24">
          {sections.map((section, index) => (
            <section key={index} className="text-center">

              {/* Heading */}
              <div className="mb-6 md:mb-10 flex items-center justify-center gap-2.5 md:gap-3">
                {section.icon && (
                  <span className="text-[#B77D54] shrink-0 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                    {icons[section.icon]}
                  </span>
                )}

                <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.8rem] font-semibold text-blue">
                  {section.title}
                </h2>
              </div>

              {/* Paragraph */}
              {section.content && (
                <div className="mx-auto mb-6 md:mb-8 max-w-3xl text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-10 text-blue">
                  {section.content}
                </div>
              )}

              {/* Ordered List */}
              {section.ordered && section.points && (
                <ol className="mx-auto max-w-4xl list-decimal space-y-4 md:space-y-8 pl-4 md:pl-8 text-left text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-10 text-blue marker:font-semibold marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
              )}

              {/* Bullet List */}
              {!section.ordered && section.points && (
                <ul className="mx-auto max-w-4xl list-disc space-y-4 md:space-y-8 pl-4 md:pl-8 text-left text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-10 text-blue marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Closing Message */}
        <footer className="mt-14 md:mt-28 text-center">
          <h3 className="text-xl sm:text-2xl md:text-[2.5rem] font-semibold text-blue">
            {closingNote}
          </h3>
        </footer>

      </div>
    </SectionWithContainer>
  );
}