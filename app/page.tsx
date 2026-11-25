import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

const intro = [
  { id: "01", src: "https://picsum.photos/seed/intro/1600/900", title: "LUMEN" },
  { id: "02", src: "https://picsum.photos/seed/intro2/1600/900", title: "NEXUS" },
  { id: "03", src: "https://picsum.photos/seed/intro3/1600/900", title: "AURA" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-blobs" />
        <div className="hero-copy">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            HELLO, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="hero-title"
          >
            MAYA OKAFOR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Motion designer · creative developer · visual storyteller
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            I craft digital experiences that feel alive — from brand films and
            interactive campaigns to full product interfaces.
          </motion.p>
          <motion.a
            href="/works"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hero-cta"
          >
            Explore my work
            <span>↗︎</span>
          </motion.a>
        </div>
        <div className="hero-slides">
          {intro.map((item, i) => (
            <div key={item.id} className="hero-slide">
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="hero-slide-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="intro">
        <div className="intro-copy">
          <Reveal>
            <p className="intro-label">01 / INTRODUCTION</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>
              I turn ideas into
              <br />
              <span>memorable moments.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              My work lives at the intersection of design, technology, and
              emotion. I partner with brands, studios, and founders to create
              digital products and marketing experiences that stand out.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p>
              Based in Chicago, working globally.
            </p>
          </Reveal>
        </div>
        <div className="intro-visual">
          <div className="intro-visual-film">
            <img src="https://picsum.photos/seed/film/600/400" alt="" loading="lazy" />
            <div className="film-still">
              <span>00:00:14</span>
              <span>1080p • 24fps</span>
            </div>
          </div>
          <div className="intro-visual-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="visual-card">
                <img
                  src={`https://picsum.photos/seed/v${i}/300/200`}
                  alt=""
                  loading="lazy"
                />
                <span>0{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="section-head">
          <p className="section-label">02 / FEATURED WORK</p>
          <h2>
            A few things I&apos;ve made.
            <br />
            <span>Take a look.</span>
          </h2>
        </div>
        <div className="featured-grid">
          {[
            { id: "01", title: "LUMEN", client: "Lumen Studio", image: "https://picsum.photos/seed/f1/600/400" },
            { id: "02", title: "NEXUS", client: "Nexus Commerce", image: "https://picsum.photos/seed/f2/600/400" },
            { id: "03", title: "AURA", client: "Aura Health", image: "https://picsum.photos/seed/f3/600/400" },
          ].map((item) => (
            <div key={item.id} className="featured-card">
              <div className="featured-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="featured-info">
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="marquee">
        <p className="marquee-label">TRUSTED BY</p>
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} className="marquee-content">
              {[0, 1, 2, 3].map((j) => (
                <span key={j}>
                  NEXUS · LUMEN · AURA · KINETIC
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-copy">
          <p className="cta-label">03 / LET&apos;S TALK</p>
          <h2>
            Have an idea?
            <br />
            <span>I&apos;d love to hear it.</span>
          </h2>
          <a href="/contact" className="cta-button">
            Get in touch
            <span>↗︎</span>
          </a>
        </div>
        <div className="cta-visual">
          <div className="cta-visual-film">
            <img src="https://picsum.photos/seed/cta/600/400" alt="" loading="lazy" />
            <div className="film-still">
              <span>00:00:31</span>
              <span>1080p • 24fps</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
