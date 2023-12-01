import SearchPlacesButton from "../../components/atoms/SearchPlacesButton/SearchPlacesButton";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div>
      {/* main section */}
      <div className="HomeMain">
        {/* section 1 */}
        <div class="Current-Weather-Home">
          <div class="top">
            <div class="SearchPlacesButton">
              <SearchPlacesButton />
            </div>

            <div class="location-image-container">
              <span className="material-symbols-outlined">my_location</span>
            </div>
          </div>
        </div>

        {/* section 2*/}
        <div class="Future-Weather-Home"></div>
      </div>
    </div>
  );
};

export default HomePage;
