'use strict';

/* retrieve app constants and dependencies */
const CONSTANTS = require('./constants.js');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

/* Get API routes */
const api = require('./routers/apiRouter');

const app = express();

/* Parsers for POST data */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Point static path to dist */
app.use(express.static(CONSTANTS.webapp_dir));

/* Set api routes */
app.use('/api', api);

/* Catch all other routes and return the index file */
app.get('*', (req, res) => {
    res.sendFile(`${CONSTANTS.webapp_dir}/index.html`);
  });

app.set('port', CONSTANTS.express.port);

/* Create HTTP server */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces */
server.listen(CONSTANTS.express.port, () => console.log(`API running on localhost:${CONSTANTS.express.port}`));