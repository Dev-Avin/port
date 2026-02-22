import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

import Laptop from "../assets/laptop.png";
import Android from "../assets/android.png";
import "./projects.css";

import ExeAndroid from "../assets/projects/ExeAndroid.png";
import Exe from "../assets/projects/Exe.png";

import ConfessionsAndroid from "../assets/projects/ConfessionsAndroid.png";
import Confessions from "../assets/projects/Confessions.png";

const projectsArray = [
  {
    id: "exe",
    name: "Team Exe Website",
    summary:
      "High-speed event platform built for discoverability, trust, and repeat visits.",
    description:
      "Designed and built a responsive site that handles heavy traffic with optimized assets, clear content flow, and consistently fast load times on both mobile and desktop.",
    laptopContent: Exe,
    androidContent: ExeAndroid,
    link: "https://teamexenith.tech/",
    tags: ["React", "Responsive", "Performance"],
  },
  {
    id: "confessions",
    name: "Anon Confessions",
    summary: "Anonymous community app powered by Firebase real-time data.",
    description:
      "Built with React and Firebase to let users share thoughts anonymously in real time, with focus on simple UX, reliable sync, and safe interaction patterns.",
    laptopContent: Confessions,
    androidContent: ConfessionsAndroid,
    link: "https://confessionexe.web.app/",
    tags: ["React", "Firebase", "Realtime"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const projectCount = projectsArray.length;
      const nextIndex = Math.min(
        projectCount - 1,
        Math.floor(progress * projectCount)
      );
      setCurrentProject(nextIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const project = projectsArray[currentProject];

  return (
    <div ref={ref} className="projects-container">
      <div className="projects-bg" />
      <section className="projects">
        <div className="projects-panel">
          <p className="projects-eyebrow">Featured Work</p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={project.id}
              className="project-name"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {project.name}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${project.id}-summary`}
              className="project-summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.summary}
            </motion.p>
          </AnimatePresence>

          <div className="project-tags" aria-label="Project technologies">
            {project.tags.map((tag) => (
              <span className="project-tag" key={`${project.id}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${project.id}-description`}
              className="projects-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {project.description}
            </motion.p>
          </AnimatePresence>

          <div className="project-actions">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta"
            >
              Open Project
            </a>
          </div>

          <div className="project-switcher" aria-label="Choose project">
            {projectsArray.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`project-switcher-item ${
                  index === currentProject ? "active" : ""
                }`}
                onClick={() => setCurrentProject(index)}
                aria-current={index === currentProject}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-showcase">
          <div className="display-laptop">
            <img src={Laptop} className="display-laptop-frame" alt="Laptop Frame" />
            <AnimatePresence mode="wait">
              <motion.img
                key={`${project.id}-laptop`}
                src={project.laptopContent}
                className="display-laptop-content"
                alt={`${project.name} laptop preview`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          <div className="display-phone">
            <img
              src={Android}
              className="display-android-frame"
              alt="Phone Frame"
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={`${project.id}-phone`}
                src={project.androidContent}
                className="display-android-content"
                alt={`${project.name} phone preview`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
