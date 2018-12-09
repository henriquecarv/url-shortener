'use strict';

import validUrl from 'valid-url';
import shortid from 'shortid';
import HTTPError from '../models/Error.mjs';

/**
 * Validate a url address
 * @param {String} url The url address
 */
const validateUrl = (url) => {
  if (!validUrl.isUri(url)) {
    throw new HTTPError('Provide a valid original_url', 400);
  }
};

/**
 * Create a short url address
 * @param {String} shorthand The short url address
 * @return {String}
 */
const createShortURLId = (shorthand) => {
  if (!shorthand) {
    return shortid.generate();
  }

  return shorthand;
};

export {createShortURLId, validateUrl};
