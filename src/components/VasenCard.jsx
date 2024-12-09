import React from "react";
import Button from "./Button";

function VasenCard({ id, heading, imgURL, onLearnMore }) {
  return (
    <div className="vasen">
      <img
        className="imgVasen"
        src={imgURL}
        onClick={onLearnMore}
        alt="product_img"
      />
      <h4>{heading}</h4>
      <Button id={id} onClick={onLearnMore} text="Läs mer" />
    </div>
  );
}

export default VasenCard;
