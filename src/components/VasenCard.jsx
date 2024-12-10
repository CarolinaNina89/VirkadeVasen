import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function VasenCard({ id, heading, imgURL, onLearnMore }) {
  return (
    <div className="vasen">
      <Link to={`/vasen/${id}`}>
        <img
          className="imgVasen"
          src={imgURL}
          onClick={onLearnMore}
          alt="product_img"
        />
        <h4>{heading}</h4>
        <Button id={id} onClick={onLearnMore} text="Läs mer" />
      </Link>
    </div>
  );
}

export default VasenCard;
