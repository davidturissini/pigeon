var ajax = require('ajax');


function browserFetch (path, params) {

	return ajax(path, {
		dataType:'text',
		data:params || {}
	});
}


exports.fetch = browserFetch;