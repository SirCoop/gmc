const path = require('path');

module.exports = {
    express: {
        port: 3000
    },
    webapp: {
        dist: path.join(__dirname, 'webapp/dist'),
        dev: path.join(__dirname, 'webapp/src/app')
    }
};