const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const adress = process.argv[2];

if (!adress) {
    console.log('Input adress.');
} else {
    geocode(adress, (err, { latitude, longitude, location } = {}) => {
        if (err) {
            return console.log(err);
        } else {
            forecast(latitude, longitude, (err, forecastData) => {
                if (err) {
                    return console.log(err);
                }

                console.log('Location', location);
                console.log('Forecast', forecastData);
            });
        }
    });
}
