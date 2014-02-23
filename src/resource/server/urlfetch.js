var Q = require('q');
var request = require('request');
var querystring = require('querystring');
require('http').globalAgent.maxSockets = 200;

function fetch (path, params) {
	params = params || {};

	var defer = Q.defer();
	var url = path + '?' + querystring.stringify(params);


	request({

		url:url,
		headers:{
			'Connection':'keep-alive'
		},
		pool:{
			maxSockets:200
		}

	}, function (err, data) {
		if (err) {
			console.log(path);
			console.log(err.stack);
			defer.reject(err);
		} else {
			defer.resolve(data.body, data);
		}
	});

	return defer.promise;
}

exports.fetch = fetch;