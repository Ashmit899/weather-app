import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import CurrentLocation from './currentLocation';
function App() {
  const [data, setData] = useState({ "coord": { "lon": 77.2167, "lat": 28.6667 }, "weather": [{ "id": 721, "main": "Haze", "description": "haze", "icon": "50d" }, { "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "base": "stations", "main": { "temp": 91.49, "feels_like": 104.09, "temp_min": 91.49, "temp_max": 91.49, "pressure": 1003, "humidity": 66 }, "visibility": 4000, "wind": { "speed": 10.36, "deg": 260 }, "rain": { "1h": 1 }, "clouds": { "all": 40 }, "dt": 1692684625, "sys": { "type": 1, "id": 9165, "country": "IN", "sunrise": 1692663833, "sunset": 1692710692 }, "timezone": 19800, "id": 1273294, "name": "Delhi", "cod": 200 })
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7c804190ac1f8bc20ba71addaa6d42f4`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
    }
    //setLocation('') ; 
  }
  return (
    <div className="App">
      <div className='complete'>
        <div className='search'>
          <input value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type='text' />
        </div>
        <div className='container'>
            <div className='top'>
              <div className='location'>
                <p>{data.name}</p>
              </div>
              <div className='temp'>
                <h1>{data.main.temp}°F</h1>
              </div>
              <div className='description'>
                <p>{data.weather[0].main}</p>
              </div>
            </div>
            <div>
            <CurrentLocation />
          <div className='bottom'>
            <div className="feels">
              <p className='bold'>{data.main.feels_like} °F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{data.main.humidity}</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{data.wind.speed} MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
