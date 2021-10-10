import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="manas-logo"></div>
      <div className={navOpen ? `navbar-links navbar-open` : `navbar-links`}>
        <a href="/#about" className="navbar-link">
          About
        </a>
        <Link to="/team" className="navbar-link">
          Team
        </Link>
        <a href="/#sponsors" className="navbar-link">
          Sponsors
        </a>
        <a href="/#projects" className="navbar-link">
          Projects
        </a>
        <a href="/#contact" className="navbar-link">
          Contact us
        </a>
      </div>
      <div className={`hamburger`} onClick={() => setNavOpen(!navOpen)}>
        <div className={navOpen ? `open` : ``} id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <FontAwesomeIcon icon={navOpen ? faTimes : faBars} onClick={() => setNavOpen(!navOpen)} /> */}
      </div>
    </div>
  );
}
