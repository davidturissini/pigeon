var Q = require('q');
var jQuery = require('jquery');


function browserFetch (defer, path, params) {

	jQuery.ajax({
		url:path,
		dataType:'text',
		data:params || {}
	})

	.then(defer.resolve.bind(defer));
}


exports.fetch = function (path, params) {
	var defer = Q.defer();

    browserFetch(defer, path);

	return defer.promise;

}