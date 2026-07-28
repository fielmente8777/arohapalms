import { Container, Section } from "@/components/sectionComponants";
import AmenityCard from "./cards/AmenityCard";

interface AmenitiesProps {
  data: {
    title: string;
    subtitle: string;
    items: {
      title: string;
    }[];
  };
}

const Amenities = ({ data }: AmenitiesProps) => {
  return (
    <Section>
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl uppercase tracking-wide text-blue">
            {data.title}
          </h2>

          <div className="mx-auto h-px max-w-90 w-full bg-blue" />

          <p className="mx-auto mt-8 max-w-2xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-5xl w-full mx-auto mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <AmenityCard key={index} title={item.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Amenities;
