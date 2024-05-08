const express = require('express');
const app = express();
const quotesRouter = require('./routes/quotes');

app.use(express.static('public'));
app.use('/api/quotes', quotesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
