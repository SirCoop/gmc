'use strict';

/* retrieve app constants and dependencies */
const CONSTANTS = require('./constants.js');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const fs = require('fs');
const app = express();

/* log all requests to console */
app.use(morgan('dev'));

/* Point static path to dist */
app.use(express.static(CONSTANTS.webapp.dist));

/* Parsers for POST data */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Set API routes */
const base_api_url = '/api';

/* Country */
const countryController = require('./controllers/country.controller');
app.use(`${base_api_url}/country/:name/images`, countryController.getImageUrls);

/* 
  res headers can only be set here, not in delegated function. 
  use app.get vs app.use so that we can change res header and open file stream
*/
app.get('/api/country/:name/:image', (req, res) => {
  const country = req.params.name;
  const image = req.params.image;
  const imagePath = path.join(__dirname, `assets/images/countries/${country}/${image}`);

  const mime = {
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
  };

  const type = mime[path.extname(image).slice(1)] || 'text/plain';
  const s = fs.createReadStream(imagePath);
  
  s.on('open', function () {
      res.set('Content-Type', type);
      s.pipe(res);
  });
  s.on('error', function () {
      res.set('Content-Type', 'text/plain');
      res.status(404).end('Not found');
  });
});

/* Testimonies */
const testimoniesController = require('./controllers/testimonies.controller');
// get List - All
app.use(`${base_api_url}/leadership/testimonies/list`, testimoniesController.getTestimoniesList);
// get One
app.get(`${base_api_url}/leadership/testimonies/:fileName`, (req, res) => {
  const fileName = req.params.fileName;
  const path = `${CONSTANTS.webapp.testimonies}/${fileName}`;
  const file = fs.createReadStream(path);
  const stat = fs.statSync(path);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment;');
  file.pipe(res);
});

/* Writings */
const writingsController = require('./controllers/writings.controller');
// get List - All
app.use(`${base_api_url}/writings/lists`, writingsController.getWritingLists);
// get One
app.get(`${base_api_url}/writings/:type/:fileName`, (req, res) => {
  const type = req.params.type;
  const fileName = req.params.fileName;
  const path = `${CONSTANTS.webapp.writings}/${type}/${fileName}`;
  const file = fs.createReadStream(path);
  const stat = fs.statSync(path);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment;');
  file.pipe(res);
});

/* Three.js */
app.get('/api/threejs/:item', (req, res) => {
  const item = req.params.item;
  const itemPath = path.join(__dirname, `assets/threejs/${item}`);

  const mime = {
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    json: 'application/*'
  };

  const type = mime[path.extname(item).slice(1)] || 'text/plain';
  const s = fs.createReadStream(itemPath);
  
  s.on('open', function () {
      res.set('Content-Type', type);
      s.pipe(res);
  });
  s.on('error', function () {
      res.set('Content-Type', 'text/plain');
      res.status(404).end('Not found');
  });
});

/* Contact Me */
const contactController = require('./controllers/contact.controller');
app.use(`${base_api_url}/contact`, contactController.contactMe);

/* Catch all other routes and return the index file */
app.get('*', (req, res) => {
    res.sendFile(`${CONSTANTS.webapp.dist}/index.html`);
});


app.set('port', CONSTANTS.express.port);

/* Create HTTP server */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces */
server.listen(CONSTANTS.express.port, () => console.log(`API running on localhost:${CONSTANTS.express.port}`));