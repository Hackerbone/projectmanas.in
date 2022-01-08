import React from "react";
import Accordion from "./Accordion";

import illustration__box from "../../assets/FAQ/images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../../assets/FAQ/images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../../assets/FAQ/images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "When do the Project MANAS' recruitments commence?",
    answer:
      "The recruitments are held every odd semester of the academic year.",
  },
  {
    question: "Who are eligible for the recuitments?",
    answer: "First and second year students only.",
  },
  {
    question: "What are the different subsystems in Project MANAS?",
    answer:
      "Project MANAS' subsystems consists of AI, Sensing and Automation, Mechanical and Management.",
  },
  {
    question: "Are there any pre-requisites for the interviews?",
    answer: "No pre-requisites are required for the interview.",
  },
  {
    question: "What is the taskphase?",
    answer: `Once a candidate has cleared the interview round, they enter the taskphase where the individual learns the essential skills to make it to the team. Once completed the taskphase successfully, the individual officially becomes a part of the team.`,
  },
  {
    question: "How does being in a student project affect academics?",
    answer: `Handling academics along with student project work is manageable as far as one has the right time management skills.`,
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
