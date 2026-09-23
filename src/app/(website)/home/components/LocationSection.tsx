import Image from "next/image";
import { Section } from "@/components/sectionComponants";
import { BusIcon, PIcon, TrainIcon } from "@/utils/icons";
import { MapPinIcon } from "lucide-react";

interface LocationItem {
  icon: React.ReactNode;
  title: string;
  distance: string;
}

interface LocationSectionProps {
  tag: string;
  title: string;
  locations: LocationItem[];
  mapImage: string;
}

const LocationSection = ({
  tag,
  title,
  locations,
  mapImage,
}: LocationSectionProps) => {
  return (
    <Section defaultPadding={false} className="relative z-0 w-full bg-navy">
      <div className="grid w-full grid-cols-1  md:grid-cols-[40%_60%]">
        {/* LEFT CONTENT */}
        <div className="relative flex items-start px-6 py-12 ">
          <div className="w-full max-w-[550px]">
            {/* TAG */}
            <p className="text-xs font-medium uppercase text-white md:text-lg">
              {tag}
            </p>

            {/* DECORATIVE IMAGE */}
            <div className="relative mt-1 h-[9px] w-[120px] overflow-hidden">
              <Image
                src="/home/design4.png"
                alt=""
                fill
                className="object-cover object-left"
              />
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-5
                w-full
                font-primary
                text-4xl
                font-light
                text-white
                md:text-5xl
              "
            >
              {title}
            </h2>

            {/* LOCATION ITEMS */}
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
              {locations.map((location, index) => {
                return (
                  <div
                    key={`${location.title}-${index}`}
                    className="flex flex-col gap-2"
                  >
                    {/* ICON + TITLE */}
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 text-golden">
                        {location.icon}
                      </div>

                      <p className="text-xs uppercase tracking-[0.2em] text-white md:text-sm">
                        {location.title}
                      </p>
                    </div>

                    {/* DISTANCE */}
                    <p className="pl-[35px] text-sm text-gray md:text-base">
                      {location.distance}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute right-0 top-0 z-20 h-full w-[15px] rotate-180">
            <Image
              src="/home/design6.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* MAP */}
        <div className="relative h-[350px] overflow-hidden md:h-[615px] px-6 md:px-0">
          <Image
            src={mapImage}
            alt="Location map"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default LocationSection;
