var fsfetch = require('./fsfetch').fetch;
var urlfetch = require('./urlfetch').fetch;

exports.fetch = function resourceFetch (path) {
	
	if (/http\:\/\//.test(path)) {
		return urlfetch(path);
	} else {

		return fsfetch(path);
	}
};

