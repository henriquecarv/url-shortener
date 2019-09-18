"use strict";

const validUrl = require("valid-url");
const shortid = require("shortid");
const HTTPError = require("./../models/Error");

/**
 * Validate a url address
 * @param {String} url The url address
 */
const validateUrl = url => {
  if (!validUrl.isUri(url)) {
    throw new HTTPError("Provide a valid original_url", 400);
  }
};

/**
 * Create a short url address
 * @param {String} shorthand The short url address
 * @return {String}
 */
const createShortURLId = shorthand => {
  if (!shorthand) {
    return shortid.generate();
  }

  return shorthand;
};

module.exports = {
  createShortURLId,
  validateUrl
};
