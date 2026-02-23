import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./contact.css"
const ContactUs = () => {
  const contacts = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Dev-Avin",
      className: "github",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/7876222974",
      className: "whatsapp",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/avinash-sharma-3a4248297/",
      className: "linkedin",
    },
    // {
    //   icon: <FaTwitter />,
    //   link: "https://twitter.com",
    //   className: "twitter",
    // },
    {
      icon: <FaEnvelope />,
      link: "mailto:avinash.dev.sharmaji@gmail.com",
      className: "email",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title gradientText">Get in Touch</h2>
        <p className="contact-sub">
          Let’s connect — open to collaborations, opportunities, and tech talks.
        </p>

        <div className="contact-grid">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-icon ${item.className}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;