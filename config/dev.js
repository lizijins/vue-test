const express = require('express');
const webpack = require('webpack');
const mock = require('mockjs');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.dev.config.js');

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    stats: {
        colors: true
    }
});
const hotMiddleware = webpackHotMiddleware(compiler);
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb()
    })
});
app.use(devMiddleware);
app.use(hotMiddleware);

app.all('/test.action', function(req, res) {
    res.json(mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }));
});

app.get('/test1.html', function(req, res) {
    res.sendfile(path.resolve(__dirname, '../src/views/test1/test1.html'));
});

app.get('/test2.html', function(req, res) {
    res.sendfile(path.resolve(__dirname, '../src/views/test2/test2.html'));
});

// Serve the files on port 3000.
app.listen(2000, function () {
    console.log('Example app listening on port 2000!\n');
});