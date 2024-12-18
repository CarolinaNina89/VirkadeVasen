import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function VasenCard({ id, heading, imgURL }) {
  return (
    <div className="vasen">
      <Link to={`/vasen/${id}`}>
        <img
          className="imgVasen"
          src={imgURL}
          alt="Bild av det virkade väsendet"
        />
      </Link>
      <h4>{heading}</h4>
      <Link to={`/vasen/${id}`}>
        <Button id={id} className="button" text="Läs mer" />
      </Link>
    </div>
  );
}

export default VasenCard;
