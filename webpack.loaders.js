var paths = require('./webpack.paths');
var path = require('path');

module.exports = [{
    test: /\.css$/,
    loaders: ['style', 'css'],
    include: paths.app
}, {
    test: /\.jsx?$/,
    loaders: ['babel'],
    include: paths.app
}, {
    test: /\.(png|jpg|svg|woff)$/,
    loaders: ['url?limit=40000'],
    include: paths.app
}, {
    test: /\.(eot|ttf)$/,
    loaders: ['file'],
    include: paths.app
}, {
    test: /\.ts$/,
    loader: 'awesome-typescript',
    query: {
        'doTypeCheck': true
    },
    include: path.resolve('src'),
    exclude: /node_modules/
}]