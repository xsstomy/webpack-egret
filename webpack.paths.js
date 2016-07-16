var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	app: path.resolve(ROOT_PATH, 'src/main'),
	build: path.resolve(ROOT_PATH, 'build'),
	template: path.resolve(ROOT_PATH)
};