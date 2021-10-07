import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div className="row">
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <ul>
                <li>projectmanas.mit@gmail.com</li>
                <li>tech_head@projectmanas.in</li>
                <li>team_manager@projectmanas.in</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Phone</h4>
              <ul>
                <li>Yatharth Agarwal: +917975602230</li>
                <li>Kallol Saha: +919606350096</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>Automobile Workshop,</li>
                <li>Near Kamath Circle</li>
                <li>MIT, Manipal, Karnataka 576104</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
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
