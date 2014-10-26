var resourceFetch = require('./../resource/fetch');
var _ = require('lodash');


function Service (options) {
	this.options = options || {};

	if (this.options.protocol) {
		this.protocol = this.options.protocol;
	}

	if (this.options.domain) {
		this.domain = this.options.domain;
	}

	if (this.options.basePath) {
		this.basePath = this.options.basePath;
	}
};

var proto = Service.prototype = {};

proto.protocol = 'http';
proto.basePath = '/';
proto.domain = null;

proto.buildUrl = function (path) {
	return this.protocol + '://' + this.domain + this.basePath + '/' + path;
};

proto.request = function (path, params) {
	var url = this.buildUrl(path);
	return resourceFetch.fetch(url, params);
};

proto.get = function (path, params) {
	var url = this.buildUrl(path);
	return resourceFetch.fetch(url, params)
		.then(function (e) {
			return JSON.parse(e);
		});
};



module.exports = Service;