var Q = require('q');
var request = require('request');
var querystring = require('querystring');

exports.fetch = function (path, params) {
	params = params || {};

	var defer = Q.defer();
	var url = path + '?' + querystring.stringify(params);


	request(path, function (err, data) {
		defer.resolve(data.body, data);
	});

	return defer.promise;
}