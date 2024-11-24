const morgan = require('morgan');

const configureLogging = (app) => {
  app.use(morgan('dev')); // Logs HTTP requests with method, URL, and response time
};

module.exports = configureLogging;
