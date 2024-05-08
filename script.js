const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const errorMessage = document.getElementById('error-message');
const getRandomQuoteButton = document.getElementById('get-random-quote');
const searchAuthorInput = document.getElementById('search-author');
const searchQuoteButton = document.getElementById('search-quote');

getRandomQuoteButton.addEventListener('click', getRandomQuote);
searchQuoteButton.addEventListener('click', searchQuote);

function getRandomQuote() {
    fetch('/api/quotes/random')
        .then(response => response.json())
        .then(data => {
            displayQuote(data);
        })
        .catch(error => {
            displayError('Failed to fetch quote. Please try again later.');
            console.error('Error fetching quote:', error);
        });
}

function searchQuote() {
    const author = searchAuthorInput.value.trim();
    if (!author) {
        displayError('Please enter an author name to search.');
        return;
    }

    fetch(`/api/quotes/${author}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                displayError(`No quotes found for author: ${author}`);
                return;
            }
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            displayQuote(randomQuote);
        })
        .catch(error => {
            displayError('Failed to search for quote. Please try again later.');
            console.error('Error searching for quote:', error);
        });
}

function displayQuote(quote) {
    quoteText.textContent = quote.q;
    authorText.textContent = `- ${quote.a}`;
    errorMessage.textContent = '';
}

function displayError(message) {
    errorMessage.textContent = message;
    quoteText.textContent = '';
    authorText.textContent = '';
}
