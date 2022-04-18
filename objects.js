'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  
  // create a dictionary to store words and counts per word
  let word_counts = {}

  // convert string to array
  let phraseArray = phrase.split(" ");

  // iterate over array 
  for (const word of phraseArray) {
    if (word in word_counts === false) {
      word_counts[word] = 1
    }
    else {
      word_counts[word] += 1
    }
  // check word if in word_counts
  // if it is, then word_counts[word] += 1
  // else word_counts[word] = 1 
  }
  return word_counts
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }    
  // console.log(price)
  for (const key in melonPrices) {
    if (price in melonPrices === false) {
      return;
    }
  }
  return melonPrices[price].sort()
}

// console.log(getMelonsAtPrice(1.00));
// console.log(getMelonsAtPrice(2.50));
