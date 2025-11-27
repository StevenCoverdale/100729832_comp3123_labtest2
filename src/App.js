import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';



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

      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;