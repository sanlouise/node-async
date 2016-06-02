//Require module. The ./ ensures we are in the same dir as this file.

var weather = require('./weather.js');
var location = require('./location.js')

var argv = require('yargs')
// No need to specify a command, there is only one so that would be redundant.
	.option('location', {

		alias: 'l',
		demand: false,
		describe: "Location for weather",
		type: 'string'

	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('We got information about this city!')
	weather(argv.l).then(function(currentWeather) {
		console.log(currentWeather);


	}).catch(function(error) {
		console.log(error);
	})

} else {
	console.log('You did not provide a valid address.');
	//If no valid location was given, execute the following
	//This returns the guessed location
	location().then(function (loc) {
		return weather(loc.city);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error)
	});
}
