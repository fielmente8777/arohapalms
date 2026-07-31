import { amenities } from "../pageData";
import { Icon } from "../icons";

export default function AmenitiesBar() {
  return (
    <section id="amenities" className="bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {amenities.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-3 border-b border-white/10 px-4 py-8 text-center ${
              i % 4 !== 3 ? "sm:border-r" : ""
            } ${i % 2 === 0 ? "border-r" : ""} sm:border-r sm:border-white/10`}
          >
            <Icon name={item.icon} className="h-6 w-6 text-amber-300" />
            <span className="text-xs font-medium uppercase tracking-wide text-white/80">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}