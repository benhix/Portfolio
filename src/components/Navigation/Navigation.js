// Navigation.js
import React, { useState } from "react";
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="layout">
      <ul>
        <li className="layout-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Offset for fixed navbar, adjust as needed
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="layout-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Offset for fixed navbar, adjust as needed
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="layout-item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} // Offset for fixed navbar, adjust as needed
            duration={500}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>
        {/* Add links for other sections */}
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}></div>

      {isMenuOpen && (
        <nav>
          <ul className="mobile-menu">
            <li className="mobile-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70} // Offset for fixed navbar, adjust as needed
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70} // Offset for fixed navbar, adjust as needed
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="mobile-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70} // Offset for fixed navbar, adjust as needed
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            {/* Add links for other sections */}
          </ul>
        </nav>
      )}
      
    </nav>
  );
}

export default Navigation;
