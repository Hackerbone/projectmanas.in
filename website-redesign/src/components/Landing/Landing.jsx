import React from "react";
import manasLogo from "../../assets/Logos/manas-with-border.png";
import manasMotto from "../../assets/Logos/manas-motto.svg";
import Tilt from "react-tilt";
import Parallax from "react-rellax";

export default function Landing() {
  return (
    <div className="landing-manas" id="landing">
      <div className="logo">
        <img src={manasLogo} alt={"Project Manas"} />
        <img src={manasMotto} alt={"Project Manas"} />
      </div>
      <div className="shapes">
        <Tilt
          className="Tilt"
          options={({ max: 10 }, { scale: 0.8 })}
          style={{ height: "100%", width: "100%", scale: 0.8 }}
        >
          <Parallax speed={7}>
            <div className="ellipse69"></div>
            <div className="ellipse70"></div>
            <div className="ellipse71"></div>
            <div className="ellipse73"></div>
            <div className="polygon18"></div>
            <div className="polygon19"></div>
            <div className="polygon20"></div>
            {/* <div className="ellipse18"></div>
            <div className="ellipse19"></div> */}
            <div className="polygon21"></div>
            <div className="polygon22"></div>
          </Parallax>
        </Tilt>
      </div>
    </div>
  );
}
