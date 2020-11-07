const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const isDev = require('electron-is-dev')
const portfinder = require('portfinder')

portfinder.basePort = 5010
 
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const staticPath = isDev ? path.join(__dirname, '/../public') : path.join(__dirname, '/../')
app.use(express.static(staticPath))

app.use(require('./routes'))

portfinder.getPort((err, port) => {
  if (!err) {
    app.set('port', port)
    app.listen(port) 
  }
})

module.exports.App = app