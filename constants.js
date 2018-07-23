const path = require('path');

module.exports = {
    express: {
        port: 1213
    },
    webapp: {
        dist: path.join(__dirname, 'webapp/dist'),
        dev: path.join(__dirname, 'webapp/src')
    }
};