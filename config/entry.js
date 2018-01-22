var path = require('path');
var fs = require('fs');

// 业务代码
var SRC_PATH = path.resolve(__dirname, '../src/views');
// 要查找的文件后缀
var fileExp = /.*\.js$/;
// 返回的webpack所需的entry对象
var entry = {};

/**
 * 收集文件列表
 * @param target
 * @returns {null}
 */
function getFiles(target) {
    var files = fs.readdirSync(target);
    var fl = files.length;
    if (!fl) {
        return null;
    }
    files.forEach(function (file) {
        file = path.resolve(target, file);

        if (fs.statSync(file).isDirectory()) {
            getFiles(file);
        } else if (fileExp.test(file)) {
            var fileName = file.replace(SRC_PATH, '')
                .replace('.js', '')
                .replace('\\', '')
                .replace('\\', '/');
            if (process.env.NODE_ENV !== 'production') {
                entry[fileName] = ['webpack-hot-middleware/client?reload=true', file];
            } else {
                entry[fileName] = file;
            }
        }
    });
}

getFiles(SRC_PATH);

var vendor = [
    'vue',
    'vue-resource',
    path.resolve(__dirname, '../src/style/global.less'),
];

// 核心组件，每个页面都需要的放入vendor
entry.vendor = vendor;

module.exports = entry;