const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect all requests to the target URL
app.get('*', (req, res) => {
    res.redirect(301, 'https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
