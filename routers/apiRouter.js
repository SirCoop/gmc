const express = require('express');
const router = express.Router();

/* GET api listing */
router.get('', (req, res) => {
  res.send('api works');
});

router.get('/coop', (req, res) => {
  res.send('coop works');
});

module.exports = router;