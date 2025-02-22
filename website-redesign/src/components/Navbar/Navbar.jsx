import { useState, useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import mitLogo from "../../assets/Logos/mit-60.png";
import maheLogo from "../../assets/Logos/mit-logo.png";

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return {
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [manasLogo, setManasLogo] = useState(false);

  const { height } = useWindowDimensions();
  const changeNavbarLogo = () => {
    if (window.scrollY >= height - 80) {
      setManasLogo(true);
    } else {
      setManasLogo(false);
    }
  };

  window.addEventListener("scroll", changeNavbarLogo);
  return (
    <div className="navbar-container">
      <Link
        to="/"
        className={`${manasLogo ? "manas-logo" : "manas-logo-hidden"}`}
      ></Link>
      <div className={`${manasLogo ? "manas-logo-hidden" : "manipal-logos"}`}>
        <img src={mitLogo} alt={"mit logo"} />
        <img src={maheLogo} alt={"mahe logo"} />
      </div>
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
