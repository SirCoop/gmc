//  Fake zlib  (see https://github.com/VadimDez/ng2-pdf-viewer/issues/322)
const fs = require('fs');
const zl = './webapp/node_modules/zlib';
if(!fs.existsSync(zl))
  fs.mkdirSync(zl);
fs.writeFileSync(`${zl}/package.json`, `{
  "name": "zlib",
  "version": "1.0.0"
}`);
fs.writeFileSync(zl+'/index.js', '');