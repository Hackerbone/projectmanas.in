import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar-container">
      <Link to="/" className="manas-logo"></Link>

      <div className={navOpen ? `navbar-links navbar-open` : `navbar-links`}>
        <a
          href="/#about"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
          About
        </a>
        <Link
          to="/team"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
          Team
        </Link>
        <a
          href="/#sponsors"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
          Sponsors
        </a>
        <a
          href="/#projects"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
          Projects
        </a>
        <a
          href="/faq"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
          FAQ
        </a>
        <a
          href="/#contact"
          className="navbar-link"
          onClick={() => setNavOpen(!navOpen)}
        >
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
