"use client";

import { useWebContext } from "@/context-api/WebContext";

export default function MenuButton({ color = "gray" }: { color?: string }) {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();

  return (
    <button
      onClick={() => {
        console.log("clicked");
        console.log(isOpenNavBar);

        setIsOpenNavBar(!isOpenNavBar);
      }}
      className="relative flex h-14 w-14 items-center justify-center"
      aria-label="Menu"
    >
      {/* TOP */}
      <span
        className={`absolute h-0.5 w-8 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "rotate-45" : "-translate-y-2"}`}
      />

      {/* MIDDLE */}
      <span
        className={`absolute h-0.5 w-8 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "opacity-0" : "opacity-100"}`}
      />

      {/* BOTTOM */}
      <span
        className={`absolute h-0.5 w-8 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "-rotate-45" : "translate-y-2"}`}
      />
      <span
        className={`absolute h-0.5 w-8 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "-rotate-45" : "translate-y-2"}`}
      />
    </button>
  );
}
