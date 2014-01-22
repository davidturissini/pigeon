if (process.browser !== true) {
	module.exports = require('./server/fetch');
} else {
	module.exports = require('./browser/browserfetch');
}