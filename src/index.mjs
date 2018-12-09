'use strict';

import express from 'express';
import {verifyJWTRequest} from './middleware.mjs';

// eslint-disable-next-line new-cap
const router = express.Router();

router.all('*', verifyJWTRequest);

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'Authorized!',
  });
});

const app = express();
const port = 3000;
app.use(router);

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.info(`url-shortener listening on port ${port}!`)
);

export default router;
