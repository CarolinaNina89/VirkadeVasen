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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
