import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = `b7c9ca10tacof91c4da4936c2801b27b`;
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="WeatherForecast-icon"
          />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19</span> | {""}
            <span className="WeatherForecast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
