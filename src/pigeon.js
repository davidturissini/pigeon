var resourceFetch = require('./resource/fetch');
var Service = require('./service/Service');

module.exports = {
	get:resourceFetch.fetch,
	post:resourceFetch.post,
	del:resourceFetch.del,
	Service:Service
};