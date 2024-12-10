import React from "react";
import { useParams } from "react-router-dom";
import vasenDetails from "../vasenDetails";
import VasenDetails from "./VasenDetails";

function VasenDetailsPage() {
  const { id } = useParams(); // Get the id from the URL
  const vasen = vasenDetails.find((v) => v.id === id);

  if (!vasen) {
    return <p>Väsen inte funnet.</p>;
  }

  return (
    <div>
      <VasenDetails vasen={vasen} />
    </div>
  );
}

export default VasenDetailsPage;
