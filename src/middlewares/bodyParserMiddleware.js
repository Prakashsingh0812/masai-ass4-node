const express = require('express');

const configureBodyParser = (app) => {
  // Limit JSON Body Size
  app.use(express.json({ limit: '1mb' }));

  // Limit URL-encoded Body Size
  app.use(express.urlencoded({ limit: '1mb', extended: true }));
};

module.exports = configureBodyParser;
