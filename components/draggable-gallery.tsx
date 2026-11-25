"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const items = [
  { id: "01", src: "https://picsum.photos/seed/g1/1600/900", title: "LUMEN" },
  { id: "02", src: "https://picsum.photos/seed/g2/1600/900", title: "NEXUS" },
  { id: "03", src: "https://picsum.photos/seed/g3/1600/900", title: "AURA" },
  { id: "04", src: "https://picsum.photos/seed/g4/1600/900", title: "KINETIC" },
  { id: "05", src: "https://picsum.photos/seed/g5/1600/900", title: "ORBIT" },
  { id: "06", src: "https://picsum.photos/seed/g6/1600/900", title: "VELOCITY" },
];

export function DraggableGallery() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.overflow = "hidden";
    el.style.position = "relative";
    el.style.height = "100%";
    el.style.cursor = "grab";
    el.style.userSelect = "none";
    el.style.webkitUserSelect = "none";
    el.style.transition = reduced ? "none" : "transform 0.3s ease";
    el.style.transform = `translateX(${drag}px)`;
    el.style.willChange = "transform";
  }, [drag, reduced]);

  const move = (x: number) => {
    dragRef.current = x;
    setDrag(x);
  };

  const end = () => {
    setIsDragging(false);
    if (dragRef.current < -200) setActive((a) => (a + 1) % items.length);
    else if (dragRef.current > 200) setActive((a) => (a - 1 + items.length) % items.length);
    setDrag(0);
  };

  return (
    <div className="gallery-wrapper">
      <div ref={ref} className="gallery-track" onMouseLeave={end}>
        <div className="gallery-items">
          {items.map((item, i) => (
            <Link
              key={item.id}
              href={`/works#${item.id}`}
              className={`gallery-item ${active === i ? "active" : ""}`}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-caption">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="gallery-dots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`gallery-dot ${active === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
