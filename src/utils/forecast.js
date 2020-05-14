const request = require('request')

const WEATHER_STACK_TOKEN = 'af2143b170f4451cd3635429d2f6b639'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + WEATHER_STACK_TOKEN + '&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels likes ' + body.current.feelslike + ' degrees out')
        }
    })
}

module.exports = forecast
