const fs = require('fs');
const util = require('util');
const path = require('path');

/* beautiful async/await */
const readdir = util.promisify(fs.readdir);
const baseDir = path.join(__dirname, '../assets/writings');

module.exports = {

  getWritingLists: () => {
    return getDirectoriesList()
      .then(directories => {
        const dirObject = {};
        directories.forEach(dir => dirObject[dir] = []);
        return getDirectoryList(directories, dirObject);
      });
  }

};

function getDirectoriesList() {
    return readdir(baseDir);
}

function getDirectoryList(directories, dirObject) {
    directories.forEach(dir => {
        dirObject[dir] = fs.readdirSync(`${baseDir}/${dir}`);
        // set up the front-end for success
        dirObject[dir] = dirObject[dir].map(item => { 
            const index = item.split('_');
            const id = index[0];
            const value = index[1].split('.')[0];
            const fileName = item.split('.')[0]
            return { id, value, type: dir, fileName };
        });
    });
    return dirObject;
}