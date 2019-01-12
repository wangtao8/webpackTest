let path = require('path');

module.exports = {
    entry: ['./new.js'],
    output: {
        path: path.join(__dirname, './'),
        filename: 'hebing.js'
    },
    devtool: 'source-map',
};