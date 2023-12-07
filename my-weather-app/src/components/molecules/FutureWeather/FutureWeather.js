import React, { useEffect, useState } from "react";
import "./FutureWeather.css"; // Import the external CSS file

const FutureWeather = () => {
  const [locationName, setLocationName] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const fetchLocationName = async (latitude, longitude) => {
    const apiKey = "12b271b942d14750aed26b37703aa547";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch location name");
      }

      const data = await response.json();
      const firstResult = data.results[0];
      const formattedLocation = firstResult.formatted;
      setLocationName(formattedLocation);
    } catch (error) {
      console.error("Error fetching location name:", error.message);
    }
  };

  const fetchWeather = async (latitude, longitude) => {
    const apiKey = "d069695f718b2988a8067e329a6dc132";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData([data]);
    } catch (error) {
      console.error("Error fetching weather:", error.message);
    }
  };

  const getForecast = async (latitude, longitude) => {
    try {
      const apiKey = "d069695f718b2988a8067e329a6dc132";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch forecast data");
      }

      const data = await response.json();
      // Extract the data for the next 5 days without specific times
      const forecastData = data.list
        .filter((item) => item.dt_txt.includes("12:00:00")) // Choose a specific time (e.g., 12:00:00) for each day
        .slice(0, 5);

      setWeatherData(forecastData);
    } catch (error) {
      console.error("Error fetching forecast:", error.message);
    }
  };

  useEffect(() => {
    // Use the geolocation API to get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Fetch location name first
        fetchLocationName(latitude, longitude);
        // Fetch weather data using obtained coordinates
        fetchWeather(latitude, longitude);
        getForecast(latitude, longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error.message);
      }
    );
  }, []);

  return (
    <div>
      <div className="container">
        <div
          className="icon-container celsius-icon"
          title="Celsius"
          onClick={toggleTemperatureUnit}
        >
          <span role="img" aria-label="Celsius">
            ℃
          </span>
        </div>

        <div
          className="icon-container fahrenheit-icon"
          title="Fahrenheit"
          onClick={toggleTemperatureUnit}
        >
          <span role="img" aria-label="Fahrenheit">
            ℉
          </span>
        </div>

        <div className="location-name"></div>
      </div>

      <div className="weather-container">
        {weatherData.map((weather, index) => {
          const dateObject = new Date(weather.dt * 1000); // Convert timestamp to milliseconds
          const dayOfWeek = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
          }).format(dateObject);
          const dayOfMonth = dateObject.getDate();
          const month = new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(dateObject);

          return (
            <div key={index} className="weather-box">
              <div className="date">
                {index === 0 ? "Today" : `${dayOfWeek}, ${dayOfMonth} ${month}`}
              </div>
              <div className="icon-container">
                <img
                  src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="temperature">
                {isCelsius
                  ? `${weather.main.temp} ℃`
                  : `${((weather.main.temp * 9) / 5 + 32).toFixed(2)} ℉`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FutureWeather;
