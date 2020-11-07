const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const {App} = require('./server/app')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(`http://localhost:3000/`)

  hiddenWindow = new BrowserWindow({show: false})
  hiddenWindow.loadURL(`http://localhost:${App.get('port')}/`)

  mainWindow.on('closed', () => {
    mainWindow = null
    hiddenWindow = null
  })
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