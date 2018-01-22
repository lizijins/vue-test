const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

const proWebpackConfig = merge(webpackConfig, {
    output: {
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [ 'css-loader', 'less-loader' ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename:'test1/test1.html',
            template: 'src/views/test1/test1.html',
            chunks: ['vendor', 'test1/test1'],
        }),
        new HtmlWebpackPlugin({
            filename: 'test2/test2.html',
            template:  'src/views/test2/test2.html',
            chunks: ['vendor', 'test2/test2'],
        }),
    ]
});

module.exports = proWebpackConfig;
