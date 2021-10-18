import React, { useState, useLayoutEffect } from "react";
import { Parallax, useController } from "react-scroll-parallax";
import { Link } from "react-scroll";

import projects from "../../assets/Data/projects";
export default function Projects() {
  const { parallaxController } = useController();
  const [selected, setSelected] = useState(-1);
  const [showDesc, setShowDesc] = useState(-1);
  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler);
    return () => window.removeEventListener("load", handler);
  }, [parallaxController]);

  return (
    <div className="projects-section" id="projects">
      <div className="project-header">
        PROJECTS
        <div className="header-underline"></div>
      </div>
      <div className="projects-container">
        <div className="pointer-section">
          {projects.map((item, idx) => (
            <Link
              spy={true}
              to={`project-` + idx}
              activeClass="orbit-active orbit"
              className={`orbit`}
              key={idx}
              onClick={() => {
                if (idx === showDesc) setShowDesc(-1);
                else setShowDesc(idx);
              }}
            >
              <div className="dot"></div>

              <div className="pointer-description">{item.header}</div>
            </Link>
          ))}
        </div>
        <div className="left-section">
          {projects.map((item, idx) => (
            <div
              id={`project-` + idx}
              key={idx}
              style={{ paddingTop: "7rem" }}
              onClick={() => {
                if (selected === idx) setSelected(-1);
                else setSelected(idx);
              }}
            >
              <Parallax y={[50, -30]} tagOuter="figure">
                <img src={item.image} alt="projects" className="project-img" />
                <div className="project-name">{item.header}</div>
                <p
                  className={
                    selected === idx
                      ? `project-description project-selected`
                      : `project-description`
                  }
                >
                  {item.description}
                </p>
              </Parallax>
            </div>
          ))}
        </div>
        <div className="right-section">
          {projects.map((item, idx) => (
            <div key={idx}>
              <Parallax strength={200} key={idx} y={[10, 40]} tagOuter="figure">
                <div className="project-content right-content" key={idx}>
                  <h1>{item.header}</h1>
                  <p>{item.description}</p>
                </div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
