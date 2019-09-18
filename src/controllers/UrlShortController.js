/* eslint-disable camelcase */
"use strict";

const UrlShort = require("../models/UrlShort");
const HTTPError = require("../models/Error");
const { createShortURLId, validateUrl } = require("../utils/UrlShortHelper");
const db = require("../db/init");

const urlShort = db.addCollection("urlShort");

/**
 * Create a shortURL from original and save to the database
 * @param {Object} {original_url, shorthand} Destructured object
 * @return {String} Short url
 */
const create = ({ original_url, shorthand }) => {
  validateUrl(original_url);

  if (urlShort.findOne({ shorthand })) {
    throw new HTTPError("Short url address is taken!", 409);
  }

  const shortUrl = createShortURLId(shorthand);

  urlShort.insert(new UrlShort(original_url, shortUrl));

  return shortUrl;
};

/**
 * Find Short url
 * @param {String} shorthand Short url
 * @return {String} Original Url
 */
const getUrl = shorthand => {
  const { original_url } = urlShort.findOne({ shorthand }) || {};

  if (!original_url) {
    throw new HTTPError("Short url not found!", 404);
  }

  return original_url;
};

module.exports = { create, getUrl };
