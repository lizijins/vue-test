const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

const devWebpackConfig = merge(webpackConfig, {
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader', 'less-loader' ],
                    fallback: "style-loader",
                })
            },
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
        new ExtractTextPlugin({
            filename: "style.css",
            disable: false,
            allChunks: true
        })
    ]
});

module.exports = devWebpackConfig;
