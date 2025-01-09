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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent standard form send
    document.activeElement.blur(); //Minimize the keyboard
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Searchfield */}
      <input
        type="text"
        placeholder="Sök på t.ex. namn, färg, typ eller storlek..."
        value={searchQuery}
        onChange={handleSearch}
        className="searchInput"
      />
    </form>
  );
}
export default Search;
