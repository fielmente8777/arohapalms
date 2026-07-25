interface OurVillasProps {
  title: string;
  description: string[];
  card: {
    title: string;
    description: string;
  };
}

const OurVillas = ({
  title,
  description,
  card,
}: OurVillasProps) => {
  return (
    <section className="bg-white">
      <div className="max_width">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[56px] text-blue mb-10">
            {title}
          </h2>

          <div className="space-y-10">
            {description.map((item, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-[#233A63]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mt-20 border-2 border-blue min-h-[320px] flex items-center justify-end px-12">
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[535px] aspect-[2/1] bg-blue rounded-[14px] text-white flex items-center px-12">
            <h3 className="text-[40px] leading-[1.25]">
              {card.title}
            </h3>
          </div>

          <div className="max-w-[500px]">
            <p className="text-lg leading-9 text-[#233A63]">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVillas;