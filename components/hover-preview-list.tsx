"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  outcome: string;
  image: string;
  still: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "LUMEN",
    client: "Lumen Studio",
    year: "2026",
    role: "Visual identity & launch",
    outcome: "12% conversion lift in first month",
    image: "https://picsum.photos/seed/lumen/600/400",
    still: "https://picsum.photos/seed/lumen-still/600/400",
  },
  {
    id: "02",
    title: "NEXUS",
    client: "Nexus Commerce",
    year: "2025",
    role: "App concept & interaction",
    outcome: "Featured in 3 design publications",
    image: "https://picsum.photos/seed/nexus/600/400",
    still: "https://picsum.photos/seed/nexus-still/600/400",
  },
  {
    id: "03",
    title: "AURA",
    client: "Aura Health",
    year: "2025",
    role: "Brand film & digital assets",
    outcome: "2.4M views across platforms",
    image: "https://picsum.photos/seed/aura/600/400",
    still: "https://picsum.photos/seed/aura-still/600/400",
  },
  {
    id: "04",
    title: "KINETIC",
    client: "Kinetic Lab",
    year: "2024",
    role: "Interactive campaign",
    outcome: "45% higher engagement vs static",
    image: "https://picsum.photos/seed/kinetic/600/400",
    still: "https://picsum.photos/seed/kinetic-still/600/400",
  },
  {
    id: "05",
    title: "ORBIT",
    client: "Orbit Finance",
    year: "2024",
    role: "Product photography & styling",
    outcome: "Recognized at Design Awards 2024",
    image: "https://picsum.photos/seed/orbit/600/400",
    still: "https://picsum.photos/seed/orbit-still/600/400",
  },
  {
    id: "06",
    title: "VELOCITY",
    client: "Velocity Motors",
    year: "2023",
    role: "3D configurator & launch",
    outcome: "180K units sold in launch quarter",
    image: "https://picsum.photos/seed/velocity/600/400",
    still: "https://picsum.photos/seed/velocity-still/600/400",
  },
];

export function HoverPreviewList() {
  const [hover, setHover] = useState<string | null>(null);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [thumbs, setThumbs] = useState<string[]>([]);

  useEffect(() => {
    const ids = projects.map((p) => p.id);
    const images = ids.map((id) => `https://picsum.photos/seed/${id}/600/400`);
    setThumbs(images);
    refs.current = Array.from({ length: images.length }, () => null);
  }, []);

  return (
    <div className="preview-list">
      {projects.map((p, i) => (
        <Link
          key={p.id}
          href={`/works#${p.id}`}
          ref={(el) => {
            refs.current[i] = el;
          }}
          onMouseEnter={() => setHover(p.id)}
          onMouseLeave={() => setHover(null)}
          className="preview-item"
        >
          <div className="preview-label">
            <span>0{i + 1}</span>
            <span>{p.title}</span>
          </div>
          <div className="preview-image">
            <img src={p.image} alt={p.title} loading="lazy" />
            <div className="preview-still">
              <img src={p.still} alt="" loading="lazy" />
            </div>
          </div>
        </Link>
      ))}
      <div className="preview-thumbs">
        {thumbs.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className={`preview-thumb ${hover === projects[i].id ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
