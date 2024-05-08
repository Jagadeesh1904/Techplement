const express = require('express');
const router = express.Router();

// Sample quotes data (replace with actual data source)
const quotes = [
    { q: "The best way to predict the future is to invent it.", a: "Alan Kay" },
    { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
    { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" }
];

// GET random quote
router.get('https://zenquotes.io//random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// GET quotes by author
router.get('https://zenquotes.io//:author', (req, res) => {
    const author = req.params.author.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.a.toLowerCase() === author);
    res.json(filteredQuotes);
});

module.exports = router;
