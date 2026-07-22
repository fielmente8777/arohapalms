import Image from "next/image";

interface ApproachProps {
  title: string;
  description: string;

  sections: {
    title: string;
    icon: string;

    routes: {
      distance: string;
      duration: string;
      location: string;
    }[];
  }[];

  footer: {
    text: string;
    gst: string;
  };
}

const Approach = ({
  title,
  description,
  sections,
  footer,
}: ApproachProps) => {
  return (
    <section className="max_width">
      <h2>{title}</h2>

      <p>{description}</p>

      {sections.map((section) => (
        <div key={section.title}>
          <Image
            src={section.icon}
            alt={section.title}
            width={40}
            height={40}
          />

          <h3>{section.title}</h3>

          <div>
            {section.routes.map((route) => (
              <div key={route.location}>
                <h4>{route.distance}</h4>

                <span>{route.duration}</span>

                <p>{route.location}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <p>{footer.text}</p>

        <p>{footer.gst}</p>
      </div>
    </section>
  );
};

export default Approach;