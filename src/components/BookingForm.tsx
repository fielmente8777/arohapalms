"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FillCalenderIcon,
  FillLocation,
  FillUserIcon,
  GuestIcon,
} from "./BookingFormIcons";

const locations = [
  {
    name: "Mandrem",
    slug: "mandrem",
  },
  {
    name: "Pilerne",
    slug: "pilerne",
  },
];

const villasByLocation = {
  mandrem: [
    { name: "Villa Magnifica", slug: "villa-magnifica", location: "mandrem" },
    { name: "Villa Paradiso", slug: "villa-paradiso", location: "mandrem" },
    { name: "Villa Serenity", slug: "villa-serenity", location: "mandrem" },
    { name: "Villa Caia", slug: "villa-caia", location: "mandrem" },
    { name: "Villa Prana", slug: "villa-prana", location: "mandrem" },
    { name: "Villa Encanto", slug: "villa-encanto", location: "mandrem" },
    { name: "Villa Marisol", slug: "villa-marisol", location: "mandrem" },
    { name: "Suite De Onyx", slug: "suite-de-onyx", location: "mandrem" },
    { name: "Suite De Lumina", slug: "suite-de-lumina", location: "mandrem" },
    { name: "Suite De Emerald", slug: "suite-de-emerald", location: "mandrem" },
    { name: "Suite De Platinum", slug: "suite-de-platinum", location: "mandrem" },
    { name: "Suite De Prestige", slug: "suite-de-prestige", location: "mandrem" },
    { name: "Suite De Regal", slug: "suite-de-regal", location: "mandrem" },
  ],
  pilerne: [
    { name: "Villa Majestic", slug: "villa-majestic", location: "pilerne" },
    { name: "Villa Grande", slug: "villa-grande", location: "pilerne" },
    { name: "Villa Grande & Majestic", slug: "villa-grande-and-majestic", location: "pilerne" },
  ],
};

type VillaType = {
  name: string;
  slug: string;
  location: string;
};

