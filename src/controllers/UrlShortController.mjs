/* eslint-disable camelcase */
'use strict';

import UrlShort from './../models/UrlShort';
import {validateUrl} from './../utils/UrlShortHelper';
import {createShortURLId} from '../utils/UrlShortHelper.mjs';

const create = ({original_url, shorthand}) => {
  validateUrl(original_url);

  const shortUrl = createShortURLId(shorthand);

  return new UrlShort(original_url, shortUrl);
};

export {create};
