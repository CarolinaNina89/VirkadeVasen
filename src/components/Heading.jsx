import React from "react";
import krumilurH from "../../public/assets/högerKrumilur3.webp";
import krumilurV from "../../public/assets/vänsterKrumilur3.webp";

function Heading({ heading, subheading }) {
  return (
    <div className="headingImg">
      <img className="imgLine" id="leftKrumilur" src={krumilurV} alt="" />
      <div className="heading">
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
      </div>
      <img className="imgLine" id="rightKrumilur" src={krumilurH} alt="" />
    </div>
  );
}

export default Heading;
