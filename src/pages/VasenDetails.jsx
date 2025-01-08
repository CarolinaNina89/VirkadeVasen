import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import arrowBack from "../../public/assets/arrow-back.png";
import vasenDetails from "../vasenDetails";
import Footer from "../components/Footer";

function VasenDetails() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  if (!vasenDetails || vasenDetails.length === 0) {
    return <p>Data om väsen är inte tillgänglig!</p>;
  }

  const vasen = vasenDetails.find((v) => v.id === id);

  if (!vasen) {
    return <p>Väsen hittades inte!</p>;
  }

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  const currentIndex = vasenDetails.findIndex((v) => v.id === id);
  const previousIndex =
    (currentIndex - 1 + vasenDetails.length) % vasenDetails.length;
  const nextIndex = (currentIndex + 1) % vasenDetails.length;

  const previousVasen = vasenDetails[previousIndex];
  const nextVasen = vasenDetails[nextIndex];

  return (
    <div className="contentBackground">
      {/* SEO */}
      <Helmet>
        <meta
          name="description"
          content={`Upptäck virkade ${vasen.name}! Ett handgjort virkat väsen med unika detaljer och magisk charm. Läs mer om dess egenskaper och varför hen är perfekt för dig eller som present.`}
        />
        <title>VirkadeVasen - {vasen.name}</title>
      </Helmet>
      <div className="arrowBackToAllVasen">
        <Link to="/alla-vasen" className="backToVasenLink">
          <img src={arrowBack} alt="arrow back to Alla Väsen" />
          <p>Tillbaka till alla väsen</p>
        </Link>
      </div>

      <div className="vasenPresentationDiv">
        {/* Picture of Väsen */}
        {/* MODAL */}
        {isModalOpen && (
          <div id="modalBiggerImg" className="modal open" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img
                src={modalImageSrc}
                id="biggerImage"
                alt="Bigger view of the picture"
              />
            </div>
          </div>
        )}
        <img
          className="imgVasenDetails"
          src={vasen.imgURL}
          alt={`Bild av det virkade väsenet ${vasen.name}`}
          onClick={() => handleImageClick(vasen.imgURL)}
        />
        <div className="VasenDetailsDiv">
          <div className="headingVasenDetailsDiv">
            <h5>{vasen.heading}</h5>
            <p className="vasenDetailPrice">{vasen.price}</p>
          </div>
          <div className="vasenQualities">
            <h4 className="vasenQualitiesHeading">Detaljer</h4>
            {/* List of qualities */}
            <ul>
              <li>
                <strong>Garnfärg:</strong> {vasen.yarn}
              </li>
              <li>
                <strong>Ögonfärg:</strong> {vasen.eyecolor}
              </li>
              <li>
                <strong>Storlek:</strong> {vasen.size}
              </li>
              <li>
                <strong>Stoppning:</strong> {vasen.stuffing}
              </li>
              <li>
                <strong>Övrigt:</strong> {vasen.extra}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Green Unique */}
      <div className="greenUnique">
        <h6>Gör {vasen.name} helt unik!</h6>
        <p>
          Du kan välja din favoritfärg på garn & ögon och få hen precis som du
          önskar!
        </p>
        <Link to="/bestall">
          <Button className="button" text="Hur beställer jag?" />
        </Link>
      </div>
      <div className="changeVasenDiv">
        <Link to={`/vasen/${previousVasen.id}`}>
          <p>{"< "} Föregående väsen</p>
        </Link>
        <Link to={`/vasen/${nextVasen.id}`}>
          <p>Nästa väsen {" >"}</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default VasenDetails;
