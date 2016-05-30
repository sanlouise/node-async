var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=3e0246cd6661e75446a7625568010b08&q=Soest&units=metric';

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Unable to find weather for this location.');
	} else {
		//Print what is in the body. The 4 stands for the number of spaces by which JSON is indented.
		console.log(JSON.stringify(body, null, 4));
	}
});