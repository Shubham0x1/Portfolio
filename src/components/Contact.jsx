import "./Contact.css";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const Contact = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/shubhamgusain01/",
    github: "https://github.com/Shubham0x1",
    leetcode: "https://leetcode.com/u/Shubham_0x1/",
    email: "shubhamgusain886@gmail.com",
  };

  return (
    <section className="contact">
      <div className="heading">
        <h2 className="heading">Let's Connect</h2>
        <p className="sub-heading">
          Feel free to reach out for collaborations or just a chat.
        </p>
      </div>

      <div className="links">
        <a href={links.github} id='github' className="connect-link">
          <FaGithub />
          <p>Github</p>
        </a>

        <a href={links.linkedIn} id='linkedin' className="connect-link">
          <FaLinkedin />
          <p>Linked In</p>
        </a>

        <a href={`mailto:${links.email}`} id='email' className="connect-link">
          <SiGmail />
          <p>Email</p>
        </a>

        <a href={links.leetcode} id='leetcode' className="connect-link">
          <SiLeetcode />
          <p>LeetCode</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
