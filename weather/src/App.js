import React, { useState } from 'react';

// api key
const api = {
  key: "3c886625921753ac0c0f5abd142bbbb8",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  var unit = "imperial";
  var weight = "skinny"

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if( evt.key === "Enter" ){
      fetch( `${api.base}weather?q=${query}&units=${unit}&APPID=${api.key}` )
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
    <div className={ 
      (typeof weather.main != "undefined") 
        ? ( (weather.main.temp > 79) 
          ? 'app warm' : 'app cool' ) 
        : 'app' 
    }>
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
                { Math.round( weather.main.temp ) }°{unit === "imperial" ? 'F' : 'C' }
              </div>
              <div className="weather">
                { weather.weather[0].main }
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
              <div className="temp">
                whatFit
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
