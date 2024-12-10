import React from "react";
import { useParams } from "react-router-dom";
import vasenDetails from "../vasenDetails"; // Hämta väsendata
import VasenDetails from "./VasenDetails";

function VasenDetailsPage() {
  const { id } = useParams(); // Hämta id från URL
  const vasen = vasenDetails.find((v) => v.id === id); // Hitta rätt väsen baserat på id

  console.log("ID from URL:", id);
  console.log("Found Väsen:", vasen);

  if (!vasen) {
    return <p>Väsen hittades inte! Kontrollera att länken är korrekt.</p>;
  }

  return (
    <div>
      <VasenDetails vasen={vasen} />
    </div>
  );
}

export default VasenDetailsPage;
