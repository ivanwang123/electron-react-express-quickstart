const {Router} = require('express')

const routes = Router()

routes.get('/test', (req, res) => {
  res.send({message: "Working!"})
})

module.exports = routes