const fs = require('fs');
const util = require('util');

/* beautiful async/await */
const readdir = util.promisify(fs.readdir);

module.exports = {

  getImages: (path) => readdir(path)

}

