const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.get('/dinners', controller.getDinners);

module.exports = router;