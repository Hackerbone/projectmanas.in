import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
// import SingleProject from "../../components/Projects/SingleProject";
import projects from "../../assets/Data/projects";
export default function Projects() {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="projects-section" id="projects">
      <div className="project-header">
        PROJECTS
        <div className="header-underline"></div>
      </div>
      <div className="projects-container">
        <div className="left-section">
          {projects.map((item, idx) => (
            <Parallax key={idx} y={[50, -30]} tagOuter="figure">
              <img
                src={item.image}
                alt="projects"
                className="project-img"
                onClick={() => setSelected(idx)}
              />
              <div className="project-name">{item.header}</div>
              {selected === idx ? (
                <p
                  className="project-description"
                  onClick={() => setSelected(!selected)}
                >
                  {item.description}
                </p>
              ) : (
                <></>
              )}
            </Parallax>
          ))}
        </div>
        <div className="right-section">
          {projects.map((item, idx) => (
            <Parallax strength={200} key={idx} y={[0, 40]} tagOuter="figure">
              <div className="project-content right-content" key={idx}>
                <h1>{item.header}</h1>
                <p>{item.description}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
}
