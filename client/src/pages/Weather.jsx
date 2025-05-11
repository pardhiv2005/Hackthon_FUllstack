// import { useState } from "react";
// import API from "../services/api";
// import './Weather.css';


// function Weather() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get(`/weather/${city}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setWeather(res.data);
//     } catch (err) {
//       alert("Error fetching weather");
//     }
//   };

//   return (
//     <div className="weather-page">
//       <h2>Weather Checker</h2>
//       <input type="text" placeholder="Enter city" value={city}
//         onChange={(e) => setCity(e.target.value)} />
//       <button onClick={getWeather}>Get Weather</button>

//       {weather && (
//         <div className="weather-card">
//           <h3>{weather.name}</h3>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Weather;
// import { useState } from "react";
// import API from "../services/api";
// import './Weather.css';


// function Weather() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await API.get(`/weather/${city}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setWeather(res.data);
//     } catch (err) {
//       alert("Error fetching weather");
//     }
//   };

//   return (

//     <div className="weather-page">
//       <div className="weather-content">
//         <h2>Weather Checker</h2>
//         <input 
//           type="text" 
//           placeholder="Enter city" 
//           value={city}
//           onChange={(e) => setCity(e.target.value)} 
//         />
//         <button onClick={getWeather}>Get Weather</button>
  

//         {weather && (
//           <div className="weather-card">
//             <h3>{weather.name}</h3>
//             <p>Temperature: {weather.main.temp} °C</p>
//             <p>Weather: {weather.weather[0].description}</p>
//             <p>Humidity: {weather.main.humidity}%</p>
//           </div>
//         )}
//       </div>
      
//     </div>
//   );
// }

// export default Weather;
import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import './Weather.css';

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get(`/weather/${city}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWeather(res.data);
    } catch (err) {
      alert("Error fetching weather");
    }
  };

  return (
    <div className="weather-page">
      <div className="weather-content">
        <h2>Weather Checker</h2>

        <input 
          type="text" 
          placeholder="Enter city" 
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />

        <button onClick={getWeather}>Get Weather</button>

        {/* History Button
        <Link to="/history" className="history-link">
          <button className="history-button">🔁 View Search History</button>
        </Link> */}

        {/* Weather Display */}
        {weather && (
          <div className="weather-card">
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
