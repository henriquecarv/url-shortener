'use strict';

import validUrl from 'valid-url';
import shortid from 'shortid';
import {db} from './../db/init';

const urlShort = db.addCollection('urlShort');

/**
 * Validate a url address
 * @param {String} url The url address
 */
const validateUrl = (url) => {
  if (!validUrl.isUri(url)) {
    throw new Error('Provide a valid original_url');
  }
};

/**
 * Create a short url address
 * @param {String} shorthand The short url address
 * @return {String}
 */
const createShortURLId = (shorthand) => {
  if (!shorthand) {
    if (urlShort.findOne({shorthand})) {
      throw new Error('Short url address is already in use.');
    }
    return shortid.generate();
  }

  return shorthand;
};

export {createShortURLId, validateUrl};
