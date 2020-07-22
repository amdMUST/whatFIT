import React, { useState } from 'react';


// api key
const api = {
  key: "3c886625921753ac0c0f5abd142bbbb8",
  base: "https://api.openweathermap.org/data/2.5/"
}

// basically the settings
var options = {
	unit: "imperial",
  size: "s"
}

// main program
function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if( evt.key === "Enter" ){
      console.log(`${api.base}weather?q=${query}&units=${options.unit}&APPID=${api.key}`);
      fetch( `${api.base}weather?q=${query}&units=${options.unit}&APPID=${api.key}` )
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
        ? ( (weather.main.temp > 77) 
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
                { Math.round( weather.main.temp ) }°{options.unit === "metric" ? 'C' : 'F' }
              </div>
              <div className="weather">
                { weather.weather[0].description }
              </div>
              <br></br>
              <div className="rec">
                bro its so hot pls dont wear anything
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
                { displayOptions() }
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


// going to declare the units and the size here
function displayOptions() {

    function getSize() {
        return options.size;
    }
    function getUnit() {
        return options.unit;
    }

    function setSize(theSize){
        console.log(getSize())
        options.size = theSize;
        console.log(getSize())
    }

    function setUnit(theUnit){
        console.log(getUnit())
        options.unit = theUnit;
        console.log(getUnit())
    }

    function checkIfActiveUnit(unit){
        return unit === options.unit;
    }

    function checkIfActiveSize(size){
      return size === options.size;
  }

  // gives you all the options you can change
  return (
    <div className="options">

        <div className="options-unit">
            How do you like
            <br></br>
            your weather?
            <br></br><br></br>
            <div className="unit">
                <button 
                    className="unit-button" 
                    id = "unit-button1"
                    onClick= { () => setUnit("imperial") }
                    
                 >
                    fahrenheit 
                </button>
            </div>
            
            <div className="unit">
                <button 
                className="unit-button" 
                id = "unit-button2"
                onClick= { () => setUnit("metric") }

                >
                    celsius
                </button>
            </div>
            <br></br>
        </div>

        <div className="options-size">
            What size body 
            <br></br>
            do you wear?
            <br></br><br></br>
            <div className="size">
                <button className="size-button" onClick= { () => setSize("s") }>
                    thin
                </button>
            </div>
            <div className="size">
                <button className="size-button" onClick= { () => setSize("m") }>
                    regular
                </button> 
            </div>
            <div className="size">
                <button className="size-button" onClick= { () => setSize("l") }>
                    beefy
                </button>
            </div>
        </div>

    </div>
  
  
  );
}