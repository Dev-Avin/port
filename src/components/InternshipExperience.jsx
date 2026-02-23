import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import DellLogo from "../assets/companies/dell-logo.svg";
import HeliverseLogo from "../assets/companies/heliverse-logo.svg";
import TimelineDotActive from "../assets/timeline/dot-active.svg";
import TimelineDotIdle from "../assets/timeline/dot-idle.svg";
import "./internship.css";

const experienceItems = [
  {
    id: "heliverse-2024",
    year: "2024",
    company: "Heliverse",
    role: "Web Development Intern",
    duration: "May 2024 - Jun 2024",
    location: "Internship",
    summary:
      "Built and shipped responsive product interfaces at Heliverse, improving performance, maintainability, and delivery speed across client-facing web applications.",
    points: [
      "Developed reusable UI architecture with React.js and Next.js for pages, dashboards, and content-driven modules.",
      "Implemented SSR strategies and route-level rendering improvements that reduced page load time by about 50%.",
      "Strengthened stability through debugging, manual validation, and review-driven code quality improvements.",
      "Collaborated with design and product stakeholders to ensure consistent behavior across desktop and mobile experiences.",
    ],
    logo: HeliverseLogo,
    stack: ["React.js", "Next.js", "SSR", "Frontend"],
    theme: {
      accentA: "#F87516",
      accentB: "#5E11FF",
      glow: "rgba(94, 17, 255, 0.46)",
      tintA: "rgba(248, 117, 22, 0.22)",
      tintB: "rgba(94, 17, 255, 0.28)",
    },
  },
  {
    id: "dell-2025",
    year: "2025",
    company: "Dell Technologies",
    role: "ISG Intern",
    duration: "May 2025 - Jul 2025",
    location: "Internship",
    summary:
      "Modernized CI/CD workflows for Dell ISG, improving deployment consistency, release quality, and engineering throughput across delivery teams.",
    points: [
      "Designed and maintained scalable build, test, and deployment pipelines for repeated high-confidence releases.",
      "Automated end-to-end delivery workflows using GitHub Actions and Jenkins to reduce manual deployment overhead.",
      "Integrated unit and integration test gates into release pipelines for earlier regression detection.",
      "Partnered with development and QA to standardize deployment, verification, and rollback readiness practices.",
    ],
    logo: DellLogo,
    stack: ["GitHub Actions", "Jenkins", "Automation", "Release Quality"],
    theme: {
      accentA: "#2A9BFF",
      accentB: "#1269C4",
      glow: "rgba(42, 155, 255, 0.42)",
      tintA: "rgba(42, 155, 255, 0.23)",
      tintB: "rgba(18, 105, 196, 0.28)",
    },
  },
  {
    id: "dell-current",
    year: "2026",
    company: "Dell Technologies",
    role: "ISG Intern (Current)",
    duration: "Jan 2026 - Present",
    location: "Ongoing",
    summary:
      "Currently driving CI/CD reliability improvements for Dell ISG with deeper automation coverage, stronger release validation, and tighter team coordination.",
    points: [
      "Maintain and improve scalable release pipelines to support dependable, low-friction deployment cycles.",
      "Expand automation coverage in GitHub Actions and Jenkins across active release streams.",
      "Strengthen quality gates with integrated test checks and release validation standards.",
      "Collaborate with development and QA teams to shorten cycle time while preserving production safety.",
    ],
    logo: DellLogo,
    stack: ["GitHub Actions", "Jenkins", "CI/CD", "Testing"],
    theme: {
      accentA: "#57D2FF",
      accentB: "#4E7BFF",
      glow: "rgba(78, 123, 255, 0.46)",
      tintA: "rgba(87, 210, 255, 0.23)",
      tintB: "rgba(78, 123, 255, 0.28)",
    },
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.95,
  }),
};

const textSequenceVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

const textItemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listSequenceVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const logoParticleBlueprint = [
  { id: 0, x: 6, y: 18, size: 3.7, delay: 0, duration: 3.2, rotate: -11 },
  { id: 1, x: 14, y: 34, size: 4.75, delay: 0.15, duration: 3.7, rotate: -6 },
  { id: 2, x: 23, y: 67, size: 3.95, delay: 0.35, duration: 3.4, rotate: 5 },
  { id: 3, x: 33, y: 26, size: 4.45, delay: 0.55, duration: 3.9, rotate: -4 },
  { id: 4, x: 42, y: 12, size: 3.55, delay: 0.75, duration: 3.1, rotate: 8 },
  { id: 5, x: 51, y: 60, size: 4.65, delay: 0.95, duration: 3.8, rotate: 2 },
  { id: 6, x: 60, y: 38, size: 4.05, delay: 1.1, duration: 3.3, rotate: -9 },
  { id: 7, x: 70, y: 21, size: 4.2, delay: 1.25, duration: 3.6, rotate: 6 },
  { id: 8, x: 78, y: 56, size: 4.3, delay: 1.4, duration: 4, rotate: -3 },
  { id: 9, x: 86, y: 30, size: 3.6, delay: 1.55, duration: 3.2, rotate: 10 },
  { id: 10, x: 92, y: 72, size: 4.15, delay: 1.7, duration: 3.5, rotate: -7 },
  { id: 11, x: 96, y: 42, size: 3.85, delay: 1.85, duration: 3, rotate: 4 },
  { id: 12, x: 11, y: 52, size: 3.5, delay: 0.28, duration: 3.45, rotate: 7 },
  { id: 13, x: 27, y: 10, size: 3.9, delay: 0.62, duration: 3.25, rotate: -8 },
  { id: 14, x: 66, y: 69, size: 3.7, delay: 1.02, duration: 3.55, rotate: 9 },
  { id: 15, x: 84, y: 12, size: 3.6, delay: 1.36, duration: 3.35, rotate: -5 },
];

