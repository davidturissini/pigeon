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
proto.defaultParams = {};
proto.parse = function (e) {
	return JSON.parse(e);
};

proto.error = function (e) {
	throw new Error();
};

proto.buildUrl = function (path) {
	return this.protocol + '://' + this.domain + this.basePath + '/' + path;
};

proto.request = function (path, params) {
	var url = this.buildUrl(path);
	return resourceFetch.fetch(url, _.extend({}, defaultParams, params))
		.then(this.parse, this.error);
};

proto.get = function (path, params) {
	return this.request(path, params);
};

proto.post = function (path, params) {
	params = params || {};
	params.type = 'post';
	return this.request(path, params);
};

proto.delete = function (path, params) {
	params = params || {};
	params.type = 'delete';
	return this.request(path, params);
};

proto.put = function (path, params) {
	params = params || {};
	params.type = 'put';
	return this.request(path, params);
};

proto.head = function (path, params) {
	params = params || {};
	params.type = 'head';
	return this.request(path, params);
};



module.exports = Service;