const express = require('express');
const app = express();

// Middleware to handle redirection based on user-agent
app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];
  
  if (userAgent && userAgent.includes('facebookexternalhit')) {
    // Redirect only if user-agent indicates FacebookBot
    res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  } else {
    // Proceed to the next middleware/route
    next();
  }
});

// Handle other routes
app.get('*', (req, res) => {
  res.send('billie eilish !');
});

module.exports = app;
