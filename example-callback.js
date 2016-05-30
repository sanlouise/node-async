//Require module. The ./ ensure we are in the same dir as this file.
var weather = require('./weather.js');

weather(function (currentWeather) {
	console.log(currentWeather);
});
