/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'It is not death that a man should fear, but he should fear never beginning to live.',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    tags: 'stoicism, philosophy'
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
    tags: ''
  },
    {
    quote: "Some people, when confronted with a problem, think ‘I know, I'll use regular expressions.’ Now they have two problems.",
    source: 'Jamie Zawinski',
  },
  {
    quote: 'You should name a variable using the same care with which you name a first-born child.',
    source: 'Robert C. Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: '2008',
    tags: ''
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
const randomNumber = Math.round(Math.random() * 4);
return quotes[randomNumber];
}
console.log(getRandomQuote());

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);