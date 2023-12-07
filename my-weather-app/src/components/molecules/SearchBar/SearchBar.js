// SearchBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const apiKey = "d069695f718b2988a8067e329a6dc132";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Weather data not found");
      }

      const weatherData = await response.json();

      const locationData = {
        country: weatherData.sys.country,
        city: weatherData.name,
      };

      const searchData = {
        weatherData,
        locationData,
      };

      onSearch(searchData);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
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
