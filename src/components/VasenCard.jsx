import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function VasenCard({ id, heading, imgURL }) {
  return (
    <div className="vasen">
      <Link to={`/vasen/${id}`}>
        <img className="imgVasen" src={imgURL} alt="product_img" />
        <h4>{heading}</h4>
        <Button text="Läs mer" />
      </Link>
    </div>
  );
}

export default VasenCard;
