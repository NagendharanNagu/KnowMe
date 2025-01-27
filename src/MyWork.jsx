import React from "react";
import "./mywork.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Organise_ME",
    description:
      "Organise_ME is a web application that helps users to manage their daily tasks and reminders. It is featured with Edit and delete options.",
    techStack: "HTML, CSS, JavaScript, React",
    livePreview: "#",
    viewCode: "https://github.com/NagendharanNagu/Nagendharan-Shanmugam-Todolist",
    image: "src/assets/project1.png",
  },
  {
    id: 2,
    title: "Formify",
    description:
      "Formify is a web application that helps users to fill out forms, which is provided with validations for each fields, also it included responsive web design.",
    techStack: "HTML, CSS, JavaScript, React",
    livePreview: "#",
    viewCode: "https://github.com/NagendharanNagu/Nagendharan-Shanmugam-Todolist",
    image: "src/assets/project2.png",
  },  
  
];

function MyWork() {
  return (
    <div className="Project_Details" id="project">
      <div className="main_title">
      <h1>My Creations</h1>
      <h3>Things I've built so far</h3>
      </div>
    <div className="project-list">
      {projects.map((project, id) => (
        <div className="project-card" key={id}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech stack:</strong> {project.techStack}
            </p>
            <div className="project-links">
              <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
              <a href={project.viewCode} target="_blank" rel="noopener noreferrer">
                <FaGithub/> View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MyWork;
