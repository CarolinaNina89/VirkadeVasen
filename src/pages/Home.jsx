import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";
import frans from "../../public/assets/axolotlFrans.jpg";
import rio from "../../public/assets/enhörningRio.jpg";
import deadly from "../../public/assets/svampenDeadly.jpg";
import dragon from "../../public/assets/babyDragon.jpg";
import spike from "../../public/assets/kattenSpike.jpg";

function Home() {
  return (
    <div className="contentBackground">
      <Helmet>
        <meta
          name="description"
          content="Välkommen till Virkade Väsen! Utforska handgjorda virkade väsen – från axolotlar till enhörningar. Låt dig inspireras av dessa unika och magiska skapelser."
        />
        <title>VirkadeVasen - Hem</title>
      </Helmet>
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
          <img id="firstImg" src={frans} alt="Axolotl Frans" />
          <img id="secondImg" src={rio} alt="Enhörningen Rio" />
          <img id="thirdImg" src={deadly} alt="Svampen Deadly" />
          <img id="fourthImg" src={dragon} alt="Draken Saga" />
          <img id="fifthImg" src={spike} alt="Katten Spike" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
