const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url =
        'http://api.weatherstack.com/current?access_key=75b4a92051249c15337e6ae5b9a02c24&query=' +
        encodeURIComponent(latitude) +
        ',' +
        encodeURIComponent(longitude);
    request({ url: url, json: true }, (err, response) => {
        if (err) {
            callback('Enable to connet to weather service.', undefined);
        } else if (response.body.err) {
            callback('Enable to find location', undefined);
        } else {
            callback(
                undefined,
                `${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
            );
        }
    });
};

module.exports = forecast;
