const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 1003;
app.use(express.static('public'));

const backends = ['Server 1', 'Server 2'];
let current = 0;

io.on('connection', (socket) => {
  const assignedServer = backends[current];
  current = (current + 1) % backends.length;

  console.log(`Bot ${socket.id} conectado → ${assignedServer}`);
  socket.emit('assigned', assignedServer);
  io.emit('log', `Bot ${socket.id} → ${assignedServer}`);
});

app.post('/launch-ddos', (req, res) => {
  const scriptPath = path.join(__dirname, 'client-bot.js');

  const ddos = spawn('node', [scriptPath]);

  ddos.stdout.on('data', (data) => {
    io.emit('log', `📤 ${data.toString().trim()}`);
  });

  ddos.stderr.on('data', (data) => {
    io.emit('log', `❌ ${data.toString().trim()}`);
  });

  ddos.on('close', (code) => {
    io.emit('log', `DDoS script finalizado com código ${code}`);
  });

  res.sendStatus(200);
});

server.listen(PORT, () => {
  console.log(`Load Balancer listening at http://localhost:${PORT}`);
});
