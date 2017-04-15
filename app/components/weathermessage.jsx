var React = require('react');

var WeatherMessage=({temp,location})=>{
    return (
            <div>
            <h2 className="text-center">Location: {location}</h2>
            <h3>Temperature: {temp}</h3>
            </div>
        );
}

module.exports = WeatherMessage;