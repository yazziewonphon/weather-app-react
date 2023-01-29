import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import './Weather.css';
import Snowflake from "./Snowflake.svg";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        humidity: response.data.temperature.humidity,
        iconUrl: {Snowflake},
        description: response.data.condition.description,
        date: new Date(response.data.time * 1000)
    });
}

if (weatherData.ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row"><div className="col-9"><input type="search" placeholder="Enter a city" autoFocus="on" className="form-control" />
                </div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
            <h1 className="city-name-display">{weatherData.city}</h1>
<ul>
    <li><FormattedDate date={weatherData.date} />
    </li>
<li className="text-capitalize">{weatherData.description}
</li>
</ul>
<div className="row weather-log-display">
    <div className="col-3 d-flex justify-content-start icon-and-temperature-display">
        <img src={weatherData.iconUrl} alt={weatherData.description} className="weather-icon" />
        <h2 className="current-temperature-display">{Math.round(weatherData.temperature)}
        <span className="unit">°F</span>
        </h2>
        </div>
        <div className="col-9 d-flex justify-content-end">
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
                </ul>
                </div>
                </div>
        </div>
    );
} else {
    const apiKey="b7c9ca10tacof91c4da4936c2801b27b";
    const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}

    
    
}