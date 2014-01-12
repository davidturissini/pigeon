var Q = require('q');
var request = require('request');

exports.fetch = function (path) {
	var defer = Q.defer();

	request(path, function (err, data) {
		defer.resolve(data.body, data);
	});

	return defer.promise;
}