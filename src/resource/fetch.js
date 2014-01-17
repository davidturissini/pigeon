if (module && module.exports) {
	exports.fetch = require('./server/fetch').fetch;
} else {
	exports.fetch = require('./browser/browserfetch').fecth;
}