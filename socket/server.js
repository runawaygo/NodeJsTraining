const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    msg.date = Date.now()
    io.emit('chat message', msg);
  });
});

http.listen(1300)