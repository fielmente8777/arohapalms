interface ContactHeroProps {
  title: string;
}

const ContactHero = ({ title }: ContactHeroProps) => {
  return (
    <section className="max_width py-14">
      <h1 className="text-dark text-5xl text-center">{title}</h1>
    </section>
  );
};

export default ContactHero;