import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGithubactions,
  SiGnubash,
  SiJenkins,
  SiJunit5,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRedis,
  SiTestinglibrary,
  SiTypescript,
  SiAnsible,
} from "react-icons/si";
import "./skills.css";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Craft",
    subtitle: "Product interfaces and interaction systems",
    accent: "#f87516",
    items: [
      // { name: "HTML", icon: <FaHtml5 /> },
      { name: "TailwindCSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Problem solving and core engineering",
    accent: "#f2a15a",
    items: [
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    id: "backend",
    title: "Backend Systems",
    subtitle: "APIs, data flow, and runtime services",
    accent: "#7b61ff",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Git", icon: <FaGit /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infra",
    subtitle: "CI/CD, testing, and infrastructure operations",
    accent: "#9a87ff",
    items: [
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "JUnit", icon: <SiJunit5 /> },
      { name: "Testing Library", icon: <SiTestinglibrary /> },
      { name: "Bash", icon: <SiGnubash /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalSkills = useMemo(
    () => skillGroups.reduce((count, group) => count + group.items.length, 0),
    []
  );

  let revealOrder = 0;

  return (
    <section
      ref={sectionRef}
      className={`skills-redesign ${isVisible ? "is-visible" : ""}`}
      id="skills"
    >
      <div className="skills-redesign-glow skills-redesign-glow-a" />
      <div className="skills-redesign-glow skills-redesign-glow-b" />

      <div className="skills-redesign-shell">
        <header className="skills-redesign-header">
          <p className="skills-redesign-eyebrow">Technical Toolkit</p>
          <h2 className="skills-redesign-title">Skills & Engineering Stack</h2>
          <p className="skills-redesign-subtitle">
            Focused on frontend systems, backend services, DevOps automation, and
            core programming foundations.
          </p>
          <div className="skills-redesign-meta">
            <span>{skillGroups.length} domains</span>
            <span>{totalSkills} technologies</span>
          </div>
        </header>

        <div className="skills-redesign-grid">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="skills-group-card"
              style={{ "--skills-accent": group.accent }}
            >
              <div className="skills-group-head">
                <p className="skills-group-title">{group.title}</p>
                <p className="skills-group-subtitle">{group.subtitle}</p>
              </div>

              <ul className="skills-group-list">
                {group.items.map((item) => {
                  const delay = revealOrder * 45;
                  revealOrder += 1;

                  return (
                    <li
                      key={`${group.id}-${item.name}`}
                      className="skills-item-card"
                      style={{ "--item-delay": `${delay}ms` }}
                    >
                      <span className="skills-item-icon">{item.icon}</span>
                      <span className="skills-item-name">{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
