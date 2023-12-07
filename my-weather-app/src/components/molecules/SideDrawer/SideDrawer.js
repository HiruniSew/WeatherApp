// SideDrawer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SideDrawer.css";
import SearchBar from "../SearchBar/SearchBar";

const SideDrawer = ({ isOpen, onClose, onSearch }) => {
  const handleSearch = (searchData) => {
    // Pass the search data to the parent component
    onSearch(searchData);

    // Close the side drawer after initiating the search
    onClose();
  };

  return (
    <div className={`side-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-header">
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={onClose}
        />
      </div>

      {/* Content of the side drawer */}
      <div className="searchbar-container">
        {/* Pass onSearch and onClose to SearchBar */}
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default SideDrawer;
