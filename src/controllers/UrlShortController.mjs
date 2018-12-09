/* eslint-disable camelcase */
'use strict';

import UrlShort from './../models/UrlShort';
import {validateUrl} from './../utils/UrlShortHelper';
import {createShortURLId} from '../utils/UrlShortHelper.mjs';
import {db} from './../db/init';

const urlShort = db.addCollection('urlShort');

const create = ({original_url, shorthand}) => {
  validateUrl(original_url);

  const shortUrl = createShortURLId(shorthand);

  urlShort.insert(new UrlShort(original_url, shortUrl));

  return shortUrl;
};

export {create};
