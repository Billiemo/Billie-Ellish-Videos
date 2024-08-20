const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
    try {
        res.redirect(301, 'https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
    } catch (error) {
        console.error('فشلت عملية إعادة التوجيه:', error);
        res.status(500).send('خطأ في الخادم الداخلي');
    }
});

app.listen(PORT, () => {
    console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
