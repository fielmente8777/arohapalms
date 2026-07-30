import { SectionWithContainer } from "@/components/sectionComponants";
import {
  MapPin,
  Plane,
  Train,
  Car,
  KeyRound,
  Phone,
} from "lucide-react";

interface Section {
  title: React.ReactNode;
  icon?: "map" | "plane" | "train" | "car" | "key" | "phone";
  content?: React.ReactNode;
  points?: React.ReactNode[];
  ordered?: boolean;
}

interface GuestArrivalProps {
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
    <SectionWithContainer sectionClassName="py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6">

        {/* Hero */}
        <header className="text-center">
          <h1 className="font-serif text-[3rem] font-normal leading-none tracking-tight text-blue md:text-[4.8rem]">
            {title}
          </h1>

          <div className="mx-auto mt-8 max-w-4xl text-[20px] font-semibold leading-9 text-blue">
            {introduction}
          </div>
        </header>

        {/* Sections */}
        <div className="mt-24 space-y-24">
          {sections.map((section, index) => (
            <section key={index} className="text-center">

              {/* Heading */}
              <div className="mb-10 flex items-center justify-center gap-3">
                {section.icon && (
                  <span className="text-[#B77D54]">
                    {icons[section.icon]}
                  </span>
                )}

                <h2 className="font-serif text-[2.8rem] font-semibold text-blue">
                  {section.title}
                </h2>
              </div>

              {/* Paragraph */}
              {section.content && (
                <div className="mx-auto mb-8 max-w-3xl text-[20px] leading-10 text-blue">
                  {section.content}
                </div>
              )}

              {/* Ordered List */}
              {section.ordered && section.points && (
                <ol className="mx-auto max-w-4xl list-decimal space-y-8 pl-8 text-left text-[20px] leading-10 text-blue marker:font-semibold marker:text-blue">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
              )}

              {/* Bullet List */}
              {!section.ordered && section.points && (
                <ul className="mx-auto max-w-4xl list-disc space-y-8 pl-8 text-left text-[20px] leading-10 text-blue marker:text-blue">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Closing Message */}
        <footer className="mt-28 text-center">
          <h3 className="text-[2.5rem] font-semibold text-blue">
            {closingNote}
          </h3>
        </footer>

      </div>
    </SectionWithContainer>
  );
}