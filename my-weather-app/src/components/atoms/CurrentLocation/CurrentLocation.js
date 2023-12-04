import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./CurrentLocation.css";
import SearchPlacesButton from "../SearchPlacesButton/SearchPlacesButton";

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentLocation();
    updateCurrentDay();
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchLocationName(latitude, longitude);
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchLocationName = async (latitude, longitude) => {
    const apiKey = "12b271b942d14750aed26b37703aa547";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

    try {
      const response = await axios.get(apiUrl);
      const firstResult = response.data.results[0];
      if (firstResult) {
        const city =
          firstResult.components.city ||
          firstResult.components.town ||
          firstResult.components.village;
        setLocationName(city);
      }
    } catch (error) {
      console.error("Error fetching location name:", error.message);
    }
  };

  const fetchWeather = async (latitude, longitude) => {
    const apiKey = "d069695f718b2988a8067e329a6dc132";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Weather API response:", response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error.message);
    }
  };

  const updateCurrentDay = () => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDay(`Today ${formattedDate}`);
  };

  return (
    <div>
      {/* serch section */}
      <div class="top">
        <div class="SearchPlacesButton">
          <SearchPlacesButton />
        </div>

        <div className="fetch-location-container" onClick={getCurrentLocation}>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="location-icon"
          />
        </div>
      </div>

      {/* weather section */}
      {weather && (
        <div className="weather-info-container1">
          <div>
            <p className="temperature-info">{weather.main.temp}°C</p>
            <p className="weather-description">
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}

      {/* location section */}
      {location && (
        <div className="weather-info-container">
          <p className="current-day">{currentDay}</p>
          <p className="location-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            {locationName}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrentLocation;
