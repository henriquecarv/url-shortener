'use strict';

import {verifyJWT} from './auth';

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
