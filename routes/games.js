const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/api/games', gamesController.getGames)

router.get('/api/games/:game', gamesController.searchGames)

module.exports = router