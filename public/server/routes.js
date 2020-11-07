const {Router} = require('express')
const electron = require('electron')
const path = require('path')

const routes = Router()

routes.get('/test', (req, res) => {
  res.send({message: "Working!"})
})

module.exports = routes