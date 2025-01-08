import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import facebook from "../../public/assets/facebook.png";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // add eventlistener for click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove eventlistener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="naviframe">
      <div className="naviContent" ref={menuRef}>
        <div className="logoDiv">
          <Link to="/">
            <h1>Virkade Väsen</h1>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navi ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Hem
          </Link>
          <Link
            to="/alla-vasen"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Alla Väsen
          </Link>
          <Link
            to="/vasen-pa-vift"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Väsen på vift
          </Link>
          <Link
            to="/bestall"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Beställ
          </Link>
          <div className="socialMedia">
            <a href="https://www.facebook.com/VirkadeVasen" target="_blank">
              <img src={facebook} alt="facebook logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
