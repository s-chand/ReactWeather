var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f10d385199c903adf8fc68814b5' +
        '525c0&units=metric&';
module.exports = {
    getTemp: function (location) {
        //f10d385199c903adf8fc68814b5525c0
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios
            .get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    return Promise.reject(res.data.message)
                } else {
                    return res.data.main.temp + " º Celsius";
                }
            }, function (res) {
                return Promise.reject(res)
            })
    }
}