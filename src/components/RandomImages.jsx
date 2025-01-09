import React from "react";
import { Link } from "react-router-dom";
import vasenDetails from "../vasenDetails";

function TwistedImages() {
  const shuffledVasen = [...vasenDetails]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const rotations = ["-12deg", "12deg", "0deg", "-12deg", "12deg"];

  return (
    <div className="twistedImagesDiv">
      {shuffledVasen.map((vasen, index) => (
        <Link key={vasen.id} to={`/vasen/${vasen.id}`}>
          <img
            src={vasen.imgURL}
            alt={vasen.name}
            style={{ rotate: rotations[index] }}
          />
        </Link>
      ))}
    </div>
  );
}

export default TwistedImages;
