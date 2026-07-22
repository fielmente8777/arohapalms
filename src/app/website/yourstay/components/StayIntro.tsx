interface StayIntroProps {
  title: string;
  description: string[];
}

const StayIntro = ({ title, description }: StayIntroProps) => {
  return (
    <section className="max_width">
      <h1>{title}</h1>

      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  );
};

export default StayIntro;