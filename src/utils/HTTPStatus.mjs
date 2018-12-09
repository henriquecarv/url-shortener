'use strict';

/**
 * Choose status code from message
 * @param {String} message Error message
 * @return {Number}
 */
const statusFromMessage = (message) => {
  switch (message) {
    case message.match(/use/g):
      return 409;
    case message.match(/found/g):
      return 404;
    default:
      return 400;
  }
};

export {statusFromMessage};
