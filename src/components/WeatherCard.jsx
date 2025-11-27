import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.sys || !weather.weather || !weather.main || !weather.wind) {
    return null;
  }

  const predictability = Math.floor(Math.random() * 21) + 80; // Simulated

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p><strong>{weather.weather[0].description}</strong></p>
      <div className="weather-details">
        <p>Temperature: {weather.main.temp} °C</p>
        <p>High: {weather.main.temp_max} °C</p>
        <p>Low: {weather.main.temp_min} °C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} km/h</p>
        <p>Pressure: {weather.main.pressure} mb</p>
        <p>Predictability: {predictability}%</p>

        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;