'use strict';

/**
 * HTTPError Model
 */
class HTTPError {
  /**
   * HTTPError Constructor
   * @param {String} message Error message
   * @param {Number} status Error Status code
   */
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }
}

module.exports = HTTPError;
