const express = require('express');
const configureBodyParser = require('./src/middlewares/bodyParserMiddleware');
const configureCORS = require('./src/middlewares/corsMiddleware');
const configureLogging = require('./src/middlewares/loggingMiddleware');
const configureSecurityHeaders = require('./src/middlewares/securityMiddleware');
const errorHandler = require('./src/middlewares/errorHandlerMiddleware');
const routes = require('./src/routes/index');
const courseRoutes = require('./src/routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Apply Middlewares
configureBodyParser(app);
configureCORS(app);
configureLogging(app);
configureSecurityHeaders(app);

// Routes
app.use('/', routes);
app.use('/api', courseRoutes); // Apply course routes

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
