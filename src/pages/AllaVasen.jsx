import React, { useState } from "react";
import VasenCard from "../components/VasenCard";
import vasenDetails from "../vasenDetails";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import VasenDetails from "./VasenDetails";
import prevVasen from "../../public/assets/arrow_changeVasen.webp";
import nextVasen from "../../public/assets/arrow_changeVasen.webp";

function AllaVasen() {
  // State to handle the actual väsen and if the modal is open
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpenPopup = (vasenId) => {
    const index = vasenDetails.findIndex((v) => v.id === vasenId);
    if (index !== -1) setCurrentIndex(index);
  };

  const handleClosePopup = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vasenDetails.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vasenDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentVasen =
    currentIndex !== null ? vasenDetails[currentIndex] : null;

  return (
    <div className="contentBackground">
      <Heading
        heading="Alla väsen"
        subheading="Utforska hela min magiska samling här!"
      />
      <div className="listVasen">
        {vasenDetails.map((vasen) => (
          <VasenCard
            key={vasen.id} // Use  id as key
            id={vasen.id} // Send ID to VasenCard for routing
            heading={vasen.heading}
            imgURL={vasen.imgURL}
            onLearnMore={() => handleOpenPopup(vasen.id)} //Opens the popup
          />
        ))}
      </div>
      {currentVasen && (
        <div className="modal">
          <img
            className="prevVasen"
            src={prevVasen}
            alt="arrow"
            onClick={handlePrev}
          />
          <div className="modal-overlay" onClick={handleClosePopup}></div>
          <div className="modal-content">
            <VasenDetails vasen={currentVasen} onClick={handleClosePopup} />
          </div>
          <img
            className="nextVasen"
            src={nextVasen}
            alt="arrow"
            onClick={handleNext}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AllaVasen;
