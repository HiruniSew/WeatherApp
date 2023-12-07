import "./HomePage.css";
import React from "react";

import CurrentLocation from "../../components/molecules/CurrentLocation/CurrentLocation";
import FutureWeather from "../../components/molecules/FutureWeather/FutureWeather";
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
          <FutureWeather />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
