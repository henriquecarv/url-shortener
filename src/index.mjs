'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/UrlShortRoute';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.info(`url-shortener listening on port ${port}!`)
);

export default router;
