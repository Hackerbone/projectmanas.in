import React from "react";
import SingleProject from "../../components/Projects/SingleProject";
import projects from "../../assets/projects";
export default function Projects() {
  console.log(projects);
  return (
    <div className="projects-section">
      <div className="project-header">
        PROJECTS
        <div className="header-underline"></div>
      </div>
      <div className="projects-container">
        <div className="left-section">
          {projects.map((item, idx) => (
            <img src={item.image} key={idx} alt={`project-${idx + 1}`} />
          ))}
        </div>
        <div className="right-section">
          {projects.map((item, idx) => (
            <div className="project-content" key={idx}>
              <h1>{item.header}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
