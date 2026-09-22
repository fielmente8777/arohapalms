interface AboutTogetherProps {
  title: string;
  description: string;
}

const AboutTogether = ({
  title,
  description,
}: AboutTogetherProps) => {
  return (
    <section className="bg-[#fefcf4] py-12 md:py-16">
      <div className="max_width">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">

          <div>
            <h2
              className="
                max-w-[500px]
                text-2xl
                leading-[1.2]
                text-blue
                md:text-[30px]
              "
            >
              {title}
            </h2>
          </div>

          <div>
            <p className="text-sm leading-[1.7] text-gray-600 md:text-[14px]">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTogether;