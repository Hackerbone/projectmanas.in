import React, { useState } from "react";
import members from "../../assets/Data/members";
import alums from "../../assets/Data/alums";
import Stepper from "react-stepper-horizontal";
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
            let nick = item.nickname;
            let fb = item.facebook;
            let email = item.mail;
            let linkedin = item.linkedin;
            let git = item.github;

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
                  {showText[idx] ? nick : item.name}
                </div>
                <div className="member-designation">{item.designation}</div>
                <div className="social-link">
                  <a
                    href={item.facebook}
                    target="_blank"
                    id="link"
                    className={`icon-${item.facebook ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a
                    href={item.mail}
                    target="_blank"
                    className={`icon-${item.mail ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    className={`icon-${item.linkedin ? "shown" : "hidden"}`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
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
        <h1>Our Alumni</h1>
        <div
          className="timeline"
          style={{ width: "60%", height: "100px", margin: "0 auto" }}
        >
          <Horizontaltimeline
            index={val.value}
            linePadding={linePadding}
            indexClick={(index) => {
              setYear(2016 + index);
              setVal({ value: index, previous: val.value });
            }}
            getLabel={(date) => {
              return date.slice(0, 4);
            }}
            values={VALUES}
          />
        </div>
        <div className="team-table">
          {alums.map((data) => {
            let imgLink = 'url("' + data.image + '")';
            if (data.year == year) {
              return (
                <div className="content">
                  <div className="alumni-member">
                    <div
                      className="profile-image"
                      style={{ backgroundImage: imgLink }}
                    ></div>
                    <div className="alumni-name">{data.name}</div>
                    <div className="alumni-designation">{data.designation}</div>
                    <div className="social-link">
                      <a
                        href={data.facebook}
                        target="_blank"
                        id="link"
                        className={`icon-${data.facebook ? "shown" : "hidden"}`}
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>

                      <a
                        href={data.mail}
                        target="_blank"
                        className={`icon-${data.mail ? "shown" : "hidden"}`}
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      <a
                        href={data.linkedin}
                        target="_blank"
                        className={`icon-${data.linkedin ? "shown" : "hidden"}`}
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a
                        href={data.github}
                        target="_blank"
                        className={`icon-${data.github ? "shown" : "hidden"}`}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
