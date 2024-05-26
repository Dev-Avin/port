import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiGreensock, SiFramer, SiExpress, SiMongodb } from 'react-icons/si';


const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiGreensock />, name: 'GSAP' },
  { icon: <SiFramer />, name: 'Framer Motion' },
  { icon: <FaGit />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Array(skills.length).fill(false));
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => {
              const newVisibleSkills = [...prev];
              newVisibleSkills[index] = true;
              return newVisibleSkills;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${visibleSkills[index] ? 'visible' : ''}`}
            ref={(el) => (skillRefs.current[index] = el)}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
