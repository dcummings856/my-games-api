const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000
const gamesRoutes = require('./routes/games')

app.use(cors())

app.use('/', gamesRoutes)

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`)
})