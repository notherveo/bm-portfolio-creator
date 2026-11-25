import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

const contacts = [
  { label: "Email", value: "hello@mayaokafor.com" },
  { label: "LinkedIn", value: "linkedin.com/in/mayaokafor" },
  { label: "Twitter", value: "twitter.com/mayaokafor" },
];

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <p className="contact-label">01 / CONTACT</p>
        <h1>
          Let&apos;s make
          <br />
          <span>something great.</span>
        </h1>
        <p>
          Have a project in mind? I&apos;d love to hear about it. Drop me a
          line and let&apos;s start a conversation.
        </p>
      </section>

      <section className="contact-info">
        <div className="section-head">
          <p className="section-label">02 / GET IN TOUCH</p>
          <h2>
            Here are a few
            <br />
            <span>ways to reach me.</span>
          </h2>
        </div>
        <div className="contacts-list">
          {contacts.map((c) => (
            <div key={c.label} className="contact-item">
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form">
        <div className="section-head">
          <p className="section-label">03 / SEND A MESSAGE</p>
          <h2>
            Fill out the
            <br />
            <span>form below.</span>
          </h2>
        </div>
        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project inquiry"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="form-submit">
            <button type="submit" className="form-button">
              Send message
              <span>↗︎</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
