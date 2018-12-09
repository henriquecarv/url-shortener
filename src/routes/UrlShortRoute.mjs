/* eslint-disable camelcase */
'use strict';

import express from 'express';
import {verifyJWTRequest} from './../lib/middleware';
import {create} from './../controllers/UrlShortController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    data: 'Authorized!',
  });
});

router.post('/api/create', verifyJWTRequest);
router.post('/api/create', (req, res) => {
  try {
    if (!req.body) {
      throw new Error('Provide the request body with a original_url');
    }

    const result = create(req.body);

    res.status(201).json({
      ...result,
    });
  } catch (error) {
    const {message} = error;
    res.status(400).json({message});
  }
});

export default router;
