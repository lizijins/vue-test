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

