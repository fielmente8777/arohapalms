import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/components/buttons/LinkButton";
import { villaPhotos } from "@/data/villaPhotos";
import type { CampaignVilla } from "@/data/campaigns";

export default function CampaignVillaCard({ v, season }: { v: CampaignVilla; season: string }) {
  const img = villaPhotos[v.slug]?.[0];
  return (
    <article className="relative flex flex-col overflow-hidden rounded-md border border-[#e5e0d6] bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full bg-[#f3efe7]">
        {img && (
          <Image src={img} alt={`${v.name}, ${v.location}`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
        )}
        {v.booked && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#A20000] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Booked
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-wider text-secondary">{v.location}, North Goa</p>
          <h3 className="font-primary text-2xl text-primary">{v.name}</h3>
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-secondary">
          <li>{v.bedrooms}</li>
          <li>{v.size}</li>
          <li>{v.sleeps}</li>
          <li>{v.pools}</li>
          <li className="col-span-2">Two caretakers on site</li>
        </ul>
        <div className="mt-auto space-y-1 border-t border-[#eee] pt-3">
          {v.fromPrice ? (
            <p className="text-lg text-[#222]">
              {season} from <span className="font-semibold">{v.fromPrice}</span>
              <span className="text-sm text-secondary">/night + taxes</span>
            </p>
          ) : (
            <p className="text-lg font-semibold text-[#222]">{season} rates on request</p>
          )}
          {v.minNights && <p className="text-sm text-secondary">Minimum stay: {v.minNights}</p>}
        </div>
        {v.booked ? (
          <p className="rounded-sm bg-[#f3efe7] py-3 text-center text-sm font-medium text-secondary">
            Booked for {season}. See the other villas above.
          </p>
        ) : (
          <LinkButton
            href="#form"
            label="Check availability"
            whatsAppIcon
            villa={v.name}
            className="w-full justify-center rounded-sm border-none bg-primary uppercase text-white"
          />
        )}
        <Link href={v.pageHref} className="text-center text-sm underline text-primary">
          See photos and details
        </Link>
      </div>
    </article>
  );
}
