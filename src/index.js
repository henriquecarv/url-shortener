'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/UrlShortRoute');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.info(`url-shortener listening on http://127.0.0.1:${port}/`)
);
