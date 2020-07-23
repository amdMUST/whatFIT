import React from 'react';

// basically the settings
var options = {
    unit: "fahrenheit",
    size: "m"
}

// going to declare the units and the size here
function DisplayOptions( [ Size, newSize ], [ Unit, newUnit ] ) {

    function setSize(e){
      const size = e.target.value;
      //console.log(options.size + ' => ' + size);
      options.size = size;
      newSize(size);
    }

    function setUnit(e){
      const unit = e.target.value;
      options.unit = unit;
      newUnit(unit);
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
            <div className={ (checkIfActiveUnit('fahrenheit')) ? 'unit active' : 'unit' }>
                <button value = "fahrenheit" className="unit-button" onClick= {setUnit}>
                    fahrenheit 
                </button>
            </div>
            
            <div className={ (checkIfActiveUnit('celsius')) ? 'unit active' : 'unit' }>
                <button value = "celsius" className="unit-button" onClick= {setUnit}>
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
            <div className={ (checkIfActiveSize('s')) ? 'size active' : 'size' }>
                <button value='s' className="size-button" onClick= {setSize}>
                    small
                </button>
            </div>
            <div className={ (checkIfActiveSize('m')) ? 'size active' : 'size' }>
                <button value='m' className="size-button" onClick= {setSize}>
                    medium
                </button> 
            </div>
            <div className={ (checkIfActiveSize('l')) ? 'size active' : 'size' }>
                <button value='l' className="size-button" onClick= {setSize}>
                    large
                </button>
            </div>
        </div>

    </div>
  
  
  );
}
export default DisplayOptions;
export { options };