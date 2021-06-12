const Games = require("../API/Games")

module.exports = {
  getGames: async (req, res) => {
    try{
      res.json(Games)
      console.log(Games)
    }catch(err){
      console.log(err)
    }
  },
  searchGames: async (req, res) => {
    try{
      const gameName = req.params.game.toLowerCase()
      console.log(Games)
      Games.forEach((game, i) => {
        if (gameName == game.name) {
          res.json(game)
        }
      })
      // res.json(Games[0].name)
    }catch(err){
      console.log(err)
    }
  },
}