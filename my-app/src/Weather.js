import React from 'react';
import './Weather.css';
import Snowflake from "./Snowflake.svg";

export default function Weather() {
    return(
        <div className="Weather">
            <form>
                <div className="row"><div className="col-9"><input type="search" placeholder="Enter a city" autoFocus="on" className="form-control" />
                </div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
            <h1 className="city-name-display">Cedar Rapids</h1>
<ul><li>Friday 18:00</li><li>Snowy</li></ul>
<div className="row weather-log-display">
    <div className="col-3 d-flex justify-content-start icon-and-temperature-display">
        <img src={Snowflake} alt="Snowy" className="weather-icon" />
        <h2 className="current-temperature-display">24
        <span className="unit">°F</span>
        </h2>
        </div>
        <div className="col-9 d-flex justify-content-end">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li><li>Wind: 13 km/h</li>
                </ul>
                </div>
                </div>
        </div>
    );
}