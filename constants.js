const path = require('path');

const webapp_dir = path.join(__dirname, 'webapp/dist/GMC');

module.exports = {
    express: {
        port: 1213
    },
    webapp_dir
};