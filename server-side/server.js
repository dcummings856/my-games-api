const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let games = {
  'world of warcraft': {
    'name': 'World of Warcraft',
    'genre': 'mmorpg'
  },
  'call of duty': {
    'name': 'Call of Duty',
    'genre': 'fps'
  },
  'monster hunter rise': {
    'name': 'Monster Hunter Rise',
    'genre': 'arpg'
  },
  'not added': {
    'name': 'unknown',
    'genre': 'unknown'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/games/:game', (request, response) => {
  const gameInfo = request.params.game.toLowerCase()
  console.log(gameInfo)
  response.json(games[gameInfo])
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})