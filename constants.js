const path = require('path');

module.exports = {
    express: {
        port: process.env.port || 8081
    },
    webapp: {
        dist: path.join(__dirname, './dist'),
        dev: path.join(__dirname, 'webapp/src'),
        testimonies: path.join(__dirname, './assets/testimonies'),
        writings: path.join(__dirname, './assets/writings')
    }
};