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
  content?: React.ReactNode;
  points?: React.ReactNode[];
  extra?: React.ReactNode;
  extraPoints?: React.ReactNode[];
  footer?: React.ReactNode;
  footerPoints?: React.ReactNode[];
  icon?: "map" | "plane" | "train" | "car" | "key" | "phone";
}

interface GuestArrivalProps {
  title: React.ReactNode;
  introduction: React.ReactNode;
  sections: Section[];
  closingNote: React.ReactNode;
}

const icons = {
  map: <MapPin size={32} strokeWidth={1.7} />,
  plane: <Plane size={32} strokeWidth={1.7} />,
  train: <Train size={32} strokeWidth={1.7} />,
  car: <Car size={32} strokeWidth={1.7} />,
  key: <KeyRound size={32} strokeWidth={1.7} />,
  phone: <Phone size={32} strokeWidth={1.7} />,
};

const GuestArrival = ({
  title,
  introduction,
  sections,
  closingNote,
}: GuestArrivalProps) => {
  return (
    <SectionWithContainer sectionClassName="py-24">
      <div className="max-w-[920px] mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h1
            className="
            text-[#0B2D63]
            text-[42px]
            md:text-[58px]
            lg:text-[72px]
            leading-tight
            font-normal
            "
          >
            {title}
          </h1>

          <div className="mt-8 text-[20px] leading-[40px] font-medium text-[#0B2D63]">
            {introduction}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <section key={index}>

              {/* Icon + Heading */}
              <div className="flex flex-col items-center mb-12">

                {section.icon && (
                  <div className="text-[#0B2D63] mb-4">
                    {icons[section.icon]}
                  </div>
                )}

                <h2
                  className="
                  text-[#0B2D63]
                  text-[34px]
                  text-center
                  font-medium
                  "
                >
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <div className="text-center text-[19px] leading-[40px] text-[#333] mb-8">
                  {section.content}
                </div>
              )}

              {section.points && (
                <ul className="max-w-[720px] mx-auto list-disc pl-8 space-y-8 text-[19px] leading-[40px] text-[#333]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <>
                  <div className="mt-10 text-[19px] leading-[40px] text-[#333]">
                    {section.extra}
                  </div>

                  {section.extraPoints && (
                    <ul className="max-w-[720px] mx-auto list-disc pl-8 mt-6 space-y-8 text-[19px] leading-[40px] text-[#333]">
                      {section.extraPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {section.footer && (
                <>
                  <div className="mt-10 text-[19px] leading-[40px] text-[#333]">
                    {section.footer}
                  </div>

                  {section.footerPoints && (
                    <ul className="max-w-[720px] mx-auto list-disc pl-8 mt-6 space-y-8 text-[19px] leading-[40px] text-[#333]">
                      {section.footerPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </section>
          ))}

          {/* Closing */}
          <div className="border-t border-gray-200 pt-12 text-center text-[22px] leading-[42px] text-[#0B2D63]">
            {closingNote}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GuestArrival;