let path = require('path');
let fs = require('fs');

// 业务代码
let SRC_PATH = path.resolve(__dirname, '../src/views');
// 要查找的文件后缀
let fileExp = /.*\.js$/;
// 返回的webpack所需的entry对象
let entry = {};

/**
 * 收集文件列表
 * @param target
 * @returns {null}
 */
function getFiles(target) {
    let files = fs.readdirSync(target);
    let fl = files.length;
    if (!fl) {
        return null;
    }
    files.forEach(function (file) {
        file = path.resolve(target, file);

        if (fs.statSync(file).isDirectory()) {
            getFiles(file);
        } else if (fileExp.test(file)) {
            let fileName = file.replace(SRC_PATH, '')
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

let vendor = [
    'vue',
    'vue-resource',
    path.resolve(__dirname, '../src/style/global.less'),
];

// 核心组件，每个页面都需要的放入vendor
entry.vendor = vendor;

module.exports = entry;