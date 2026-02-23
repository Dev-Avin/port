import React, { useEffect } from "react";
import like from "../assets/like.png";
import lightning from "../assets/lightning.png";
import moon from "../assets/moon.png";
import database from "../assets/database.png";
import code from "../assets/code.png";
import cpu from "../assets/cpu.png";
import "./features.css";

const features = [
  {
    icon: lightning,
    title: "High‑Performance Architecture",
    desc: "I design and build scalable full‑stack systems with optimized APIs, efficient data flow, and production‑grade performance tuning.",
  },
  {
    icon: like,
    title: "End‑to‑End Full Stack",
    desc: "From pixel‑perfect frontends to robust backend services and databases, I deliver cohesive applications across the entire stack.",
  },
  {
    icon: moon,
    title: "Cloud & Infrastructure",
    desc: "Experienced with deployment pipelines, containers, CI/CD, and cloud environments to ensure reliable, secure, and maintainable systems.",
  },
  {
    icon: database,
    title: "Data & Backend Systems",
    desc: "Designing scalable schemas, APIs, and distributed services that handle real‑world scale, consistency, and performance demands.",
  },
  {
    icon: code,
    title: "Clean Engineering",
    desc: "Strong focus on maintainable architecture, modular codebases, and engineering best practices that keep projects extensible.",
  },
  {
    icon: cpu,
    title: "DevOps Mindset",
    desc: "Automation, monitoring, and performance awareness baked into development—bridging development and operations seamlessly.",
  },
];

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

    // In-view animation
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target;
          if (e.isIntersecting) {
            // Re-trigger animation on each enter
            el.classList.remove("inview");
            // Force reflow to restart CSS animation timeline
            void el.offsetWidth;
            el.classList.add("inview");
          } else {
            // Reset state when leaving viewport
            el.classList.remove("inview");
          }
        });
      },
      { threshold: 0.4 }
    );

    cards.forEach((card) => {
      io.observe(card);
    });

    return () => {
      io.disconnect();
    };
  }, []);
  return (
    <section className="features-section">
      <div
        className="features-wrapper features-glow-host"
        onMouseMove={(e) => {
          const host = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - host.left;
          const y = e.clientY - host.top;
          e.currentTarget.style.setProperty("--gx", `${x}px`);
          e.currentTarget.style.setProperty("--gy", `${y}px`);
          const cards = e.currentTarget.querySelectorAll('.feature-card');
          cards.forEach((card) => {
            const r = card.getBoundingClientRect();
            const cx = e.clientX - r.left;
            const cy = e.clientY - r.top;
            card.style.setProperty('--cx', `${cx}px`);
            card.style.setProperty('--cy', `${cy}px`);
          });
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--gx", `-9999px`);
          e.currentTarget.style.setProperty("--gy", `-9999px`);
          const cards = e.currentTarget.querySelectorAll('.feature-card');
          cards.forEach((card) => {
            card.style.setProperty('--cx', `-9999px`);
            card.style.setProperty('--cy', `-9999px`);
          });
        }}
      >
        <div className="features-header">
          <h2>Why Work With Me</h2>
          <p>
            I craft high‑performance, visually stunning web experiences that feel
            modern, intuitive, and beautifully engineered — turning ideas into
            polished digital products.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ "--d": `${i * 70}ms` }}>
              <div className="feature-icon">
                <img className="feature-icon-img" src={f.icon} alt={f.title} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
