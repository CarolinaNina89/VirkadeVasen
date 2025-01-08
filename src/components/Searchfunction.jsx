import React, { useState } from "react";

function Search({ items, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div>
      {/* Searchfield */}
      <input
        type="text"
        placeholder="Sök efter väsen här..."
        value={searchQuery}
        onChange={handleSearch}
        className="searchInput"
      />
    </div>
  );
}
export default Search;
