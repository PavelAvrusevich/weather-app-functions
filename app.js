const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=75b4a92051249c15337e6ae5b9a02c24&query=Minsk';

request({ url: url, json: true }, (err, response) => {
    if (err) {
        console.log('Unable to connect to weather service.');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log(
            `${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
        );
    }
});

const town = 'Los&20Angeles';
const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los&Angeles.json?access_token=pk.eyJ1IjoicGF2ZWwtYXZydXNldmljaCIsImEiOiJja25kZzQ5ODcyYXNtMnFwOXN5b2IwYnR2In0.JwY1sIvSVzh2-s2z6Rf4QQ&limit=1`;

request({ url: geoCodeUrl, json: true }, (err, response) => {
    if (err) {
        console.log('Unable to connect to location services.');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find this location. Try to change find term.');
    } else {
        const [longitude, latitude] = response.body.features[0].center;
        console.log(longitude, latitude);
    }
});
