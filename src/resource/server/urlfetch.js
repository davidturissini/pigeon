var Q = require('q');
var request = require('request');
var querystring = require('querystring');
require('http').globalAgent.maxSockets = 1024;

function fetch (path, params) {
	params = params || {};

	var defer = Q.defer();
	var url = path + '?' + querystring.stringify(params);


	request({

		url:url,

		headers:{
			'Connection':'keep-alive'
		}

	}, function (err, data) {
		if (err) {
			defer.reject(err);
		} else {
			defer.resolve(data.body, data);
		}
	});

	return defer.promise;
}

exports.fetch = fetch;