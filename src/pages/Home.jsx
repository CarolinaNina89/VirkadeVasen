import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";
import TwistedImages from "../components/RandomImages";

function Home() {
  return (
    <div className="contentBackground">
      {/* SEO */}
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
        <div className="twistedImagesDiv">
          <TwistedImages />
          {/* <Link to="/vasen/frans">
            <img id="firstImg" src={frans} alt="Axolotl Frans" />
          </Link>
          <Link to="/vasen/rio">
            <img id="secondImg" src={rio} alt="Enhörningen Rio" />
          </Link>
          <Link to="/vasen/deadly">
            <img id="thirdImg" src={deadly} alt="Svampen Deadly" />
          </Link>
          <Link to="/vasen/saga">
            <img id="fourthImg" src={saga} alt="Draken Saga" />
          </Link>
          <Link to="/vasen/spike">
            <img id="fifthImg" src={spike} alt="Katten Spike" />
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
