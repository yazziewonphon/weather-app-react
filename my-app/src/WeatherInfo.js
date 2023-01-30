import React from 'react';
import FormattedDate from "./FormattedDate";
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo"><h1 className="city-name-display">{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} />
        </li>
    <li className="text-capitalize">{props.data.description}
    </li>
    </ul>
    <div className="row weather-log-display">
        <div className="col-5 d-flex justify-content-start icon-and-temperature-display">
            <img src={props.data.iconUrl} alt={props.data.description} className="weather-icon" />
            
            <WeatherTemperature imperial={props.data.temperature} />
            
            </div>
            <div className="col-7 d-flex justify-content-end">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                    </div>
                    </div>
                    </div>);
}