//Require module. The ./ ensure we are in the same dir as this file.

var weather = require('./weather.js');
var location = require('./location.js')

weather(function (currentWeather) {
	console.log(currentWeather);
});

location(function (location) {
	if (!location) {
		console.log('Cannot guess location.');
		return;
	}
	console.log('City: ' + location.city);
	console.log('Long/lat: ' + location.loc);
});
