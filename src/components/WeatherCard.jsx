const WeatherCard = ({ weather }) => {
  if (!weather || !weather.sys || !weather.weather || !weather.main) return null;

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp} °C</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;