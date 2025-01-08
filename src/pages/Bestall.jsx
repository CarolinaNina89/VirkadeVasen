import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import availableColors from "../availableColors";
import magicalCreature from "../../public/assets/magicalCreature.png";

// Loops through all colors and puts a , between them
const [yarn, eyes] = availableColors;

function listColor(item) {
  return item.colors.join(", ");
}

//

function Bestall() {
  return (
    <div className="contentBackground">
      {/* SEO */}
      <Helmet>
        <meta
          name="description"
          content="Beställ ditt favoritväsen från Virkade Väsen. Utforska sortimentet av handgjorda skapelser och gör din beställning idag!"
        />
        <title>VirkadeVasen - Beställ</title>
      </Helmet>
      <Heading
        heading="Beställ"
        subheading="Så här får du hem ditt magiska väsen!"
      />
      <div className="greenBestall">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div id="grid">
          <div className="longTextBestall">
            <p className="highlighted">Vill du skapa något unikt?</p>
            <p>
              Jag erbjuder dig möjligheten att specialbeställa ditt väsen!
              <br />
              Gör det personligt genom att välja - <br />
              Färg på garnet: bland annat {listColor(yarn)}
              <br />
              Färg på ögonen: bland annat {listColor(eyes)}
              <br />
            </p>
            <p>
              När du skickar din förfrågan, ange dina önskemål för färg och
              detaljer så skapar jag något som passar just dig!
            </p>

            <p>
              Kontakta mig idag och gör din beställning – jag ser fram emot att
              skapa magi åt dig!
            </p>
            <p>Magiska hälsningar, Frida 🪄</p>
          </div>
          {/* <div className="centerImgResponsive">
              <img
                id="magicalCreatureImg"
                src={magicalCreature}
                alt="Magiskt väsen med stora ögon"
              />
            </div> */}

          <div className="contactButtons">
            <h6> Kontakta mig enkelt via </h6>

            <a
              className="button"
              href="https://www.facebook.com/VirkadeVasen"
              target="_blank"
            >
              Facebook Virkade Väsen
            </a>
            <p>eller</p>
            <a
              className="button"
              href="mailto:bestall@virkadevasen.se?subject=Ny beställning av Virkat Väsen&body=Hej!%0D%0AVad roligt att du vill beställa ett magiskt väsen!🌟%0D%0A%0D%0AFör att jag ska kunna skapa och skicka ditt väsen behöver jag följande information:%0D%0A%0D%0A- Ditt namn:%0D%0A- Din adress:%0D%0A- Vilket väsen (t.ex. Rio, Elli etc.):%0D%0A- Färger på garn:%0D%0A- Färg på ögon:%0D%0A%0D%0ANär vi har haft kontakt sker betalning enkelt via Swish.%0D%0A%0D%0ATack så mycket, och jag ser fram emot att skapa ditt magiska väsen!%0D%0AFrida"
            >
              bestall@virkadevasen.se
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bestall;
