import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import Laptop from "../assets/laptop.png";
import Android from "../assets/android.png";
import "./projects.css";

import ExeAndroid from "../assets/projects/ExeAndroid.png";
import Exe from "../assets/projects/Exe.png";

import ConfessionsAndroid from "../assets/projects/ConfessionsAndroid.png";
import Confessions from "../assets/projects/Confessions.png";

const projectsArray = [
  {
    name: "Team Exe Website",
    description: `Fast and responsive website, accommodating over 1000 visits and counting, with swift loading times, seamless navigation, and user-centric design, resulting in an impressive 97% user retention rate.`,
    laptopContent: Exe,
    androidContent: ExeAndroid,
    link: "https://teamexenith.tech/",
  },
  {
    name: "Anon Confessions",
    description: `Developed using React and Firebase, It's a platform for users to express themselves freely and anonymously. Utilizing React for frontend while Firebase is used for real-time data storage and retrieval.`,
    laptopContent: Confessions,
    androidContent: ConfessionsAndroid,
    link: "https://confessionexe.web.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [currentProject, setCurrentProject] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  // Transform scroll progress into project index changes
  const projectIndex = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Update project state when projectIndex changes
  useEffect(() => {
    projectIndex.onChange((index) => {
      setCurrentProject(Math.round(index));
    });
  }, [projectIndex]);

  // Set entry animation on mount
  useEffect(() => {
    setAnimationClass("fade-in");

    return () => {
      // Set exit animation on unmount
      setAnimationClass("fade-out");
    };
  }, []);

  return (
    <div ref={ref} className={`projects-container ${animationClass}`}>
      <div className="projects-bg" />
      <section className="projects">
        <div className="projects-description-container">
          <div className="project-name-container">
            <AnimatePresence mode="wait">
              <motion.h1
                key={projectsArray[currentProject].name}
                className="project-name"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, color: "#fff" }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={projectsArray[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {projectsArray[currentProject].name}
                </a>
              </motion.h1>
            </AnimatePresence>

            <hr className="project-name-hr" />
          </div>
          <div className="projects-display-container">
            <motion.div
              className="display-laptop"
              initial={{ clipPath: "circle(70%)" }}
              animate={{ clipPath: "circle(100%)" }}
              transition={{ duration: 1 }}
            >
              <img
                src={Laptop}
                className="display-laptop-frame"
                alt="Laptop Display"
              />

              <AnimatePresence mode="wait">
                <motion.img
                  key={projectsArray[currentProject].laptopContent}
                  src={projectsArray[currentProject].laptopContent}
                  className="display-laptop-content"
                  alt="Laptop Content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.8 } }}
                />
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="display-android"
              initial={{ clipPath: "circle(70%)" }}
              animate={{ clipPath: "circle(100%)" }}
              transition={{ duration: 1 }}
            >
              <img
                src={Android}
                className="display-android-frame"
                alt="Android Display"
              />
              <motion.img
                src={projectsArray[currentProject].androidContent}
                className="display-android-content"
                alt="Android Content"
                initial={{ clipPath: "inset(10%)" }}
                animate={{ clipPath: "inset(0%)" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>

          <div className="projects-description-container">
            <AnimatePresence mode="wait">
              <motion.p
                key={projectsArray[currentProject].description}
                className="projects-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {projectsArray[currentProject].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="projects-display-container-pc">
          <div className="display-laptop">
            <img
              src={Laptop}
              className="display-laptop-frame"
              alt="Laptop Display"
            />
            <img
              src={projectsArray[currentProject].laptopContent}
              className="display-laptop-content"
              alt="Laptop Content"
            />
          </div>
          <div className="display-android">
            <div className="wrap">
              <img
                src={Android}
                className="display-android-frame"
                alt="Android Display"
              />
              <img
                src={projectsArray[currentProject].androidContent}
                className="display-android-content"
                alt="Android Content"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
