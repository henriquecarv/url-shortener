'use strict';

import {verifyJWT} from './auth';

/**
 * Verify if the request header has the correct authentication
 * @param {Object} req HTTP Request Object
 * @param {Object} res HTTP Response Object
 * @param {Function} next Callback function
 */
const verifyJWTRequest = async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');

    await verifyJWT(token);

    next();
  } catch (error) {
    const message = 'Invalid auth token provided';
    res.status(400).json({message});
  }
};

export {verifyJWTRequest};
