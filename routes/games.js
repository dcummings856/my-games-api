const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/games', gamesController.getGames)
router.get('/games/:game', gamesController.searchGames)

module.exports = router