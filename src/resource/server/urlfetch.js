var Q = require('q');
var request = require('request');
var querystring = require('querystring');

exports.fetch = function (path, params) {
	params = params || {};

	var defer = Q.defer();
	var url = path + '?' + querystring.stringify(params);


	request(url, function (err, data) {
		if (err) {
			defer.reject(err);
		} else {
			defer.resolve(data.body, data);
		}
	});

	return defer.promise;
}