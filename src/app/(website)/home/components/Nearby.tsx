import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";

interface Activity {
  image: string;
  title: string;
  description: string;
}

interface NearbyActivitiesProps {
  tag: string;
  title: string;
  activities: Activity[];
}

const NearbyActivities = ({
  tag,
  title,
  activities,
}: NearbyActivitiesProps) => {
  return (
    <SectionWithContainer sectionClassName="w-full bg-navy text-white px-6 md:px-0">
      {/* HEADING */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase text-white/80 md:text-lg">{tag}</p>
        <div className="relative mt-2 mb-4 h-[9px] w-[190px] overflow-hidden">
          <Image
            src="/home/design5.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
        <h2 className="mt-2 font-primary text-2xl font-light md:text-5xl">
          {title}
        </h2>
      </div>

      {/* ACTIVITIES */}
      <div className="mx-auto mt-12 grid grid-cols-1 md:max-w-[1272px] md:grid-cols-[368px_536px_368px] items-start gap-6 md:gap-5">
        {activities.map((activity, index) => {
          const isCenter = index === 1;

          return (
            <div
              key={`${activity.title}-${index}`}
              className={`
          flex flex-col items-center text-center
          ${isCenter ? "-mt-8" : ""}
        `}
            >
              {/* IMAGE + ARCH */}
              <div className="relative flex w-full flex-col items-center">
                <div
                  className={`
              relative w-full overflow-hidden rounded-lg
              ${isCenter ? "aspect-[4/5]  md:aspect-[536/692]" : "aspect-[4/5]  md:aspect-[368/548]"}
            `}
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                  {/* ARCH BORDER */}
                  {/* <div
                    className="
                absolute inset-4
                rounded-t-[160px]
                border-x border-white/70
              "
                  /> */}
                </div>

                {/* TITLE */}
                <div
                  className="
              px-3 py-3
            "
                >
                  <p className="text-[10px] uppercase text-white/90 md:text-base">
                    {activity.title}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="py-4 max-w-[260px] text-xs text-white/75 md:text-lg">
                {activity.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWithContainer>
  );
};

export default NearbyActivities;
