/* eslint-disable camelcase */
"use strict";

const express = require("express");
const verifyJWTRequest = require("./../lib/middleware");
const { create, getUrl } = require("./../controllers/UrlShortController");

// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/*", (req, res) => {
  try {
    const shorthand = req.params[0];

    const originalUrl = getUrl(shorthand);

    return res.redirect(originalUrl);
  } catch (error) {
    const { message, status } = error;
    res.status(status).json({ message });
  }
});

router.post("/api/create", verifyJWTRequest);
router.post("/api/create", (req, res) => {
  try {
    if (!req.body) {
      throw new Error("Provide the request body with a original_url");
    }

    const shorthand = create(req.body);

    res.status(201).json({
      shorthand
    });
  } catch (error) {
    const { message, status } = error;
    res.status(status).json({ message });
  }
});

module.exports = router;
