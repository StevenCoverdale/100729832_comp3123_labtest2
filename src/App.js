import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';



const App = () => {
  const [city, setCity] = useState('Toronto');
  const [weather, setWeather] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, [city]);

  return (
    <div>
      <SearchBar city={city} setCity={setCity} />

      {weather && weather.sys && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default App;