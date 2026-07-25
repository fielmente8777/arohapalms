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
  icon?: "map" | "plane" | "train" | "car" | "key" | "phone";
}

interface GuestArrivalProps {
  title: React.ReactNode;
  introduction: React.ReactNode;
  sections: Section[];
  closingNote: React.ReactNode;
}

const icons = {
  map: <MapPin size={30} />,
  plane: <Plane size={30} />,
  train: <Train size={30} />,
  car: <Car size={30} />,
  key: <KeyRound size={30} />,
  phone: <Phone size={30} />,
};

export default function GuestArrival({
  title,
  introduction,
  sections,
  closingNote,
}: GuestArrivalProps) {
  return (
    <SectionWithContainer sectionClassName="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            {title}
          </h1>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {introduction}
          </div>
        </header>

        <div className="space-y-14">
          {sections.map((section, index) => (
            <section
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                {section.icon && (
                  <div className="rounded-full bg-slate-100 p-3 text-slate-700">
                    {icons[section.icon]}
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-slate-900">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <div className="mb-6 text-base leading-8 text-slate-700">
                  {section.content}
                </div>
              )}

              {section.points && (
                <ul className="space-y-4 pl-6 text-base leading-8 text-slate-700 list-disc marker:text-slate-500">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-slate-50 p-8 text-center">
          <div className="text-xl font-semibold text-slate-900">
            {closingNote}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
}