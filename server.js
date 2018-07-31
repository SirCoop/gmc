'use strict';

/* retrieve app constants and dependencies */
const CONSTANTS = require('./constants.js');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');

const countryImagesService = require('./services/country-images.service');

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

/* Catch all other routes and return the index file */
app.get('*', (req, res) => {
    res.sendFile(`${CONSTANTS.webapp.dist}/index.html`);
});


app.set('port', CONSTANTS.express.port);

/* Create HTTP server */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces */
server.listen(CONSTANTS.express.port, () => console.log(`API running on localhost:${CONSTANTS.express.port}`));