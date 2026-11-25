import { HoverPreviewList } from "@/components/hover-preview-list";
import { DraggableGallery } from "@/components/draggable-gallery";

export default function Works() {
  return (
    <div className="works">
      <section className="works-hero">
        <p className="works-label">01 / WORKS</p>
        <h1>
          A few things I&apos;ve
          <br />
          <span>made.</span>
        </h1>
        <p>
          From brand identities to interactive campaigns, here&apos;s a
          selection of my favorite projects.
        </p>
      </section>

      <section className="works-list">
        <div className="section-head">
          <p className="section-label">02 / PROJECTS</p>
          <h2>
            Explore the
            <br />
            <span>full collection.</span>
          </h2>
        </div>
        <div className="projects-grid">
          {[
            { id: "01", title: "LUMEN", client: "Lumen Studio", image: "https://picsum.photos/seed/w1/600/400" },
            { id: "02", title: "NEXUS", client: "Nexus Commerce", image: "https://picsum.photos/seed/w2/600/400" },
            { id: "03", title: "AURA", client: "Aura Health", image: "https://picsum.photos/seed/w3/600/400" },
            { id: "04", title: "KINETIC", client: "Kinetic Lab", image: "https://picsum.photos/seed/w4/600/400" },
            { id: "05", title: "ORBIT", client: "Orbit Finance", image: "https://picsum.photos/seed/w5/600/400" },
            { id: "06", title: "VELOCITY", client: "Velocity Motors", image: "https://picsum.photos/seed/w6/600/400" },
          ].map((item) => (
            <div key={item.id} className="project-card">
              <div className="project-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="project-info">
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="works-featured">
        <div className="section-head">
          <p className="section-label">03 / FEATURED</p>
          <h2>
            Take a closer
            <br />
            <span>look.</span>
          </h2>
        </div>
        <div className="featured-list">
          <HoverPreviewList />
        </div>
      </section>

      <section className="works-gallery">
        <div className="section-head">
          <p className="section-label">04 / GALLERY</p>
          <h2>
            A visual
            <br />
            <span>collection.</span>
          </h2>
        </div>
        <div className="gallery-container">
          <DraggableGallery />
        </div>
      </section>
    </div>
  );
}
