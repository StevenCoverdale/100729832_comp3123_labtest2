# React Weather App — COMP3123 Lab Test 
Steven Coverdale 100729832

A responsive weather application built with React for the COMP3123 Lab Test.  
The app fetches real-time weather data from the OpenWeatherMap API and displays it using a clean, user‑friendly UI designed directly around the API response.


## Features

- Search for any city and view real-time weather data  
- Displays:
  - Weather condition + icon
  - Temperature (current, high, low)
  - Humidity
  - Wind speed
  - Pressure
  - Simulated predictability
- Designed around the actual API response structure  
- Uses React state, effects, and props  
- Clean UI with icons, images, themes, and Google Fonts  
- Includes Postman API test screenshots  

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/StevenCoverdale/100729832_comp3123_labtest2.git

### 2. Install dependencies

npm install

### 3. Add your API key

Create a `.env` file in the project root:

REACT_APP_WEATHER_KEY=17b19915a5efeef5de3b2a2305067d47

### 4. Start the development server

npm start

## 🌐 API Used

This project uses the **OpenWeatherMap Current Weather API**:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

### Data fields used in the UI:

- name — City name  
- sys.country — Country code  
- weather[0].description — Weather condition  
- weather[0].icon — Weather icon  
- main.temp — Current temperature  
- main.temp_max — High temperature  
- main.temp_min — Low temperature  
- main.humidity — Humidity  
- main.pressure — Pressure  
- wind.speed — Wind speed  

Predictability is simulated because OpenWeatherMap does not provide this field.

## Screenshots

### App

<img width="1211" height="1185" alt="image" src="https://github.com/user-attachments/assets/64c7e3cb-0191-47f4-bb4e-831ee6c647a9" />

<img width="1218" height="1184" alt="image" src="https://github.com/user-attachments/assets/2f1331e3-5dee-4f1c-b5fd-a900e553d402" />

### Postman API Response
GET: https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=17b19915a5efeef5de3b2a2305067d47&units=metric

<img width="1359" height="698" alt="image" src="https://github.com/user-attachments/assets/1cb0b2c5-61cc-4e86-9200-759e3833f39d" />

<img width="1305" height="1657" alt="image" src="https://github.com/user-attachments/assets/70ed97bc-1218-4840-be06-2a65a2ed08b2" />

## Notes & Assumptions

- Weather icons are sourced directly from OpenWeatherMap using the icon code from the API response.
- Predictability is randomized between 80–100% because the API does not include this metric.
- The UI is intentionally designed around the API response structure.
- Google Font “Inter” is used for clean typography.
- Background image is a free seasonal image from Unsplash.
- The app demonstrates:
  - useState for managing input and API data  
  - useEffect for fetching data when the city changes  
  - Props for passing data to child components  
- No backend server is required — the app communicates directly with the OpenWeatherMap API.
