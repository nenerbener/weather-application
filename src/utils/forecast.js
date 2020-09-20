const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=74acb11d24b8fa181f4df4288233e50e' + '&' + 'query=' + latitude + ',' + longitude
    console.log('url: ' + url)

    request({ url, json: true }, (error, { body }) => {
        console.log('error: ' + error)
        console.log('body.error: ' + JSON.stringify(body.error))
        console.log('body.success: ' + body.success)
        // console.log('body.toString(): ',body.toString())
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.success === false) {
            callback('blah blah blah: Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast