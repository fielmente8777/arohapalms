interface IntroProps {
  title: string;
  description: string[];
}

const Intro = ({ title, description }: IntroProps) => {
  return (
    <section className="max_width py-24">
      <div className="max-w-4xl ">
        <h1 className=" text-2xl md:text-5xl text-dark mb-4">{title}</h1>
        <div className="max-w-4xl mb-4 h-px bg-dark text-dark" />
        {description.map((item) => (
          <p
            key={item}
            className="text-sm md:text-base text-dark leading-7 mb-4"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Intro;
