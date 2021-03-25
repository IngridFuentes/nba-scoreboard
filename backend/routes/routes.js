const express = require('express');

const router = express.Router();
const gamesController = require('../controllers/gamesController');

// console.log('hereeeeeee')
router.get('/games', gamesController); 


module.exports = router;