import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import market from "../../public/assets/market.jpg";
import { Helmet } from "react-helmet";

function VasenPaVift() {
  return (
    <div className="contentBackground">
      {/* SEO */}
      <Helmet>
        <meta
          name="description"
          content="Följ med våra virkade väsen på deras äventyr! Här hittar du information om var de kommer att ställas ut nästa gång, inklusive marknader och evenemang."
        />
        <title>VirkadeVasen - Väsen på vift</title>
      </Helmet>
      <Heading
        heading="Väsen på vift"
        subheading="Vart hittar du oss nästa gång?"
      />
      <div className="imgWithTextLayout">
        <div className="longTexts">
          <p>Mina virkade väsen älskar att ge sig ut på äventyr! </p>
          <p>
            Håll utkik efter oss på marknader och evenemang på Hönö med omnejd,
            där du kan klämma, känna och förälska dig i mina magiska handgjorda
            skapelser.
          </p>
          <p>
            För att se vart vi dyker upp härnäst, följ vår Facebooksida
            <a href="https://www.facebook.com/VirkadeVasen"> Virkade Väsen</a>.
            Jag uppdaterar löpande med datum, platser och all information du
            behöver för att träffa mina väsen live!
          </p>
          <p>
            Missar du oss på marknaden? Ingen fara – <br />
            jag tar alltid emot beställningar via mail eller Facebook.
          </p>
          <p>Följ oss på Facebook och låt mina väsen förgylla din dag!</p>
        </div>
        <img id="imgToText" src={market} alt="market" />
      </div>
      <Footer />
    </div>
  );
}

export default VasenPaVift;
