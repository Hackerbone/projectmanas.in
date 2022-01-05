import React, { useState } from "react";
import adam from "../../assets/Projects/adam.png";
import walle from "../../assets/Projects/walle.png";
import eve from "../../assets/Projects/eve.png";
import solo from "../../assets/Projects/solo.png";
import { Modal } from "antd";

export default function Projects_new() {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [isModal3Visible, setIsModal3Visible] = useState(false);

  const showModal1 = () => {
    setIsModal1Visible(true);
  };

  const showModal2 = () => {
    setIsModal2Visible(true);
  };

  const showModal3 = () => {
    setIsModal3Visible(true);
  };

  const handleCancel1 = () => {
    setIsModal1Visible(false);
  };

  const handleCancel2 = () => {
    setIsModal2Visible(false);
  };

  const handleCancel3 = () => {
    setIsModal3Visible(false);
  };

  return (
    <div className="projects" id="projects">
      <div className="filler"></div>
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <div className="header-underline"></div>

        <Modal
          footer={null}
          title="Our Projects"
          visible={isModal1Visible}
          onCancel={handleCancel1}
          centered={true}
        >
          <h1>ADAM</h1>
          <p>
            Adam, as its name suggests, is the very first of its kind -- our
            first ever entry into IGVC. Built rapidly over a course of a few
            months, Adam showcases our team's rapid prototyping and development
            abilities. Fortunately, our sleepless night paid off as Adam placed
            9th in the world, and 2nd in India. Adam was also 2nd in the IOP
            Challenge.
          </p>
        </Modal>

        <Modal
          footer={null}
          title="Our Projects"
          visible={isModal2Visible}
          onCancel={handleCancel2}
          centered={true}
        >
          <h1>WALL-E</h1>
          <p>
            Our first stride into the autonomous robots started with Wall-E. It
            was built as a proof of concept. Wall-E is where the journey and
            dream began.
          </p>
        </Modal>

        <Modal
          footer={null}
          title="Our Projects"
          visible={isModal3Visible}
          onCancel={handleCancel3}
          centered={true}
        >
          <h1>Mahindra Rise Prize</h1>
          <p>
            Eve is our entry into the $1 million challenge. It's the culmination
            of years of hard work and the very best of what our team can offer.
            It's packed with cutting edge technologies and techniques, made even
            more impressive as we're the youngest team to qualify for the
            finals.
          </p>
        </Modal>

        <div class="module-border-wrap">
          <div
            onClick={showModal1}
            class="module"
            style={{ backgroundImage: `url(${adam})` }}
          ></div>
        </div>

        <div class="module-border-wrap">
          <div
            onClick={showModal2}
            class="module"
            style={{ backgroundImage: `url(${walle})` }}
          ></div>
        </div>

        <div class="module-border-wrap">
          <div
            onClick={showModal3}
            class="module"
            style={{ backgroundImage: `url(${eve})` }}
          ></div>
        </div>

        <div class="module-border-wrap">
          <a href="https://projectmanas.in/solo" target="_blank">
            <div
              class="module"
              style={{ backgroundImage: `url(${solo})` }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
}
