var ajax = require('component-ajax');
var Q = require('q');


function browserFetch (path, params) {

	return ajax(path, {
		dataType:'text',
		data:params || {}
	});
}


exports.fetch = function (path, params) {
	var defer = Q.defer();

	ajax(path, {
		dataType:'text',
		data:params || {},
		success: function (e) {
			defer.resolve(e);
		}
	});

	return defer.promise;

}