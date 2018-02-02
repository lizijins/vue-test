const path = require('path');
const webpack = require('webpack');
const entry = require('./entry');

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
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
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@components': path.resolve(__dirname, '../src/components'),
            '@mod': path.resolve(__dirname, '../src/mod'),
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),

        // 用hash值替代数字模块id
        // new webpack.HashedModuleIdsPlugin(),

        // new WebpackChunkHash()
    ]
};

