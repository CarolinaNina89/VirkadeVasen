import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import availableColors from "../availableColors";
import logo from "../../public/assets/logga.webp";

// Loops through all colors and puts a , between them
const [yarn, eyes] = availableColors;

function listColor(item) {
  return item.colors.join(", ");
}

function Bestall() {
  return (
    <div className="contentBackground">
      <Heading
        heading="Beställ"
        subheading="Sprid glädje och magi med en virkad vän!"
      />
      <div className="imgWithTextLayout">
        <div className="longTexts">
          <p>
            Beställ enkelt genom att <br />
            📧 Maila oss på: bestall@virkadevasen.se <br />
            📱 Kontakta oss via Facebook:
            <a href="https://www.facebook.com/VirkadeVasen"> Virkade Väsen </a>
          </p>
          <p>Vill du skapa något unikt?</p>
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
        <img id="imgToText" src={logo} alt="logga" />
      </div>
      <Footer />
    </div>
  );
}

export default Bestall;
