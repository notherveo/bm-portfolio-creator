"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function MenuOverlay() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.position = "fixed";
    el.style.top = 0;
    el.style.left = 0;
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.zIndex = "100";
    el.style.background = "rgba(10, 10, 11, 0.92)";
    el.style.backdropFilter = "blur(12px)";
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
    el.style.transition = reduced ? "none" : "opacity 0.3s ease";
    el.style.opacity = open ? "1" : "0";
    el.style.pointerEvents = open ? "auto" : "none";
    el.style.overflow = "hidden";
    el.style.padding = "4rem";
  }, [open, reduced]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const close = () => {
    setActive(null);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className="menu-overlay"
      onMouseLeave={() => active && close()}
    >
      {links.map((l, i) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={close}
          onMouseEnter={() => setActive(l.label)}
          className="menu-link"
        >
          <motion.span
            initial={false}
            animate={{ opacity: active === l.label ? 1 : 0.25 }}
            transition={{ duration: 0.25 }}
          >
            {l.label}
          </motion.span>
        </Link>
      ))}
    </div>
  );
}
