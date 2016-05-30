var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=3e0246cd6661e75446a7625568010b08&q=Soestdijk&units=metric';


module.exports = function(callback) {

	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('Unable to find weather for this location.');
		} else {
			//Print what is in the body. The 4 stands for the number of spaces by which JSON is indented.
			// console.log(JSON.stringify(body, null, 4));
			callback('It is ' + body.main.temp + ' degrees Celcius in ' + body.name);

		}
	});
}

