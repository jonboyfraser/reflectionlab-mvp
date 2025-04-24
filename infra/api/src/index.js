require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

app.use('/api/v1/users', require('./routers/users'));
app.use('/api/v1/journals', require('./routers/journals'));
app.use('/api/v1/entries', require('./routers/entries'));
app.use('/api/v1/goals', require('./routers/goals'));
app.use('/api/v1/seeds', require('./routers/seeds'));
app.use('/api/v1/artifacts', require('./routers/artifacts'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

const specs = swaggerJsdoc({
  definition: { openapi: '3.0.0', info: { title: 'ReflectionLab API', version: '0.1.0' } },
  apis: ['./infra/api/src/routers/*.js'],
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const certDir = path.join(__dirname, '../../dev-server/cert');
const options = {
  key: fs.readFileSync(path.join(certDir, 'localhost.key')),
  cert: fs.readFileSync(path.join(certDir, 'localhost.crt')),
};
https
  .createServer(options, app)
  .listen(4000, () => console.log('🚀  API running at https://localhost:4000/docs'));
