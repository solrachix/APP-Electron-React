const { app, BrowserWindow } = require('electron');
const path = require('path');
const exec = require('exec');
const fp = require("find-free-port");

require('dotenv').config();
let EmDesenvolvimento = false;
let mainWindow;
let port;
let command;

fp(3334).then(([portFree]) => {

  if(EmDesenvolvimento){
    port = process.env.PORT || 3000
  }
  else{
    port = require('./server/express')(portFree);//start server
  }
  // console.log(port)

  command =  `pid=$(lsof -i:${port} -t); kill -TERM $pid || kill -KILL $pid`;

  app.on('ready', createWindow());
})


const createWindow = () => {
  console.warn(port, command)
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    icon: path.join(__dirname, 'assets/icons/1024x824.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(`http://localhost:${port}`);


  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    closeServer(command)
    mainWindow = null;
  });
}

const closeServer = (command) => {
  exec(command, function(err, out, code) {
    if (err instanceof Error)
      throw err;
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);
  });
}
// app.on('ready', createWindow(port, command));

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
