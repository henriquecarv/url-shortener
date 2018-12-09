/* eslint-disable camelcase */
'use strict';

/**
 * UrlShort Model
 */
class UrlShort {
  /**
   * UrlShort Model Constructor
   * @param {String} original_url Original URL address
   * @param {String} shorthand Desired short URL address (optional)
   */
  constructor(original_url, shorthand) {
    this.original_url = original_url;
    this.shorthand = shorthand;
  }
}

module.exports = UrlShort;
