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
    tags: 'stoicism',
  },
  {
    quote: 'It is better to have a permanent income than to be fascinating.',
    source: 'Oscar Wilde',
    citation: 'The Model Millionaire',
    year: '1912',
  },
  {
    quote: 'I never travel without my diary. One should always have something sensational to read in the train.',
    source: 'Oscar Wilde',
    citation: "The Importance of Being Earnest",
    year: '1895',
  },
    {
    quote: "Some people, when confronted with a problem, think ‘I know, I'll use regular expressions.’ Now they have two problems.",
    source: 'Jamie Zawinski',
    tags: 'javascript',
  },
  {
    quote: 'You should name a variable using the same care with which you name a first-born child.',
    source: 'Robert C. Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008',
    tags: 'Uncle Bob'
  },
];

/***
 * The `getRandomQuote` function first takes a random number in the range 0 to less than 1, multiplies it by 4 which is the index of the final quote,
 * rounds the number it to nearest int and stores it in a variable. It then uses that number as an index to return a random quote from the quotes array.
***/
function getRandomQuote () {
const randomNumber = Math.round(Math.random() * 4);
return quotes[randomNumber];
}

/***
 * The `printQuote` function stores a random quote by calling the getRandomQuote function. It goes on to create an HTML string which always contains
 * the quote itself and source. And if the random quote object alsdo contains citation, year or tags, those are added to the HTML string as well.
 * The finalised string is then output to the selected 'quote-box' HTML element.  
***/
function printQuote() {
const randomQuote = getRandomQuote();
let HTML = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
if ('citation' in randomQuote) {
  HTML+= `<span class="citation">${randomQuote.citation}</span>`;  
}
if ('year' in randomQuote) {
  HTML += `<span class="year">${randomQuote.year}</span>`;
}
if ('tags' in randomQuote) {
  HTML += `<span class="tags">, tagged: ${randomQuote.tags}</span>`;
}
HTML+='</p>';
document.getElementById('quote-box').innerHTML = HTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);