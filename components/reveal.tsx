"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = inView ? "1" : "0";
    el.style.transform = inView ? "translateY(0)" : "translateY(40px)";
  }, [inView]);

  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
