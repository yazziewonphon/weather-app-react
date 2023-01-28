import React from 'react';
import './Weather.css';

export default function Weather() {
    return(
        <div className="Weather">
            <h1>Cedar Rapids</h1>
<ul><li>Friday 18:00</li><li>Snowy</li></ul>
<div className="row"><div className="col-3">🌡️ 24°F</div><div className="col-9"><ul><li>Precipitation: 15%</li><li>Humidity: 72%</li><li>Wind: 13 km/h</li></ul></div></div>
        </div>
    );
}