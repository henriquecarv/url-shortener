'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/UrlShortRoute');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;
const address = process.env.ADDRESS;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.info(`url-shortener listening on ${address}:${port}/`)
);
