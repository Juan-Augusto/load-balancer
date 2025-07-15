const http = require('http');

const BOTS = 10; 
const INTERVAL = 1000;
const DURATION = 10000;
const PORT = 1003;
let activeBots = 0;

function startBot(id) {
  activeBots++;
  const interval = setInterval(() => {
    const req = http.get(`http://localhost:${PORT}`, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        console.log(`🤖 Bot #${id} recebeu: "${body.trim()}"`);
      });
    });

    req.on('error', (err) => {
      console.error(`❌ Bot #${id} erro: ${err.message}`);
    });
  }, INTERVAL);

  setTimeout(() => {
    clearInterval(interval);
    activeBots--;
    console.log(`❌ Bot #${id} parou. Bots ativos: ${activeBots}`);
  }, DURATION);
}

for (let i = 1; i <= BOTS; i++) {
  startBot(i);
}