const InternshipExperience = () => {
  const ref = useRef(null);
  const prevIndexRef = useRef(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const itemCount = experienceItems.length;
      const nextIndex = Math.min(itemCount - 1, Math.floor(progress * itemCount));
      const prevIndex = prevIndexRef.current;

      if (nextIndex !== prevIndex) {
        setDirection(nextIndex > prevIndex ? 1 : -1);
        prevIndexRef.current = nextIndex;
      }

      setCurrentIndex(nextIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const active = experienceItems[currentIndex];
  const previewIndex = Math.min(currentIndex + 1, experienceItems.length - 1);
  const preview = experienceItems[previewIndex];
  const timelineInset = 6;
  const themeStyle = {
    "--intern-accent-a": active.theme.accentA,
    "--intern-accent-b": active.theme.accentB,
    "--intern-glow": active.theme.glow,
    "--intern-tint-a": active.theme.tintA,
    "--intern-tint-b": active.theme.tintB,
  };
  const previewThemeStyle = {
    "--preview-accent-a": preview.theme.accentA,
    "--preview-accent-b": preview.theme.accentB,
    "--preview-tint-a": preview.theme.tintA,
    "--preview-tint-b": preview.theme.tintB,
  };

  return (
    <section
      ref={ref}
      className="internship-sticky"
      id="internship-experience"
      style={themeStyle}
    >
      <div className="internship-sticky-bg" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`particles-${active.id}`}
          className="internship-bg-particles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          aria-hidden="true"
        >
          {logoParticleBlueprint.map((particle) => (
            <img
              key={`${active.id}-${particle.id}`}
              src={active.logo}
              alt=""
              className="internship-bg-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}rem`,
                "--particle-delay": `${particle.delay}s`,
                "--particle-duration": `${particle.duration}s`,
                "--particle-rotate": `${particle.rotate}deg`,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="internship-sticky-stage">
        <div className="internship-main">
          <header className="internship-main-header">
            <p className="internship-eyebrow">Experience Timeline</p>
            <h2 className="internship-title">Internship Journey</h2>
         
          </header>

          <div
            className="internship-top-rail"
            aria-label="Internship timeline"
            style={{ "--timeline-inset": `${timelineInset}%` }}
          >
            <div className="internship-top-line" />
            <motion.div className="internship-top-fill" style={{ scaleX: timelineProgress }} />

            {experienceItems.map((item, index) => {
              const ratio =
                experienceItems.length > 1 ? index / (experienceItems.length - 1) : 0;
              const left = timelineInset + ratio * (100 - timelineInset * 2);
              const isActive = index <= currentIndex;
              const dotSource = isActive ? TimelineDotActive : TimelineDotIdle;

              return (
                <div
                  key={`rail-${item.id}`}
                  className={`internship-top-point ${
                    isActive ? "active" : ""
                  } ${index === currentIndex ? "current" : ""}`}
                  style={{
                    left: `${left}%`,
                  }}
                >
                  <img src={dotSource} alt="" className="internship-top-dot" />
                  <span className="internship-top-label">{item.year}</span>
                </div>
              );
            })}
          </div>

          <div className="internship-card-deck">
            {preview.id !== active.id && (
              <div
                className="internship-preview-card"
                aria-hidden="true"
                style={previewThemeStyle}
              >
                <p className="internship-preview-year">{preview.year}</p>
                <p className="internship-preview-company">{preview.company}</p>
                <p className="internship-preview-role">{preview.role}</p>
              </div>
            )}

            <AnimatePresence initial={false} mode="sync" custom={direction}>
              <motion.article
                key={active.id}
                className="internship-active-card"
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <motion.div
                  className="internship-card-sequence"
                  variants={textSequenceVariants}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div className="internship-card-top" variants={textItemVariants}>
                    <span className="internship-year-chip">{active.year}</span>
                    <span className="internship-duration">{active.duration}</span>
                  </motion.div>

                  <motion.div className="internship-company-row" variants={textItemVariants}>
                    <p className="internship-company">{active.company}</p>
                    <h3 className="internship-role">{active.role}</h3>
                  </motion.div>

                  <motion.span className="internship-location" variants={textItemVariants}>
                    {active.location}
                  </motion.span>

                  <motion.div className="internship-body-card" variants={textItemVariants}>
                    <div className="internship-body-head">
                      <span className="internship-body-kicker">Work Summary</span>
                      <span className="internship-body-count">
                        {active.points.length} contributions
                      </span>
                    </div>
                    <p className="internship-summary">{active.summary}</p>
                    <motion.ul className="internship-points" variants={listSequenceVariants}>
                      {active.points.map((point) => (
                        <motion.li key={`${active.id}-${point}`} variants={textItemVariants}>
                          {point}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div className="internship-stack-wrap" variants={textItemVariants}>
                    <p className="internship-stack-title">Tooling</p>
                    <motion.div
                      className="internship-stack"
                      variants={listSequenceVariants}
                      aria-label="Technologies used"
                    >
                      {active.stack.map((tech) => (
                        <motion.span
                          className="internship-tech"
                          key={`${active.id}-${tech}`}
                          variants={textItemVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipExperience;
