const express = require('express');
const fp = require("find-free-port");

module.exports = function(portFree){
  const app = express();
  const port = portFree;
  console.log(port);

  const baseDir = `${__dirname}/../build/`;

  app.use(express.static(`${baseDir}`))

  app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

  app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`));

  return port;
}
