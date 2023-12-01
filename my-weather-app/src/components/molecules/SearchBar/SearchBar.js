// SearchBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"; // Import the CSS file for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="search location"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
