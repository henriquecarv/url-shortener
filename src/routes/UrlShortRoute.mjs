/* eslint-disable camelcase */
import express from 'express';
import {verifyJWTRequest} from './../lib/middleware';

// eslint-disable-next-line new-cap
const router = express.Router();

router.all('*', verifyJWTRequest);

router.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    data: 'Authorized!',
  });
});

router.post('/api/create', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const {original_url, shorthand} = req.body;

  res.status(200).json({
    original_url,
    shorthand,
  });
});

export default router;
