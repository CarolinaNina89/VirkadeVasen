import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import closeModal from "../../public/assets/window_close.webp";

function VasenDetails({ vasen, onClick }) {
  if (!vasen) {
    return <p>Väsen hittades inte!</p>; // Handle wrong ID
  }

  return (
    <div className="vasenContentDiv">
      <img
        src={closeModal}
        alt="close window"
        className="imgCloseModal"
        onClick={onClick}
      />

      <div className="vasenPresentationDiv">
        {/* Picture of Väsen */}
        <img className="imgVasenModal" src={vasen.imgURL} alt="product_img" />
        <div className="headingVasenDetailsDiv">
          <h5>{vasen.heading}</h5>
          <p className="vasenDetailPrice">{vasen.price}</p>
          {/* <p className="vasenStory">"{vasen.story}"</p> */}
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
                <strong>Extra:</strong> {vasen.extra}
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
    </div>
  );
}

export default VasenDetails;
