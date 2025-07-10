import "./Projects.css";
import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    image: "src/components/Portfolio.png",
    description: "A personal portfolio website built with React.js.",
    techStack: "React.js, CSS",
    github: "https://github.com/Shubham0x1/Portfolio",
  },
  {
    name: "SwasthyaPath",
    image: "src/components/SwasthyaPath.png",
    description:
      "SwasthyaPath is a modern web-based health tracking and advisory application ",
    techStack:
      "Vite + React.js + Tailwind CSS (Frontend), Node.js + Express.js (Backend), MongoDB (Database), Git + GitHub (Version Control)",
    github: "https://github.com/Shubham0x1/SwasthyaPath",
    demo: "",
  },

  {
    name: "Edu-Flash",
    image: "src/components/FlashCard.png",
    description:
      "Edu-Flash is a smart flashcard generator ",
    techStack:
      "Using HTML, CSS, JavaScript,  Python 3.11+, Flask,  NLTK, PyPDF2, Google Generative AI, python-dotenv",
    github: "https://github.com/Shubham0x1/Edu-Flash",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <div className="headings">
        <h2 className="heading">My Projects</h2>
        <p className="sub-heading">Here are some of my best works.</p>
        <p>Please Scroll Up</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
            <div className="details">
              <div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <div>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech-stack">
                  Tech Stack: {project.techStack}
                </p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  
                  <a
                    href={project.demo || "https://github.com/Vishal-Kumar2006"}
                    className="project-link"
                  >
                    {project.demo ? "Live Demo" : "Not Deployed"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
