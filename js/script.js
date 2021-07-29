/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * quotes []. Each object will hold a 'quote' and 'source'. If there is a 'citation' and or 'year' it will be added. 
***/
const quotes = [
  {
    quote: 'Hope is the dream of a waking man.',
    source: 'Aristotle',
    citation: 'Best Quotes Of: Aristotle, Plato, Socarates',
    tags: '#business'
  },
  {
    quote: 'Impatience is a great obstacle to success; he who treats everything with brusqueness gathers nothing, or only immature fruit which will never ripen',
    source: 'Napoleon Bonaparte',
    year: 1789,
    tags: '#Motivation'
  },
  {
    quote: 'Growth is slow, but the way to ruin is rapid',
    source: 'Lucius Annaeus Seneca',
    citation: 'Letters from a Stoic',
    year: '4 BC',
    tags: '#Motivation'
  },
  {
    quote: 'Whatever can be done another day can be done today.',
    source: 'Michel de Montaigne',
    tags: ` #Motivation`
  },
  {
    quote: 'Shake off the evils of idleness with hard work',
    source: 'Lucius Annaeus Seneca',
    citation: 'Letters from a Stoic',
    year: '4 BC',
    tags: '#business'
  }
];




/***
 * Create a "getRandomQuote" function that will hold the "quotes" array. Within it'll produce a random number dependent of the length of the "quotes" array and set to a variable. Will return the index value from the quotes array. 
***/

function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  return quotes[randomNum];
}


/***  
 * Check my code to see if its functioning 
***/

/***
 * Create a "printQuote" function that'll call our "getRandQuote(quotes)" function and set a the value to a variable. Create another variable with an empty template literal. To build each line concatenate each section (quote and source) to the "html" variable, each value will be interpolated from our "getRandomQuote(qutoes)" and will be within <p> tags. The "source" line will not contain a ending <p> tag, because we will create two if statements. One if statement if there is a "citation" and one for "year", if true then include a <span> within template literals interpolating a "citation" and a "year". Then close with concatenating the ending </p> tag to the "html" variable. Return the value. 
***/

function printQuote() {
  let randQ = getRandomQuote(quotes);
  let html = ``;

  html += `<p class="quote">${randQ.quote}</p>`
  html += `<p class="source">${randQ.source}`

  if (randQ.citation) {
    html += `<span class="citation">${randQ.citation}</span> `;
  };
  if (randQ.year) {
    html += `<span class="year"> ${randQ.year} </span>`;
  };
  if (randQ.tags) {
    html += `<span class="tags"> ${randQ.tags}</span>`;
  }

  html += `</p>`
    ;
  return document.getElementById('quote-box').innerHTML = html;
  ;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);