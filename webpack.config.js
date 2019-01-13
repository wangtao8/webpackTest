let path = require('path');

module.exports = {
    entry: ['./news.js'],//入口文件 将要被打包的文件路径
    output: {//打包后的文件
        path: path.join(__dirname, './'),//打包后的文件路径
        filename: 'hebing.js'//打包后的文件名
    },
    devtool: 'source-map',//生成map
};