import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from './WeatherForecast';

import './Weather.css';

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        humidity: response.data.temperature.humidity,
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        description: response.data.condition.description,
        date: new Date(response.data.time * 1000)
    });
}

function search() {
    const apiKey="b7c9ca10tacof91c4da4936c2801b27b";
    const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search(city);
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row"><div className="col-9"><input type="search" placeholder="Enter a city" autoFocus="on" onChange={handleCityChange} className="form-control" />
                </div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
                <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
        </div>
    );
} else {
    search();
    return "Loading...";
}

    
    
}