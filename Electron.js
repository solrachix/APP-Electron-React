const { app, BrowserWindow } = require('electron');
// const StartServer = require('./backend/backend');//start server

const path = require('path');
// const isDev = require('electron-is-dev');

require('dotenv').config()

let mainWindow;
let port = process.env.PORT || 3000;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680
  });
  mainWindow.loadURL(`http://localhost:${port}`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
