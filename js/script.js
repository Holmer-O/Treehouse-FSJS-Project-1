/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * This is the `quotes` array containing a variety of property names and values in each object.
***/
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

/***
 * The `getRandomQuote` function first takes a random number in the range 0 to less than 1, multiplies it by 4 which is the index of the final quote,
 * rounds the number to nearest int and stores it in a variable. It then uses that int as an index by which to return a random object from the quotes array.
 * Fixed. Now using quotes.length instead of a hard-coded value. And math.floor to make chanches equal, rather than math.round.
***/
function getRandomQuote () {
const randomNumber = Math.floor(Math.random() * quotes.length);
return quotes[randomNumber];
}


/***
 * The `printQuote` function first stores a random quote by calling the `getRandomQuote` function. It goes on to store an HTML string which always contains
 * the quote itself and source. And if the random quote object also contains citation, year or tags, those are added to the HTML string as well.
 * The finalised string is then output to the selected 'quote-box' HTML element.
 * Fixed. Now changed the var name html to lower case.
***/
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

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);