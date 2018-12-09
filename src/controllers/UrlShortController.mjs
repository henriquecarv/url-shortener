/* eslint-disable camelcase */
'use strict';

import UrlShort from './../models/UrlShort';
import {createShortURLId, validateUrl} from './../utils/UrlShortHelper';
import {db} from './../db/init';

const urlShort = db.addCollection('urlShort');

const create = ({original_url, shorthand}) => {
  validateUrl(original_url);

  if (urlShort.findOne({shorthand})) {
    throw new Error('Short url address is already in use.');
  }

  const shortUrl = createShortURLId(shorthand);

  urlShort.insert(new UrlShort(original_url, shortUrl));

  return shortUrl;
};

export {create};
