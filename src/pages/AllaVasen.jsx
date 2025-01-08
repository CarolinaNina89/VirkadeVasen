import React, { useState } from "react";
import { Helmet } from "react-helmet";
import VasenCard from "../components/VasenCard";
import vasenDetails from "../vasenDetails";
import Heading from "../components/Heading";
import Search from "../components/Searchfunction";
import Footer from "../components/Footer";

function AllaVasen() {
  const [filteredVasen, setFilteredVasen] = useState(vasenDetails);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = vasenDetails.filter((vasen) =>
      Object.values(vasen).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setFilteredVasen(filtered);
  };

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
      {/* SEARCH */}
      <div className="searchDiv">
        <Search items={vasenDetails} onSearch={handleSearch} />
      </div>
      <div className="listVasen">
        {filteredVasen.length > 0 ? (
          filteredVasen.map((vasen) => (
            <VasenCard
              key={vasen.id} // Use id as key
              id={vasen.id} // Send ID to VasenCard for routing
              heading={vasen.heading}
              imgURL={vasen.imgURL}
            />
          ))
        ) : (
          <p className="noMatches">
            Oj då! De virkade väsenen verkar ha gått och gömt sig.
            <p> Prova att söka igen!</p>
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AllaVasen;