export default function BookingForm() {
  const [location, setLocation] = useState<(typeof locations)[number] | null>(
    null
  );
  const [villa, setVilla] = useState<VillaType | null>(null);
  const [locationOpen, setLocationOpen] = useState(false);
  const [villaOpen, setVillaOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [villaSearch, setVillaSearch] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const locationRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);
  const villaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target as Node)
      ) {
        setLocationOpen(false);
      }

      if (villaRef.current && !villaRef.current.contains(e.target as Node)) {
        setVillaOpen(false);
      }

      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setGuestOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filteredLocations = useMemo(
    () =>
      locations.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const availableVillas = useMemo(() => {
    if (!location) {
      return [...villasByLocation.mandrem, ...villasByLocation.pilerne];
    }
    return (
      villasByLocation[location.slug as keyof typeof villasByLocation] || []
    );
  }, [location]);

  const filteredVillas = useMemo(() => {
    return availableVillas.filter((v) =>
      v.name.toLowerCase().includes(villaSearch.toLowerCase())
    );
  }, [availableVillas, villaSearch]);

  const handleSelectLocation = (item: (typeof locations)[number]) => {
    setLocation(item);
    setLocationOpen(false);
    if (villa && villa.location !== item.slug) {
      setVilla(null);
    }
  };

  const handleSelectVilla = (item: VillaType) => {
    setVilla(item);
    setVillaOpen(false);
    if (!location) {
      const loc = locations.find((l) => l.slug === item.location);
      if (loc) setLocation(loc);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const formatDisplay = (d: Date | null) =>
    d
      ? d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";

  const dateLabel =
    startDate || endDate
      ? `${formatDisplay(startDate)} – ${formatDisplay(endDate)}`
      : "Select Dates";

  const guestLabel = `${adults} Adult${adults !== 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""}`;

  const handleSearch = () => {
    const locSlug = location?.slug || (villa?.location || "mandrem");
    window.open(
      `https://letsbook.me/booking/${locSlug}?checkin=${formatDate(startDate)}&checkout=${formatDate(endDate)}&adults=${adults}&children=${children}`,
      "_blank"
    );
  };

  // Shared field styles
  const fieldCls =
    "relative flex items-center gap-2.5 px-5 h-14 border-r-0 border-y-[0.5px] not-first:border-l-0 border-l not-last:border-r border-white/20 cursor-pointer hover:bg-white/5 transition-colors";
  const labelCls = "text-white tracking-wide whitespace-nowrap";

  return (
    <div className="w-full">
      {/* Bar */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] items-center bg-white/20 backdrop-blur-sm">
        {/* Location */}
        <div
          ref={locationRef}
          className={fieldCls}
          onClick={() => setLocationOpen((o) => !o)}
        >
          <FillLocation />
          <span className={labelCls}>
            {location?.name || "Select Location"}
          </span>

          {locationOpen && (
            <div className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background shadow-xl overflow-hidden">
              <input
                className="w-full bg-transparent px-4 py-2.5 text-sm outline-none border-b"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              {filteredLocations.map((item) => (
                <button
                  type="button"
                  key={item.slug}
                  onClick={() => handleSelectLocation(item)}
                  className="block w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Villa */}
        <div
          ref={villaRef}
          className={fieldCls}
          onClick={() => setVillaOpen((o) => !o)}
        >
          <FillUserIcon />
          <span className={labelCls}>{villa?.name || "Select Villa"}</span>

          {villaOpen && (
            <div className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background shadow-xl overflow-hidden">
              <input
                className="w-full bg-transparent px-4 py-2.5 text-sm outline-none border-b"
                placeholder="Search Villa..."
                value={villaSearch}
                onChange={(e) => setVillaSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="max-h-60 overflow-y-auto">
                {filteredVillas.length === 0 ? (
                  <p className="px-4 py-3 text-xs text-white/50 text-center">
                    No properties found
                  </p>
                ) : (
                  filteredVillas.map((item) => (
                    <button
                      type="button"
                      key={item.slug}
                      onClick={() => handleSelectVilla(item)}
                      className="block w-full px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {!location && (
                          <span className="text-[10px] uppercase tracking-wider text-white/50">
                            {item.location}
                          </span>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        {/* Guests */}
        <div
          ref={guestRef}
          className={fieldCls}
          onClick={() => setGuestOpen((o) => !o)}
        >
          <GuestIcon />
          <span className={labelCls}>
            {adults || children ? guestLabel : "Select Guests"}
          </span>

          {guestOpen && (
            <div
              className="absolute left-0 top-full z-50 mt-0.5 w-64 rounded-b-md bg-background p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GuestRow
                label="Adults"
                value={adults}
                min={1}
                onChange={setAdults}
              />
              <GuestRow
                label="Children"
                value={children}
                min={0}
                onChange={setChildren}
              />
            </div>
          )}
        </div>

        {/* Dates */}
        <div
          className={fieldCls}
          style={{ borderRight: "0.5px solid rgba(255,255,255,0.15)" }}
        >
          <FillCalenderIcon />
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              setStartDate(dates[0]);
              setEndDate(dates[1]);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={today}
            placeholderText="Select Dates"
            dateFormat="MMM d, yyyy"
            className="w-full bg-transparent placeholder:text-white text-white outline-none cursor-pointer"
            wrapperClassName="w-full"
          />
        </div>

        {/* CTA */}
        <button
          onClick={handleSearch}
          className="h-14 px-7 bg-p2 text-white text-[13px] font-medium tracking-widest uppercase hover:bg-[#734937] transition-colors whitespace-nowrap"
        >
          Find a Room
        </button>
      </div>
    </div>
  );
}

function GuestRow({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-3 last:mb-0">
      <span className="text-sm ">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && onChange(value - 1)}
          className="w-7 h-7 rounded-full border  hover:bg-white/10  transition flex items-center justify-center text-base leading-none"
        >
          −
        </button>
        <span className="w-4 text-center  text-sm">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-full border   hover:bg-white/10  transition flex items-center justify-center text-base leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}
