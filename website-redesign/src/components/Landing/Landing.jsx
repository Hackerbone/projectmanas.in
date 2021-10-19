import React from 'react';
import manasLogo from '../../assets/Logos/manas-with-border.png';
import manasMotto from '../../assets/Logos/manas-motto.svg';
// import Tilt from "react-tilt";
import Parallax from 'react-parallax-tilt';

export default function Landing() {
  return (
    <div className="landing-manas" id="landing">
      <div className="logo">
        <img src={manasLogo} alt={'Project Manas'} />
        <img src={manasMotto} alt={'Project Manas'} />
      </div>
      <Parallax speed={10}>
        <div className="shapes">
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
        </div>
      </Parallax>
    </div>
  );
}
