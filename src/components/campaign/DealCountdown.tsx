"use client";

import { useEffect, useState } from "react";

export default function DealCountdown({ ends }: { ends: string }) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, new Date(ends).getTime() - Date.now()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [ends]);
  if (left === null) return null;
  if (left === 0) return <p className="text-sm text-secondary">This deal has ended. New dates are posted every Monday and Thursday.</p>;
  const d = Math.floor(left / 86400000);
  const h = Math.floor((left % 86400000) / 3600000);
  const m = Math.floor((left % 3600000) / 60000);
  const s = Math.floor((left % 60000) / 1000);
  return (
    <p className="inline-flex items-center gap-2 rounded-sm bg-[#A20000] px-3 py-2 text-sm font-semibold text-white">
      Deal ends in {d}d {h}h {m}m {s}s
    </p>
  );
}
