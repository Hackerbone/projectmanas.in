import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-row">
            <div className="footer-coll">
              <h4>Get in Touch</h4>
              <ul>
                <li>
                  <a href="mailto:projectmanas.mit@gmail.com">
                    projectmanas.mit@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:tech_head@projectmanas.in">
                    tech_head@projectmanas.in
                  </a>
                </li>
                <li>
                  <a href="mailto:team_manager@projectmanas.in">
                    team_manager@projectmanas.in
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              <h4>Phone</h4>
              <ul>
                <li>Yatharth Agarwal: +917975602230</li>
                <li>Kallol Saha: +919606350096</li>
              </ul>
            </div>
            <div className="footer-coll">
              <h4>Address</h4>
              <ul>
                <li>Automobile Workshop,</li>
                <li>Near Kamath Circle</li>
                <li>MIT, Manipal, Karnataka 576104</li>
              </ul>
            </div>
            <div className="footer-coll">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/projectmanas">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/project.manas/?hl=en">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/projectmanas">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.youtube.com/channel/UCpgA3-I00lUVgXVeg1CNaFw">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.linkedin.com/company/project-manas/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
