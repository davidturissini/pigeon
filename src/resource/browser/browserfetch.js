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
		},
		error: function (e) {
			defer.reject(e);
		}
	});

	return defer.promise;

}

exports.del = function (path, params) {
	var defer = Q.defer();

	ajax({
		type:'delete',
		url:path,
		dataType:'text',
		data:params || {},
		success: function (e) {
			defer.resolve(e);
		}
	});

	return defer.promise;
}

exports.post = function (path, params) {
	var defer = Q.defer();

	ajax({
		type:'post',
		url:path,
		dataType:'text',
		data:params || {},
		success: function (e) {
			defer.resolve(e);
		}
	});

	return defer.promise;
}