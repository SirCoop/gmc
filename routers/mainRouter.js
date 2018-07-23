const express = require('express');
const router = express.Router();
const CONSTANTS = require('../constants.js');

/* GET api listing */
router.get('', (req, res) => {
//   res.send('main works');
    res.sendFile(`${CONSTANTS.webapp.dev}/index.html`)
});


module.exports = router;