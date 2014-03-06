var resourceFetch = require('./resource/fetch');

module.exports = {
	get:resourceFetch.fetch,
	post:resourceFetch.post,
	del:resourceFetch.del
}