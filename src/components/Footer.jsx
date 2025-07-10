import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si"; // Added LeetCode icon

const Footer = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/shubhamgusain01/",
    github: "https://github.com/Shubham0x1",
    leetcode: "https://leetcode.com/u/Shubham_0x1/",
    email: "shubhamgusain886@gmail.com",
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Copyright */}
        <p className="footer-text">&copy; {new Date().getFullYear()} Shubham. All Rights Reserved.</p>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          
          <a href={links.linkedIn} id="linkedin-text">
            <FaLinkedin/>
            <p>LinkedIn</p>
          </a>

          <a href={links.github} id="github-text">
            <FaGithub/>
            <p>GitHub</p>
          </a>

          <a href={links.leetcode} id="leetcode-text">
            <SiLeetcode/>
            <p>LeetCode</p>
          </a>

          <a href={`mailto:${links.email}`} id="email-text">
            <SiGmail/>
            <p>Email</p>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;