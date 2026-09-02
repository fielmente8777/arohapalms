interface OurVillasProps {
  title: string;
  description: string[];
  card: {
    title: string;
    description: string;
  };
}

const OurVillas = ({ title, description, card }: OurVillasProps) => {
  return (
    <section className="bg-white">
      <div className="max_width">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[56px] text-blue mb-10">{title}</h2>

          <div className="space-y-10">
            {description.map((item, index) => (
              <p key={index} className="text-lg leading-9 text-[#233A63]">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* <div className="relative mt-20 border-2 border-blue min-h-[320px] flex items-center justify-end px-12">
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
        </div> */}
        <div className="relative mt-16 md:mt-20 border-2 border-blue min-h-[280px] md:min-h-[320px]  md:px-12 pt-24 md:pt-0 flex items-end md:items-center justify-center md:justify-end">
          {/* Blue Card */}
          <div
            className="
      absolute
      -top-16 md:top-1/2
      left-4 md:left-[-80px]
      md:-translate-y-1/2
      w-[calc(100%-2rem)] md:w-[535px]
      bg-blue
      rounded-[14px]
      px-6 py-6 md:px-12 md:py-8
      text-white
    "
          >
            <h3 className="text-[16px] md:text-[40px] leading-tight md:leading-[1.25]">
              {card.title}
            </h3>
          </div>

          {/* Description */}
          <div className="w-full max-w-[250px] md:max-w-[500px]">
            <p className="text-lg md:text-lg leading-7 md:leading-9 text-[#233A63]">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVillas;
