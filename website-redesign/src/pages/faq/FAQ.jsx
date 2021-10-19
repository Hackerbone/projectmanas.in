import React from "react";
import Accordion from "./Accordion";

import illustration__box from "../../assets/FAQ/images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../../assets/FAQ/images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../../assets/FAQ/images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "When do the Manas recruitments commence ?",
    answer: " November-December",
  },
  {
    question: "What lorem ipsum?",
    answer: "lorem ",
  },
  {
    question: "lorem ipsum?",
    answer: "lorem ipsum",
  },
  {
    question: "lorem ipsum?",
    answer: `lorem ipsum`,
  },
  {
    question: "lorem ipsum",
    answer: `lorem ipsum.`,
  },
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="component">
        <div className="illustration">
          <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
          />

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  );
};
export default FAQ;
