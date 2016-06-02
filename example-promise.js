var request = require('request');
var weather = require('./weather.js');
var location = require('./location.js')

function getWeather(location) {

	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=3e0246cd6661e75446a7625568010b08&q=' + encodedLocation + '&units=metric';

	// Return promise  so user has access to it.
	return new Promise (function (resolve, reject) {
		if (!location) {
			return reject('Oops, we could not find your location.');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to find weather for this location.');
			} else {
				//Print what is in the body. The 4 stands for the number of spaces by which JSON is indented.
				// console.log(JSON.stringify(body, null, 4));
				resolve('It is ' + body.main.temp + ' degrees Celcius in ' + body.name);

			}
		});
	});
}
// callback('It is ' + body.main.temp + ' degrees Celcius in ' + body.name);

// Calling the Promise
//If the getWeather function gets called succesfully, 'then' will be run.
getWeather('New York').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {

	console.log(error);
});