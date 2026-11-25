"use client";

import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const container = useRef<HTMLDivElement>(null);
  const progress = useTransform(
    useScroll({ container: container }),
    [0, 1],
    [0, 1]
  );

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    el.style.overflow = "hidden";
    el.style.position = "fixed";
    el.style.top = 0;
    el.style.left = 0;
    el.style.width = "100%";
    el.style.height = "3px";
    el.style.zIndex = "9999";
    el.style.pointerEvents = "none";
    el.style.background = "linear-gradient(90deg, transparent, #ff2a6d)";
  }, []);

  return <div ref={container} className="progress-bar" />;
}
