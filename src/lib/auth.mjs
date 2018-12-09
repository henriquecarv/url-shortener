'use strict';

import jwt from 'jsonwebtoken';

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
