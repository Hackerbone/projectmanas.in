import React, { useState } from "react";
import members from "../../assets/Data/members";
import alums from "../../assets/Data/alums";
import mentors from "../../assets/Data/mentors";

import Horizontaltimeline from "react-horizontal-timeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Team() {
  const [showText, setShowText] = useState({});

  const [val, setVal] = useState({ value: 0, previous: 0 });

  const handleEnter = (idx) => () => {
    setShowText((state) => ({
      ...state,
      [idx]: !state[idx],
    }));
  };
  const handleExit = (idx) => () => {
    setShowText((state) => ({
      ...state,
      [idx]: !state[idx],
    }));
  };

  const VALUES = [
    "2014-01-02",
    "2015-01-02",
    "2016-01-02",
    "2017-01-01",
    "2018-01-01",
    "2019-01-01",
    "2020-01-01",
  ];

  const [year, setYear] = useState(2016);

  const linePadding = 120;

  return (
    <div className="teampage-container">
      <div className="teampage-header-container">
        <h1>Project Manas Team 2021</h1>
      </div>
      <div className="team">
        <span className="">
          Meet the <b>Team</b>{" "}
        </span>
        <div className="team-table">
          {members.map((item, idx) => {
            let imgLink = 'url("' + item.image + '")';

            return (
              <div className="member" key={idx}>
                <div
                  onMouseEnter={handleEnter(idx)}
                  onMouseLeave={handleExit(idx)}
                  className="profile-image"
                  style={{
                    backgroundImage: imgLink,
                  }}
                ></div>
                <div className="member-name">
                  {showText[idx] ? item.nickname : item.name}
                </div>
                <div className="member-designation">{item.designation}</div>
                <div className="social-link">
                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noreferrer"
                    id="link"
                    className={`icon-${item.facebook ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a
                    href={item.mail}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.mail ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.linkedin ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.github ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <span className="">
          Our <b>Mentors</b>{" "}
        </span>

        <div className="team-table">
          {mentors.map((item, idx) => {
            let imgLink = 'url("' + item.image + '")';

            return (
              <div className="member" key={idx}>
                <div
                  className="mentor-image"
                  style={{
                    backgroundImage: imgLink,
                  }}
                ></div>
                <div className="member-name">{item.name}</div>
                <div className="member-designation">{item.designation}</div>
                <div className="social-link">
                  <a
                    href={item.facebook}
                    target="_blank"
                    rel="noreferrer"
                    id="link"
                    className={`icon-${item.facebook ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a
                    href={item.mail}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.mail ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.linkedin ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-${item.github ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="alumni">
        <h1>
          Our <span>Alumni</span>
        </h1>
        <div className="timeline">
          <Horizontaltimeline
            index={val.value}
            styles={{ outline: "#fa8a13" }}
            linePadding={linePadding}
            indexClick={(index) => {
              setYear(2014 + index);
              setVal({ value: index, previous: val.value });
            }}
            getLabel={(date) => {
              return date.slice(0, 4);
            }}
            values={VALUES}
          />
        </div>

        <div className="alum-wrapper">
          <div className="alum-table">
            {alums.map((data, idx) => {
              let imgLink = 'url("' + data.image + '")';
              if (data.year === year) {
                return (
                  <div className="content" key={idx}>
                    <div className="alumni-member">
                      <div
                        className="profile-image"
                        style={{ backgroundImage: imgLink }}
                      ></div>
                      <div className="alumni-name">{data.name}</div>
                      <div className="alumni-designation">
                        {data.designation}
                      </div>
                      <div className="social-link">
                        <a
                          href={data.facebook}
                          target="_blank"
                          rel="noreferrer"
                          id="link"
                          className={`icon-${
                            data.facebook ? "shown" : "hidden"
                          }`}
                        >
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a
                          href={data.mail}
                          target="_blank"
                          rel="noreferrer"
                          className={`icon-${data.mail ? "shown" : "hidden"}`}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a
                          href={data.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className={`icon-${
                            data.linkedin ? "shown" : "hidden"
                          }`}
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`icon-${data.github ? "shown" : "hidden"}`}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              } else return "";
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
