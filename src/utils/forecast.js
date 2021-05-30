const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=e301438f1a70b4711486ff2f76ffff00&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions + ' It is currently ' + response.body.current.temperature + 
            ' degress out. There is a ' + response.body.current.precip + '% chance of rain. And there is a humidity of ' + response.body.current.humidity + '%')
        }
    })
}

module.exports = forecast