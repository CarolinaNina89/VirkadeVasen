import React from "react";
import krumilörH from "../../public/assets/högerKrumilur3.png";
import krumilörV from "../../public/assets/vänsterKrumilur3.png";

function Heading({ heading, subheading }) {
  return (
    <div className="headingImg">
      <img
        className="imgLine"
        id="leftKrumilur"
        src={krumilörV}
        alt="horizontal squiggly line"
      />
      <div className="heading">
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
      </div>
      <img
        className="imgLine"
        id="rightKrumilur"
        src={krumilörH}
        alt="horizontal squiggly line"
      />
    </div>
  );
}

export default Heading;
