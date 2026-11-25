import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

const posts = [
  {
    id: "01",
    title: "The art of minimalism in digital design",
    date: "OCT 15, 2025",
    read: "5 min",
    image: "https://picsum.photos/seed/j1/600/400",
  },
  {
    id: "02",
    title: "Building a design system that scales",
    date: "SEP 28, 2025",
    read: "7 min",
    image: "https://picsum.photos/seed/j2/600/400",
  },
  {
    id: "03",
    title: "Why motion matters in web design",
    date: "AUG 12, 2025",
    read: "4 min",
    image: "https://picsum.photos/seed/j3/600/400",
  },
  {
    id: "04",
    title: "The future of interactive marketing",
    date: "JUL 03, 2025",
    read: "6 min",
    image: "https://picsum.photos/seed/j4/600/400",
  },
];

export default function Journal() {
  return (
    <div className="journal">
      <section className="journal-hero">
        <p className="journal-label">01 / JOURNAL</p>
        <h1>
          Thoughts,
          <br />
          <span>experiments, and ideas.</span>
        </h1>
        <p>
          A collection of my reflections on design, development, and the
          things I&apos;m curious about.
        </p>
      </section>

      <section className="journal-posts">
        <div className="section-head">
          <p className="section-label">02 / LATEST</p>
          <h2>
            Recent
            <br />
            <span>entries.</span>
          </h2>
        </div>
        <div className="posts-grid">
          {posts.map((p) => (
            <article key={p.id} className="post-card">
              <div className="post-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="post-date">{p.date}</span>
              </div>
              <div className="post-info">
                <h3>{p.title}</h3>
                <p>{p.read} read</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-cta">
        <p className="journal-cta-label">03 / KEEP IN TOUCH</p>
        <h2>
          Want to see
          <br />
          <span>more?</span>
        </h2>
        <a href="/contact" className="journal-cta-button">
          Get in touch
          <span>↗︎</span>
        </a>
      </section>
    </div>
  );
}
