import React from "react";
import { Parallax } from "react-scroll-parallax";
// import SingleProject from "../../components/Projects/SingleProject";
import projects from "../../assets/Data/projects";
export default function Projects() {
  console.log(projects);
  return (
    <div className="projects-section" id="projects">
      <div className="project-header">
        PROJECTS
        <div className="header-underline"></div>
      </div>
      <div className="projects-container">
        <div className="left-section">
          {projects.map((item, idx) => (
            <Parallax strength={-300} bgImage={item.image} key={idx}>
              <div
                style={{
                  maxHeight: "70vh",
                  minHeight: "50vh",
                  height: "100%",
                  marginTop: 30,
                }}
                className="parallax-div"
              />
            </Parallax>
          ))}
        </div>
        <div className="right-section">
          {projects.map((item, idx) => (
            <Parallax strength={200} key={idx}>
              <div
                className="project-content"
                key={idx}
                style={{
                  maxHeight: "70vh",
                  minHeight: "50vh",
                  paddingRight: "5rem",
                }}
              >
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
