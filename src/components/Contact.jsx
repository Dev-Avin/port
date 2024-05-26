import React from 'react';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        Get in Touch 
      </div>
      <div className="contact-icons">
        <a href="https://github.com/Dev-Avin" target="_blank" rel="noopener noreferrer" className="icon github">
          <FaGithub />
        </a>
        <a href="https://wa.me/7876222974" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="mailto:avinash.dev.sharmaji@gmail.com" target="_blank" rel="noopener noreferrer" className="icon email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
