import Image from "next/image";

interface ConfidenceProps {
  title: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];

  gallery: string[];
}

const Confidence = ({ title, features, gallery }: ConfidenceProps) => {
  return (
    <section className="bg-white py-28">
      <div className="max_width">
        <h2 className="text-center text-[60px] text-blue mb-20">{title}</h2>

        <div className="grid grid-cols-4 gap-12 mb-24">
          {features.map((item) => (
            <div key={item.title} className="text-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto mb-8"
              />

              <h3 className="text-xl text-blue mb-6">{item.title}</h3>

              <p className=" text-xl text-[#005b96] leading-9">{item.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3]"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-4/3 overflow-hidden"
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Confidence;
