var request = require('request');

module.exports = function(location) {
	return new Promise(function (resolve, reject) {

		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=3e0246cd6661e75446a7625568010b08&q=' + encodedLocation + '&units=metric';

		if (!location) {
			reject('Oops, we could not find your location.');
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
				resolve("It's " + body.main.temp + "ºC in " + body.name);

			}
		});
	});
};

