import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="manas-logo"></div>
      <div className={navOpen ? `navbar-links navbar-open` : `navbar-links`}>
        <div className="navbar-link">About</div>
        <div className="navbar-link">Team</div>
        <div className="navbar-link">Sponsors</div>
        <div className="navbar-link">Projects</div>
        <div className="navbar-link">Contact us</div>
      </div>
      <div className={navOpen ? `hamburger hamburger-active` : `hamburger`}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} onClick={() => setNavOpen(!navOpen)} />
      </div>
    </div>
  );
}
