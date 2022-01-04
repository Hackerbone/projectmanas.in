import React from "react";
import adam from "../../assets/Projects/adam.png";
import walle from "../../assets/Projects/walle.png";
import eve from "../../assets/Projects/eve.png";
import solo from "../../assets/Projects/solo.png";

export default function projects_new() {
  return (
    <div className="projects" id="projects">
      <div className="filler"></div>
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <div className="header-underline"></div>
        <div class="module-border-wrap">
          <div class="module" style={{ backgroundImage: `url(${adam})` }}></div>
        </div>
        <div class="module-border-wrap">
          <div
            class="module"
            style={{ backgroundImage: `url(${walle})` }}
          ></div>
        </div>
        <div class="module-border-wrap">
          <div class="module" style={{ backgroundImage: `url(${eve})` }}></div>
        </div>
        <div class="module-border-wrap">
          <div class="module" style={{ backgroundImage: `url(${solo})` }}></div>
        </div>
      </div>
    </div>
  );
}
