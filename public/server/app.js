const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const portfinder = require('portfinder')

portfinder.basePort = 5010
 
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, '/../')))
console.log('STATIC', path.join(__dirname, '/../'))

app.use(require('./routes'))

portfinder.getPort((err, port) => {
  if (!err) {
    app.set('port', port)
    app.listen(port) 
    console.log('APP LISTEN', port)
  }
})

module.exports.App = app