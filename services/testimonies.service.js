const fs = require('fs');
const util = require('util');
const path = require('path');

/* beautiful async/await */
const readdir = util.promisify(fs.readdir);
const baseDir = path.join(__dirname, '../assets/testimonies');

module.exports = {

  getTestimoniesList: () => {
    return fs.readdirSync(`${baseDir}`);
  }

};
