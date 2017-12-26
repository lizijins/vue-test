const path = require('path');
const webpack = require('webpack');
const entry = require('./entry');

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@mod': path.resolve(__dirname, '../src/mod'),
        }
    },
};

