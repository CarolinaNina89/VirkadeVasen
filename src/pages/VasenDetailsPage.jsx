import React from "react";
import vasenDetails from "../vasenDetails"; // Hämta väsendata

function VasenDetailsPage({ vasen }) {
  return (
    <div>
      <h1>{vasen.heading}</h1>
      <img src={vasen.imgURL} alt={vasen.heading} />
      <p>{vasen.description}</p>
    </div>
  );
}

export default VasenDetailsPage;
