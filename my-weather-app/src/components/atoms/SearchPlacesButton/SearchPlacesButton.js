// SearchPlacesButton.js
import React, { useState } from "react";
import SideDrawer from "../../molecules/SideDrawer/SideDrawer"; // Import the SideDrawer component
import "./SearchPlacesButton.css"; // Import the CSS file for styling

const SearchPlacesButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <button className="search-places-button" onClick={toggleDrawer}>
        Search Places
      </button>
      <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default SearchPlacesButton;
