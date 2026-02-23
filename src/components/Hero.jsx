import React from "react";
import "./hero.css";
import LiquidBlobPortrait from "./LiquidBlobPortrait.jsx";

const stackHighlights = [
  "React • Next.js • TypeScript",
  "Node.js • Django • REST APIs",
  "Docker • Linux • CI/CD",
  "AWS • System Design",
];

const portraits = [
  { src: "/heroImage.png", delay: 0 },
  { src: "/orange.jpg", delay: 250 },
  { src: "/blue.jpg", delay: 500 },
];

const Hero = () => {
  return (
    <section className="hero-redesign" id="home">
      <div className="hero-redesign-inner">
        <div className="hero-redesign-main">
          <p className="hero-redesign-kicker">
            Software Engineer • Full-Stack • Product-Focused
          </p>

          <h1 className="hero-redesign-title">
            Hi, I’m Avinash.
            <span className="hero-redesign-title-line">
              I build
              <span className="hero-redesign-gradient">
                {" "}scalable, high-performance web products
              </span>
            </span>
          </h1>

          <p className="hero-redesign-description">
            Full-stack engineer specializing in performant frontend systems,
            reliable backend architecture, and production-grade deployment.
            I design and ship user-centric products that scale.
          </p>

          <div className="hero-redesign-actions" style={{ pointerEvents: "all" }}>
            <a
              className="hero-redesign-btn hero-redesign-btn-primary"
              href="#projects"
              style={{ pointerEvents: "all" }}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#projects') || document.querySelector('.projects');
                if (el && 'scrollIntoView' in el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.location.hash = 'projects';
                }
              }}
            >
              View Projects
            </a>
            <a
              className="hero-redesign-btn hero-redesign-btn-secondary"
              href="#internship-experience"
              style={{ pointerEvents: "all" }}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#internship-experience');
                if (el && 'scrollIntoView' in el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.location.hash = 'internship-experience';
                }
              }}
            >
              Experience
            </a>
          </div>

          <div className="hero-redesign-stack">
            {stackHighlights.map((item) => (
              <span key={item} className="hero-redesign-stack-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Portraits stacked */}
        <aside className="hero-redesign-side">
          <div className="hero-portrait-stack">
            {portraits.map((p, i) => (
              <figure key={p.src} className={`hero-portrait hero-portrait-${i}`}>
                <LiquidBlobPortrait src={p.src} delay={p.delay} />
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
