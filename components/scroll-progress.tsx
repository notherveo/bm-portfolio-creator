"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * A thin, cinematic scroll-progress bar pinned to the top of the viewport.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-transparent via-[#ff2a6d] to-[#ff2a6d]"
    />
  );
}
