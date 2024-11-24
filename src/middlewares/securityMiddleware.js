const helmet = require('helmet');

const configureSecurityHeaders = (app) => {
  // Use Helmet to set security-related HTTP headers
  app.use(helmet());
};

module.exports = configureSecurityHeaders;
