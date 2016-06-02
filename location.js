//Fetch users location based on their IP address
var request = require('request'),
    url = 'http://ipinfo.io';


module.exports = function () {
    return new Promise(function (reject, resolve) {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('We could not guess your location!');
            } else if (body.city.length !== 0) {
                resolve(body);
            } else {
                reject('We could not guess your location!');
            }
        });
    });
};