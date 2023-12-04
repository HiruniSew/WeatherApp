import SearchPlacesButton from "../../components/atoms/SearchPlacesButton/SearchPlacesButton";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import "./HomePage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import photo1 from "../../assets/Images/photo1.png";
import CurrentLocation from "../../components/atoms/CurrentLocation/CurrentLocation";
const HomePage = () => {
  return (
    <div>
      {/* main section */}
      <div className="HomeMain">
        {/* section 1 */}
        <div class="Current-Weather-Home">
          <div class="current-location-weather">
            <CurrentLocation />
          </div>
        </div>

        {/* section 2*/}
        <div class="Future-Weather-Home">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
