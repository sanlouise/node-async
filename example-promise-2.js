// function doWork (shouldFail) {

// 	return new Promise(function(resolve, reject) {

// 		setTimeout(function() {
// 			if (typeof shouldFail === 'boolean' && shouldFail === true) {
// 				reject('error message');
// 			} else {
// 				resolve ('success message');
// 			}
// 		}, 1000);

// 	});
// }

// //Chaining promises. Inside of 'then', we can return a promise.
// doWork().then(function(message) {
// 	console.log(message)
// 	// Call doWork again. Runs for a 2nd time.
// 	return doWork(true);
// 	//After the second promise resolves successfully, fire off the following.
// }).then(function () {
// 	console.log(message)
// //This will run if any of the previous promises fail.
// }).catch(function(error) {
// 	console.log(error);
// });

function getLocation(location) {
	return new Promise(function(resolve, reject) {
		resolve('New York');
	});

}

function getWeather (location) {
	return new Promise(function(resolve, reject) {
		resolve('It is a certain temperature in ' + location)
	});
}

getLocation().then(function(location) {
	// Data is passed below from one promise to the other.
	return getWeather(location);
}).then(function(currentWeather) {
	console.log(currentWeather);
});
