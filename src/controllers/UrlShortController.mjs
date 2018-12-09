/* eslint-disable camelcase */
'use strict';

import UrlShort from './../models/UrlShort';
import {createShortURLId, validateUrl} from './../utils/UrlShortHelper';
import {db} from './../db/init';

const urlShort = db.addCollection('urlShort');

/**
 * Create a shortURL from original and save to the database
 * @param {Object} {original_url, shorthand} Destructured object
 * @return {String} Short url
 */
const create = ({original_url, shorthand}) => {
  validateUrl(original_url);

  if (urlShort.findOne({shorthand})) {
    throw new Error('Short url address is already in use!');
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
const getUrl = (shorthand) => {
  const {original_url} = urlShort.findOne({shorthand}) || {};

  if (!original_url) {
    throw new Error('Short url not found!');
  }

  return original_url;
};

export {create, getUrl};
