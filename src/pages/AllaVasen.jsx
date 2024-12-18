import React from "react";
import { Helmet } from "react-helmet";
import VasenCard from "../components/VasenCard";
import vasenDetails from "../vasenDetails";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function AllaVasen() {
  return (
    <div className="contentBackground">
      {/* SEO */}
      <Helmet>
        <meta
          name="description"
          content="Upptäck hela vår kollektion av handgjorda virkade väsen! Från charmiga axolotlar till magiska enhörningar – här hittar du alla unika skapelser samlade på ett ställe. Välj ditt favoritväsen idag!"
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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AllaVasen;
