function doWork (data, callback) {
	callback('done');
}

function doWorkPromise (data) {
	return new Promise(function (resolve, reject) {

		setTimeout(function() {
			resolve('Everything worked fine!');

		}, 1000);

		// resolve('Everything worked fine!');
		// reject({
		// 	error: 'Oops, something went wrong.'
		// });

	});
}

doWorkPromise('This is data').then(function (data) {
	console.log(data);
	// Add the following code to catch errors
}, function(error) {
	console.log(error);

});