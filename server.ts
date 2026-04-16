import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// uncomment after finishing all files
// import errorHandler from './_middleware/error-handler';
// import accountsController from './accounts/accounts.controller';


import swaggerDocs from './_helpers/swagger.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// app.use('/accounts', accountsController);

app.use('/api-docs', swaggerDocs);

// app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
  console.log(`Swagger available at http://localhost:${port}/api-docs`);
});
