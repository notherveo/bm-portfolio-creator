import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

const timeline = [
  { year: "2020", title: "Started my journey", text: "First projects, first clients, lots of learning." },
  { year: "2022", title: "Found my voice", text: "Focusing on brand and product experiences." },
  { year: "2024", title: "Expanded my reach", text: "Working with clients across three continents." },
  { year: "2026", title: "Here and now", text: "Making every pixel count." },
];

const tools = [
  { name: "Figma", tag: "Design & Prototyping" },
  { name: "After Effects", tag: "Motion & Compositing" },
  { name: "Three.js", tag: "3D & Interactive" },
  { name: "WebGL", tag: "Visual Effects" },
];

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <p className="about-label">01 / ABOUT</p>
        <h1>
          A little about
          <br />
          <span>who I am.</span>
        </h1>
        <p>
          I&apos;m a creative developer based in Chicago, focused on building
          beautiful, functional digital products. My work spans design,
          development, and product strategy.
        </p>
      </section>

      <section className="about-bio">
        <div className="bio-copy">
          <Reveal>
            <p className="bio-label">02 / MY STORY</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>
              From pixels to
              <br />
              <span>full experiences.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              I started my career in traditional design, working with print and
              digital marketing. But I quickly realized that the best products
              aren&apos;t just beautiful — they&apos;re interactive, responsive,
              and built with the user in mind.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              That&apos;s when I made the switch to creative development. I
              started learning about web technologies, design systems, and
              interactive experiences. Today, I combine my design background
              with technical skills to create products that truly stand out.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p>
              I&apos;m passionate about clean code, beautiful design, and
              creating experiences that feel good to use. When I&apos;m not
              working, you&apos;ll find me exploring new technologies,
              experimenting with design, or enjoying a good cup of coffee.
            </p>
          </Reveal>
        </div>
        <div className="bio-visual">
          <div className="bio-film">
            <img src="https://picsum.photos/seed/bio/600/400" alt="" loading="lazy" />
            <div className="film-still">
              <span>00:00:45</span>
              <span>1080p • 24fps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="section-head">
          <p className="section-label">03 / MILESTONES</p>
          <h2>
            A few moments
            <br />
            <span>that shaped me.</span>
          </h2>
        </div>
        <div className="timeline-list">
          {timeline.map((t, i) => (
            <div key={t.year} className="timeline-item">
              <span className="timeline-year">{t.year}</span>
              <div className="timeline-content">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-tools">
        <div className="section-head">
          <p className="section-label">04 / TOOLBOX</p>
          <h2>
            The things I
            <br />
            <span>work with.</span>
          </h2>
        </div>
        <div className="tools-grid">
          {tools.map((t) => (
            <div key={t.name} className="tool-card">
              <span className="tool-name">{t.name}</span>
              <span className="tool-tag">{t.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="about-cta-label">05 / LET&apos;S CONNECT</p>
        <h2>
          Want to work
          <br />
          <span>together?</span>
        </h2>
        <a href="/contact" className="about-cta-button">
          Get in touch
          <span>↗︎</span>
        </a>
      </section>
    </div>
  );
}
