import React from 'react';
import Weather from "../Images/weather-app.png";
import Drukel from "../Images/Drukel.png";
import "./Websites.css"

function Websites() {
  return (
    <div className="websites">
      <div className="websites-container">
        <div className="website-project">
          <img src={Weather} alt="weather app"/>
          <h3>Weather App</h3>
          <p>
            This is a weather app developed using React.js.
            It is used to assist the user to get real-time weather forecast of
            different cities.
          </p>
          <a href="https://drusilla-weather-app.vercel.app/" rel="noreferrer" target="_blank">View Project</a>
        </div>
        <div className="website-project">
          <img src={Drukel} alt="weather app"/>
          <h3>Shoees shop</h3>
          <p>
            This is a shoe shop website developed using php
          </p>
          <a href="http://druel.great-site.net/" rel="noreferrer" target="_blank">View Project</a>
        </div>
        <div className="website-project">
          <img src={Weather} alt="weather app"/>
          <h3>Weather App</h3>
          <p>
            This is a weather app developed using React.js.
            It is used to assist the user to get real-time weather forecast of
            different cities.
          </p>
          <a href="https://drusilla-weather-app.vercel.app/" rel="noreferrer" target="_blank">View Project</a>
        </div>
      </div>
      <div className="websites-container">
        <div className="website-project">
          <img src={Weather} alt="weather app"/>
          <h3>Weather App</h3>
          <p>
            This is a weather app developed using React.js.
            It is used to assist the user to get real-time weather forecast of
            different cities.
          </p>
          <a href="https://drusilla-weather-app.vercel.app/" rel="noreferrer" target="_blank">View Project</a>
        </div>
        <div className="website-project">
          <img src={Weather} alt="weather app"/>
          <h3>Weather App</h3>
          <p>
            This is a weather app developed using React.js.
            It is used to assist the user to get real-time weather forecast of
            different cities.
          </p>
          <a href="https://drusilla-weather-app.vercel.app/" rel="noreferrer" target="_blank">View Project</a>
        </div>
        <div className="website-project">
          <img src={Weather} alt="weather app"/>
          <h3>Weather App</h3>
          <p>
            This is a weather app developed using React.js.
            It is used to assist the user to get real-time weather forecast of
            different cities.
          </p>
          <a href="https://drusilla-weather-app.vercel.app/" rel="noreferrer" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  )
}

export default Websites