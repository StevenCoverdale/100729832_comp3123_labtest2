import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';



const App = () => {
  const [city, setCity] = useState('Toronto');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  //const API_KEY = "17b19915a5efeef5de3b2a2305067d47";
  console.log("API KEY:", API_KEY);

  useEffect(() => {
    if (!city) return;

    setLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log("API response:", data);
        if (data.cod !== 200) {
          setError('City not found');
          setWeather(null);
        } else {
          setWeather(data);
          setError('');
        }
        setLoading(false);
      });
  }, [city, API_KEY]);



  return (
    <div className='app-container'>
      <SearchBar city={city} setCity={setCity} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;