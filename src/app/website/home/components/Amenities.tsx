import Image from "next/image";

interface AmenitiesProps {
  title: string;
  amenities: {
    icon: string;
    title: string;
  }[];
}

const Amenities = ({ title, amenities }: AmenitiesProps) => {
  return (
    <section>
      <div className="max_width">
        <h2>{title}</h2>

        <div>
          {amenities.map((item) => (
            <div key={item.title}>
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
              />

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;