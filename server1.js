const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const PORT = 1001;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`Bot conectado no Server 1: ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`Server 1 listening on http://localhost:${PORT}`);
});
