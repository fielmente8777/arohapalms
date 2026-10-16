import { Section } from "@/components/sectionComponants";

interface ActivityProps {
  data: {
    image: string;
    title: string;
    activities: string[];
  };
}

const Activity = ({ data }: ActivityProps) => {
  return (
    <Section
      className="relative flex min-h-140 items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-p2">
        <h2 className="font-serif text-2xl leading-tight md:text-3xl lg:text-4xl">
          {data.title}
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-lg md:text-xl">
          {data.activities.map((activity) => (
            <div key={activity} className="flex items-center gap-2 text-blue">
              <span>•</span>
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Activity;
