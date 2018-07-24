const fs = require('fs');

module.exports = {

  getImages: function (path) {
    fs.readdir(path, cb);

    function cb(err, files) {
      if (err) {
        console.log(err);
        res.writeHead(400, {
          'Content-type': 'text/html'
        })
        res.end("No such image");
      } else {
        console.log('files: ', files);
        return files;
      }
    }
  }

}
