import {
  Bed,
  Waves,
  Wifi,
  Star,
  UtensilsCrossed,
  MapPin,
  Users,
  ShieldCheck,
  Lock,
} from "lucide-react";

export const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  bed: Bed,
  pool: Waves,
  wifi: Wifi,
  star: Star,
  kitchen: UtensilsCrossed,
  pin: MapPin,
  users: Users,
  shield: ShieldCheck,
  lock: Lock,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICONS[name] ?? Star;
  return <Comp className={className} />;
}