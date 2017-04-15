var React = require('react');

var WeatherMessage=({temp,location})=>{
    return (
            <div>
            <h2 className="text-center">Location: {location}</h2>
            <h4 className="text-center">Temperature: {temp}</h4>
            </div>
        );
}

module.exports = WeatherMessage;