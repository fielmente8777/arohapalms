import { LazyLoadedVideo } from "@/components/Video";

interface ExperienceProps {
  title: string;
  description: string[];
  video: string;
  highlights: string[];
}

const Experience = ({
  video,
  title,
  description,
  highlights,
}: ExperienceProps) => {
  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <div className="absolute inset-0">
        <LazyLoadedVideo src={video} />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max_width text-center text-white">
          <h2 className="md:text-5xl uppercase">{title}</h2>

          <p className="mx-auto mt-8 max-w-8xl text-lg leading-9">
            {description}
          </p>

          <div className="mt-16 grid grid-cols-2 md:flex flex-wrap justify-center gap-x-12 gap-y-4">
            {highlights.map((item) => (
              <span key={item} className="text-lg">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
