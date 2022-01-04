import React from "react";
// import img1 from "../../assets/AboutUs/image1.jpg";
// import Parallax from "react-rellax";

export default function Aboutus() {
  return (
    // <div className="about-section">
    //   <div className="section-header">
    //     <h1>What do we do?</h1>
    //   </div>

    //   <div className="row ">
    //     <div className="about-desc">
    //       <div className="row">
    //         <h1 className="about-us-header">About Us</h1>
    //       </div>
    //       Project MANAS is the official AI and Robotics team of MAHE, Manipal
    //       established in 2014. We are the Grand Prize winners and won the Lescoe
    //       Cup at the Intelligent Ground Vehicle Competition which is held at
    //       Michigan. Our aim is to build India’s first driverless car and are
    //       among the top 13 participants in the Mahindra’s Rise Prize challenge.
    //     </div>
    //     <div className="about-rotated">ABOUT</div>
    //     <div className="image1"></div>
    //   </div>

    //   <div className="row-alt">
    //     <div className="about-desc">
    //       <h1 className="vision-header">Vision</h1>
    //       Project MANAS aims to inspire advanced research in Artificial
    //       Intelligence and oversee its implementation enabling automated systems
    //       to be made available to generous populous.
    //       <h1 className="vision-header">Mission</h1>
    //       Our mission is to uphold the tradition of pushing the limits of
    //       Artificial Intelligence and Bringing Bits to Life.
    //     </div>
    //     <div className="about-rotated">VISION</div>
    //     <div className="image1"></div>
    //   </div>
    //</div>

    <div className="about-section" id="about">
      <div className="filler"></div>
      <div className="section-header">
        <h1>
          <span>About</span> Us
        </h1>
        <div className="header-underline"></div>
      </div>

      <div className="row ">
        <div className="about-desc">
          <div className="row">
            <h1 className="about-us-header">Who are we?</h1>
          </div>
          Project MANAS is the official AI and Robotics team of MAHE, Manipal
          established in 2014. We are the Grand Prize winners and won the Lescoe
          Cup at the Intelligent Ground Vehicle Competition which is held at
          Michigan. Our aim is to build India’s first driverless car and are
          among the top 13 participants in the Mahindra’s Rise Prize challenge.
          <br />
          <br />
          <div className="row">
            <h1 className="about-us-header-small">Vision</h1>
          </div>
          Project MANAS aims to inspire advanced research in Artificial
          Intelligence and oversee its implementation enabling automated systems
          to be made available to generous populous.
          <br />
          <div className="row">
            <h1 className="about-us-header-small">Mission</h1>
          </div>
          <div className="last">
            Our mission is to uphold the tradition of pushing the limits of
            Artificial Intelligence and Bringing Bits to Life.
          </div>
        </div>
        <div className="image1"></div>
      </div>
    </div>
  );
}
