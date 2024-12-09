import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../public/assets/facebook.png";

function Navigation() {
  return (
    <div className="naviframe">
      <div className="naviContent">
        <div className="logoDiv">
          <Link to="/">
            <h1>Virkade Väsen</h1>
          </Link>
        </div>
        <div className="navi">
          <Link to="/" className="nav-button">
            Hem
          </Link>
          <Link to="/alla-vasen" className="nav-button">
            Alla Väsen
          </Link>
          <Link to="/vasen-pa-vift" className="nav-button">
            Väsen på vift
          </Link>
          <Link to="/bestall" className="nav-button">
            Beställ
          </Link>
          <div className="socialMedia">
            <a href="https://www.facebook.com/VirkadeVasen" target="_blank">
              <img src={facebook} alt="facebook_logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
