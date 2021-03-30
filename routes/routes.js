const express = require('express');
const router = express.Router();
const getScore = require ('../controllers/gamesController');

// console.log('hereeeeeee')
router.get('/', getScore); 

module.exports = router;