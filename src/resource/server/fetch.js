var fsfetch = require('./fsfetch').fetch;
var urlfetch = require('./urlfetch').fetch;

exports.fetch = function resourceFetch (path, params) {
	
	if (/http\:\/\//.test(path)) {
		return urlfetch(path, params);
	} else {

		return fsfetch(path);
	}
};

