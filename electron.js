const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
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
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`)

  hiddenWindow = new BrowserWindow({show: false})
  hiddenWindow.loadURL(`http://localhost:${App.get('port')}/`)

  mainWindow.on('closed', () => {
    mainWindow = null

    hiddenWindow.close()
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