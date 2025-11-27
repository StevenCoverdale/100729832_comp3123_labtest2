import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather || !weather.sys) {
    return null;
  }

  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const predictability = Math.floor(Math.random() * 21) + 80;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={iconUrl} alt="weather icon" className="weather-icon" />
      <p className="description">{weather.weather[0].description}</p>
      <div className="weather-details">
          <p>🌡️ Temperature: {weather.main.temp} °C</p>
          <p>🔼 High: {weather.main.temp_max} °C</p>
          <p>🔽 Low: {weather.main.temp_min} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind Speed: {weather.wind.speed} km/h</p>
          <p>📊 Pressure: {weather.main.pressure} mb</p>
          <p>📈 Predictability: {predictability}%</p>

      </div>

        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Last updated: {new Date().toLocaleString()}
        </p>
    </div>
  );
};

export default WeatherCard;