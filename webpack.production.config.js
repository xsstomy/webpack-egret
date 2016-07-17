var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var paths = require('./webpack.paths')
var loaders = require('./webpack.loaders')

module.exports = {
    entry: {
        app: paths.app
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: paths.build,
        filename: 'bundle.js?[hash:8]',
        publicPath: 'build/'
    },
    externals: {
        'egret': 'egret',
        'RES': 'RES',
        'eui': 'eui'
    },
    module: {
        loaders: loaders
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            BUILD_MODE: JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            title: 'egret',
            template: path.resolve(paths.template, 'index.html'),
            filename: 'index.html',
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
}