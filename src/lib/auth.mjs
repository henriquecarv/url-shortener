'use strict';

import jwt from 'jsonwebtoken';

/**
 * Verify JWT Authorization key provided with JWT_SECRET
 * @param {String} token Authorization Key value
 * @return {Promise}
 */
const verifyJWT = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error || !decodedToken) {
        return reject(error);
      }

      resolve(decodedToken);
    });
  });
};

export {verifyJWT};
