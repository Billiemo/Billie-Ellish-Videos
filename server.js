const express = require('express');
const app = require('./path/to/your/app'); // تأكد من المسار الصحيح

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
