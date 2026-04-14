const express = require('express');
const swaggerRouter = require('./swagger');

const app = express();

app.use('/api-docs', swaggerRouter);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
  console.log('Swagger UI at http://localhost:4000/api-docs');
});