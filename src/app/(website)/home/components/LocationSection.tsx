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
    <Section
      defaultPadding={false}
      className="relative z-0 w-full bg-background-2 p-0"
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 py-16">
          <div className="w-full max-w-[500px]">
            {/* TAG */}
            <p className="text-xs font-medium uppercase text-p2 md:text-lg">
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
                max-w-[560px]
                font-primary
                text-4xl
                font-light
                text-p3
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
                      <div className="shrink-0 text-p2">{location.icon}</div>

                      <p className="text-xs uppercase tracking-[0.2em] text-gray md:text-sm">
                        {location.title}
                      </p>
                    </div>

                    {/* DISTANCE */}
                    <p className="pl-[30px] text-sm text-gray md:text-base">
                      {location.distance}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="relative min-h-[350px] overflow-hidden md:min-h-[580px] px-6 md:px-0">
          <Image
            src={mapImage}
            alt="Location map"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* AIRPORT */}
          <div className="absolute left-[23%] top-[8%] z-10">
            <div className="relative">
              <div className="flex items-center gap-2 rounded-[12px] bg-p2 px-4 py-2 text-white">
                <PIcon />

                <span className="text-[10px] uppercase tracking-[0.25em] md:text-sm">
                  Airport
                </span>
              </div>

              {/* MAP PIN */}
              <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 text-[#D5AA63]">
                <MapPinIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* AROHA PALMS - PILERNE */}
          <div className="absolute right-[7%] top-[15%] z-10">
            <div className="relative">
              <div className="rounded-[12px] bg-p2 px-4 py-2 text-white">
                <p className="text-[10px] uppercase leading-[1.8] tracking-[0.25em] md:text-sm">
                  AROHA PALMS,
                  <br />
                  PILERNE
                </p>
              </div>

              <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 text-[#D5AA63]">
                <MapPinIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* AROHA PALMS - MANDREM */}
          <div className="absolute left-[3%] top-[49%] z-10">
            <div className="relative">
              <div className="rounded-[12px] bg-p2 px-4 py-2 text-white">
                <p className="text-[10px] uppercase leading-[1.8] tracking-[0.25em] md:text-sm">
                  AROHA PALMS,
                  <br />
                  MANDREM
                </p>
              </div>

              <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 text-[#D5AA63]">
                <MapPinIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* BUS STOP */}
          <div className="absolute right-[14%] top-[45%] z-10">
            <div className="relative">
              <div className="flex items-center gap-2 rounded-[12px] bg-p2 px-4 py-2 text-white">
                <BusIcon />

                <span className="text-[10px] uppercase tracking-[0.25em] md:text-sm">
                  Bus Stop
                </span>
              </div>

              <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 text-[#D5AA63]">
                <MapPinIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* TRAIN STATION */}
          <div className="absolute bottom-[10%] left-[39%] z-10">
            <div className="relative">
              <div className="flex items-center gap-2 rounded-[12px] bg-p2 px-4 py-2 text-white">
                <TrainIcon />

                <span className="text-[10px] uppercase tracking-[0.25em] md:text-sm">
                  Train Station
                </span>
              </div>

              <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 text-[#D5AA63]">
                <MapPinIcon className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* LEFT DECORATIVE DESIGN */}
        <div className="absolute left-[-15px] top-0 z-20 h-full w-[15px]">
  <Image
    src="/home/design3.png"
    alt=""
    fill
    className="object-cover"
  />
</div>
        </div>
      </div>
    </Section>
  );
};

export default LocationSection;
