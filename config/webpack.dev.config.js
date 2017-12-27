const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

const devWebpackConfig = merge(webpackConfig, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                ]
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
    },
    devtool: '#eval-source-map',
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = devWebpackConfig;
