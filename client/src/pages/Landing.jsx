import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <header className="nav-bar">
        <div className="logo">🌤️ SkyView</div>
        <nav>
          <a href="#">Features</a>
          <a href="#">Forecast</a>
          <a href="#">Download</a>
          <button className="try-now">Try Now</button>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-text">
          <h1>
            Real-time Weather <br />
            <span>At Your Fingertips</span>
          </h1>
          <p>
            Get accurate weather forecasts, severe weather alerts, and beautiful
            visualizations. Plan your day with confidence.
          </p>
          <div className="search-box">
            <input type="text" placeholder="Search for a city..." />
            <button>🔍</button>
          </div>

          <p className="app-description">
            With SkyView, you can easily access weather forecasts, real-time data,
            and detailed reports for cities across the globe. Sign up to get started!
          </p>

          <div className="landing-buttons">
            <Link to="/signup" className="btn">Sign Up</Link>
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>

        <div className="weather-card">
          <div className="weather-main">
            <h2>New York</h2>
            <p>Sunny</p>
            <h3>24°C</h3>
            <div className="temp-range">H: 27°  L: 18°</div>
            <div className="humidity">💧 45%</div>
          </div>
          <div className="weather-floating">
            <h4>London</h4>
            <p>Rainy</p>
            <h5>14°C</h5>
            <div>🌧️ 80% | 🌬️ 15 km/h</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
