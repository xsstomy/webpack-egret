var webpack = require('webpack');
var path = require('path')
var paths = require('./webpack.paths')
var loaders = require('./webpack.loaders')


module.exports = {
	entry: {
		main: paths.app
	},
	resolve: {
		root: paths.app,
		extensions: ['', '.js', '.ts']
	},
	output: {
		path: paths.build,
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			BUILD_MODE: JSON.stringify('development')
		})
	]
};