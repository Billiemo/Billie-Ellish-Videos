const express = require('express');
const app = express();
const middleware = require('./middleware');

// Apply middleware
app.use(middleware.logger); // Log all requests
app.use(express.json()); // Parse JSON in requests
app.use(middleware.userAgentRedirect); // Handle facebookexternalhit user-agent

// Define a primary route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
