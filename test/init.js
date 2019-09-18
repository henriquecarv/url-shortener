"use strict";

require("dotenv").config();

const PORT = process.env.PORT;
const ADDRESS = process.env.ADDRESS;
global.request = require("supertest")(`${ADDRESS}:${PORT}`);

module.exports = require("should");
