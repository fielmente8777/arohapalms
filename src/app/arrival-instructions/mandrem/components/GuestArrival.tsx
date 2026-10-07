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
    <SectionWithContainer defaultPadding={false} sectionClassName="py-8 md:py-12">
      <div className="mx-auto max-w-[900px]">

        {/* Hero */}
        <header className="text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight tracking-tight text-blue">
            {title}
          </h1>

          <div className="mx-auto mt-4 md:mt-6 max-w-3xl text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
            {introduction}
          </div>
        </header>

        {/* Sections */}
        <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="text-center">

              {/* Heading */}
              <div className="mb-4 md:mb-6 flex items-center justify-center gap-2 md:gap-2.5">
                {section.icon && (
                  <span className="text-[#B77D54] shrink-0 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    {icons[section.icon]}
                  </span>
                )}

                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-blue">
                  {section.title}
                </h2>
              </div>

              {/* Paragraph */}
              {section.content && (
                <div className="mx-auto mb-4 md:mb-6 max-w-3xl text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
                  {section.content}
                </div>
              )}

              {/* Ordered List */}
              {section.ordered && section.points && (
                <ol className="mx-auto max-w-3xl list-decimal space-y-2 md:space-y-3 pl-5 sm:pl-6 text-left text-sm sm:text-base font-light leading-relaxed text-[#5A5856] marker:font-medium marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
              )}

              {/* Bullet List */}
              {!section.ordered && section.points && (
                <ul className="mx-auto max-w-3xl list-disc space-y-2 md:space-y-3 pl-5 sm:pl-6 text-left text-sm sm:text-base font-light leading-relaxed text-[#5A5856] marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Closing Message */}
        <footer className="mt-8 md:mt-12 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-light text-blue">
            {closingNote}
          </h3>
        </footer>

      </div>
    </SectionWithContainer>
  );
}