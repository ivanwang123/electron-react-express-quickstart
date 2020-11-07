const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const {App} = require('../server/app')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // const startUrl = `http://localhost:${App.get('port')}/`
  const startUrl = `http://localhost:3000/`
  console.log('START URL', startUrl)
  
  mainWindow.loadURL(startUrl)

  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})