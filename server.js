'use strict';

/* retrieve app constants and dependencies */
const CONSTANTS = require('./constants.js');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');

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
/* import controllers */
const countryController = require('./controllers/country.controller');
app.use(`${base_api_url}/country/:name/images`, countryController.getCountryImages);

/* Catch all other routes and return the index file */
app.get('*', (req, res) => {
    res.sendFile(`${CONSTANTS.webapp.dist}/index.html`);
  });

app.set('port', CONSTANTS.express.port);

/* Create HTTP server */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces */
server.listen(CONSTANTS.express.port, () => console.log(`API running on localhost:${CONSTANTS.express.port}`));