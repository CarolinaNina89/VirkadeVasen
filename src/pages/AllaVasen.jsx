import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VasenCard from "../components/VasenCard";
import vasenDetails from "../vasenDetails";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import VasenDetails from "./VasenDetails";
import VasenDetailsPage from "./VasenDetailsPage";
import arrow from "../../public/assets/arrow_changeVasen.webp";
import { Helmet } from "react-helmet";

function AllaVasen() {
  // State to handle the actual väsen and if the modal is open
  const [currentIndex, setCurrentIndex] = useState(null);

  const location = useLocation(); // Hämta aktuella URL-parametrar
  const navigate = useNavigate(); // För att kunna navigera till nya URL:er

  useEffect(() => {
    const idFromUrl = location.pathname.split("/")[2]; // Hämta id från URL
    console.log("ID from URL:", idFromUrl);

    if (!idFromUrl) {
      console.log("No ID in URL yet, skipping effect");
      return; // Hoppa över om ID inte är definierat
    }

    const index = vasenDetails.findIndex((v) => v.id === idFromUrl);
    console.log("Index from vasenDetails:", index);

    if (index !== -1) {
      setCurrentIndex(index);
      console.log("Setting Current Index:", index);
      console.log("Current Väsen Data:", vasenDetails[index]);
    } else {
      setCurrentIndex(null);
      console.log("No valid index found, modal will not render");
    }
  }, [location]);

  // const handleOpenPopup = (vasenId) => {
  //   const index = vasenDetails.findIndex((v) => v.id === vasenId);
  //   if (index !== -1) setCurrentIndex(index);
  // };

  const handleClosePopup = () => {
    setCurrentIndex(null); // Stäng popup
    navigate("/alla-vasen"); // Navigera tillbaka till listan utan id
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
      {/* SEO */}
      <Helmet>
        <meta
          name="description"
          content="Upptäck hela vårt sortiment av virkade väsen! Utforska alla våra unika och handgjorda skapelser som ger liv till fantasin."
        />
        <title>VirkadeVasen - Alla väsen</title>
      </Helmet>
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
            // onLearnMore={() => handleOpenPopup(vasen.id)} //Opens the popup
          />
        ))}
      </div>

      {currentVasen && (
        <>
          {console.log("Modal is rendering")}
          <div className="modal-overlay" onClick={handleClosePopup}></div>

          <div className="modal">
            <h1>Test Modal</h1>
            <p>{JSON.stringify(currentVasen)}</p>
          </div>
        </>
      )}

      {/* Popup/modal */}
      {/* {currentVasen && console.log("Modal is about to render")}
      {currentVasen && (
        <>
          {console.log("Current Väsen:", currentVasen)}
          <div className="modal-overlay" onClick={handleClosePopup}></div>

          <div className="modal">
            <img
              className="prevVasen"
              src={arrow}
              alt="arrow"
              onClick={handlePrev}
            />

            <div className="modal-content">
              <VasenDetailsPage
                vasen={currentVasen}
              />
            </div>
            <img
              className="nextVasen"
              src={arrow}
              alt="arrow"
              onClick={handleNext}
            />
          </div>
        </>
      )} */}
      <Footer />
    </div>
  );
}

export default AllaVasen;
