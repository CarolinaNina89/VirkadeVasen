import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Virkade Väsen © {year}</p>
    </div>
  );
}

export default Footer;
