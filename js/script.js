/**
 * Treehouse Techdegree:
 * FSJS Project 1 - A Random Quote Generator
 */

/**
 * The quotes array contains a variety of property keys and values in each quote object.
 */
const quotes = [
  {
    quote: 'It is not death that a man should fear, but he should fear never beginning to live.',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    tags: 'stoicism'
  },
  {
    quote: 'It is better to have a permanent income than to be fascinating.',
    source: 'Oscar Wilde',
    citation: 'The Model Millionaire',
    year: '1912'
  },
  {
    quote: 'I never travel without my diary. One should always have something sensational to read in the train.',
    source: 'Oscar Wilde',
    citation: "The Importance of Being Earnest",
    year: '1895'
  },
    {
    quote: "Some people, when confronted with a problem, think ‘I know, I'll use regular expressions.’ Now they have two problems.",
    source: 'Jamie Zawinski',
    tags: 'javascript'
  },
  {
    quote: 'You should name a variable using the same care with which you name a first-born child.',
    source: 'Robert C. Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008',
    tags: 'Uncle Bob'
  }
];

/**
 * Get random quote function - returns a random quote from the quotes array.
 */
function getRandomQuote () {
const randomNumber = Math.floor(Math.random() * quotes.length);
return quotes[randomNumber];
}

/**
 * Print quote function - prints a random quote and its source. If available, also citation, year and tags.
 */
function printQuote() {
const randomQuote = getRandomQuote();
let html = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
if ('citation' in randomQuote) {
  html += `<span class="citation">${randomQuote.citation}</span>`;  
}
if ('year' in randomQuote) {
  html += `<span class="year">${randomQuote.year}</span>`;
}
if ('tags' in randomQuote) {
  html += `<span class="tags">, tagged: ${randomQuote.tags}</span>`;
}
html+='</p>';
document.getElementById('quote-box').innerHTML = html;
}

/**
 * Click event listener for the print quote button.
 */
document.getElementById('load-quote').addEventListener("click", printQuote, false);