const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000
const API = require('./API/games.json')

app.use(cors())

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/games', (req, res) => {
  res.json(API)
})

app.get('/api/games/:game', (request, response) => {
  const gameInfo = request.params.game.toLowerCase()
  console.log(gameInfo)
  response.json(API[gameInfo])
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`)
})