import React, { useState } from 'react';
import displayOptions from './displayOptions';
import { options } from './displayOptions';
import { getColor, getResponse } from './feel';

// api key
const api = {
  key: "3c886625921753ac0c0f5abd142bbbb8",
  base: "https://api.openweathermap.org/data/2.5/"
}
// func to convert c/f to imperial/metric
function convert() {
  return (options.unit === 'fahrenheit') ? 'imperial' : 'metric';
}

// main program
function App() {

  const [ Unit, newUnit ] = useState('fahrenheit');
  const [ Size, newSize ] = useState('m');

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if( evt.key === "Enter" ){
      fetch( `${api.base}weather?q=${query}&units=${convert()}&APPID=${api.key}` )
        .then( res => res.json() )
        .then( result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })
    }

  }

  const dateBuilder = (d) => {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return  `${day} ${date}, ${month} ${year}`
  }


  return (
    <div className={ (typeof weather.main != "undefined") ? 'app '  + getColor( options.size, options.unit, Math.round(weather.main.temp) ) : 'app' }>
      <main>
        
        <div className="search-box">
          <input
            type = "text"
            className = "search-bar"
            placeholder = "Enter a city..."
            onChange = { e => setQuery(e.target.value) }
            value = { query }
            onKeyPress = { search }
          ></input>

        </div>

        { (typeof weather.main != "undefined") ? (
          <div>
            <div>
              <div className="location-box">
                <div className="location"> { weather.name }, { weather.sys.country } </div>
                <div className="date"> { dateBuilder(new Date()) } </div>
              </div>
            </div>

            <div className="weather-box">
              <div className="temp">
                { Math.round( weather.main.temp ) }°{options.unit === "celsius" ? 'C' : 'F' }
              </div>
              <div className="weather">
                { weather.weather[0].description }
              </div>
              <br></br><br></br>
              <div className="rec">
                { getResponse(options.size, options.unit, Math.round(weather.main.temp), weather.weather[0].main ) }
              </div>
            </div>

          </div>
          ) : (
            <div>
            <div>
              <div className="location-box">
                <div className="location"></div>
                <div className="date"></div>
              </div>
            </div>

            <div className="weather-box">
              <div className="temp" id="mainTing">
                whatFIT
              </div>
              <div className="options">
                { displayOptions([ Size, newSize ], [ Unit, newUnit ]) }
              </div>
              <div className="weather" id="landing">
                made by ahmed
              </div>
            </div>

          </div>
            
            ) 
        }

      </main>
    </div>
  );
}

export default App;