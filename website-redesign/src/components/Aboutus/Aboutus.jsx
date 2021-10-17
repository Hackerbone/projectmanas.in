import React from "react";
// import img1 from "../../assets/AboutUs/image1.jpg";
// import Parallax from "react-rellax";

export default function Aboutus() {
  return (
    <div className="Aboutus">
      <div class="container">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
      </div>

      <div className="about-us-text">
        <div className="text1-container">
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Project MANAS is the official AI and Robotics team of MAHE, Manipal
            established in 2014.
          </p>
          <p>
            We are the Grand Prize winners and won the Lescoe Cup at the
            Intelligent Ground Vehicle Competition which is held at Michigan.
            Our aim is to build India’s first driverless car and are among the
            top 13 participants in the Mahindra’s Rise Prize challenge.
          </p>
        </div>
        <div className="text2-container">
          <h1>
            <span>Vision</span> & Mission
          </h1>
          <p>
            Project MANAS aims to inspire advanced research in Artificial
            Intelligence and oversee its implementation enabling automated
            systems to be made available to generous populous.{" "}
          </p>
          <p>
            Our mission is to uphold the tradition of pushing the limits of
            Artificial Intelligence and Bringing Bits to Life.
          </p>
        </div>
      </div>
    </div>
  );
}
