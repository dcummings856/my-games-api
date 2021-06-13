const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000
const gamesRoutes = require('./routes/games')
const connectDB = require('./config/database')

require("dotenv").config({ path: "./config/.env" })

connectDB()

app.set('view engine', 'ejs')

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.use('/api', gamesRoutes)

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`)
})