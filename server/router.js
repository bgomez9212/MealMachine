const express = require('express');
const router = express.Router();
const controller = require('./controllers.js');

router.get('/dinners', controller.getDinners);
router.get('/lunches', controller.getLunches);
router.get('/breakfast', controller.getBreakfast)

module.exports = router;