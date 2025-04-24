const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/healthz', (_req, res) => res.json({ status: 'ok' }));

const certDir = path.join(__dirname, 'cert');
const options = {
  key: fs.readFileSync(path.join(certDir, 'localhost.key')),
  cert: fs.readFileSync(path.join(certDir, 'localhost.crt')),
};

https
  .createServer(options, app)
  .listen(4444, () => console.log('✅  Dev HTTPS server at https://localhost:4444/healthz'));
