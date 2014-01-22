var ajax = require('component-ajax');
var Q = require('q');

exports.fetch = function (path, params) {
	var defer = Q.defer();

	ajax({
		url:path,
		dataType:'text',
		data:params || {},
		success: function (e) {
			defer.resolve(e);
		}
	});

	return defer.promise;

}