import React, { useState } from 'react';
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState('imperial');

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
}

function celsius() {
    return (props.imperial - 32) * 5 / 9;
}

if (unit === 'imperial') {
    return (
        <span className="weatherTemperature">
            <h2 className="current-temperature-display">
                {Math.round(props.imperial)}
        <span className="unit">°F | <a href="/" onClick={convertToCelsius}>°C</a></span>
        </h2>
        </span>
    );
} else {
    return (
        <span className="weatherTemperature">
            <h2 className="current-temperature-display">
                {Math.round(celsius())}
        <span className="unit"><a href="/" onClick={convertToFahrenheit}>°F</a> | °C</span>
        </h2>
        </span>
    );
}

    
}