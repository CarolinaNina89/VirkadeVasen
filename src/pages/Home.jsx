import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

function Home() {
  return (
    <div className="contentBackground">
      <div className="homeDiv">
        <Heading
          heading="Välkommen"
          subheading={
            <>
              Upptäck mjuka och unika virkade väsen – <br /> handgjorda med
              kärlek och en gnutta magisk fantasi.
            </>
          }
        />
        <Link to="/alla-vasen">
          <Button text="Här hittar du alla mina väsen" />
        </Link>
        <div className="twistedImages">
          <img
            id="firstImg"
            src="/assets/axolotlFrans.jpg"
            alt="Axolotl Frans"
          />
          <img
            id="secondImg"
            src="/assets/enhörningRio.jpg"
            alt="Enhörningen Rio"
          />
          <img
            id="thirdImg"
            src="/assets/svampenDeadly.jpg"
            alt="Svampen Deadly"
          />
          <img id="fourthImg" src="/assets/babyDragon.jpg" alt="Baby Dragon" />
          <img id="fifthImg" src="/assets/kattenSpike.jpg" alt="Katten Spike" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
