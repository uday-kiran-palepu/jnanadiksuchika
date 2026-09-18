"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const CompassAnimation = dynamic(() => import("@/components/CompassAnimation"), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full min-h-[280px]" />,
});

export function LazyCompass() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduceMotion) {
    return (
      <div
        className="h-full w-full min-h-[280px] rounded-2xl bs-grid-bg flex items-center justify-center"
        aria-hidden
      >
        <div className="relative h-40 w-40 rounded-full border-2 border-[var(--bs-accent)]/40 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full border border-[var(--bs-warm)]/50" />
          <div className="h-2 w-24 rotate-45 rounded-full bg-gradient-to-r from-[var(--bs-warm)] to-[var(--bs-accent)]" />
        </div>
      </div>
    );
  }

  return <CompassAnimation />;
}
