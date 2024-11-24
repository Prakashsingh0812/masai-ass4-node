const cors = require('cors');

const configureCORS = (app) => {
  const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests only from your front-end URL
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
};

module.exports = configureCORS;
