var Q = require('q');
var fs = require('fs');

function nodeJSFetch (defer, path) {
	var fileContents = fs.readFile(path, 'utf-8', function (err, data) {
		if (err) {
			defer.reject();
		} else {
			defer.resolve(data.toString());
		}

	});


}

exports.fetch = function (path) {
	var defer = Q.defer();

	nodeJSFetch(defer, path);

	return defer.promise;

}