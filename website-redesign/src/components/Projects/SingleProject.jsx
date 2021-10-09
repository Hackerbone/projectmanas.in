import React from "react";
// import projects from "../../assets/projects";

export default function SingleProject(props) {
  const { header, description, image } = props;
  return (
    <div className="single-project-section">
      <div className="left-section">
        <img src={image} alt="" />
      </div>
      <div className="right-section">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
