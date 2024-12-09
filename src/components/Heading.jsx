import React from "react";

function Heading({ heading, subheading }) {
  return (
    // <div className="contentDIV">
    <div className="headingImg">
      <img
        className="imgLine"
        id="leftKrumilur"
        src="/assets/vänsterKrumilur3.png"
        alt="horizontal squiggly line"
      />
      <div className="heading">
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
      </div>
      <img
        className="imgLine"
        id="rightKrumilur"
        src="/assets/högerKrumilur3.png"
        alt="horizontal squiggly line"
      />
    </div>
    // </div>
  );
}

export default Heading;
