'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (let i = 0; i < items.length; i++) {
    console.log(`${item[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = []
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) { 
      result.push(items[i]);
    }
  }
  return result;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  let smallest = []
  items.sort();
  for (let i = 0; i < n ; i++) {
    smallest.push(items[i]);
  } 
  return smallest.reverse()
  }

// smallestNItems(items, n)
// 1,2,3 
// [2,1]