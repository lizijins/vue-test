const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

const devWebpackConfig = merge(webpackConfig, {
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [

        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = devWebpackConfig;
