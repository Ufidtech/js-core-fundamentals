
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer (arr, ...more) {
  // Use filter to keep elements that are NOT included in the 'more' arguments
  return arr.filter(elem => !more.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Result: [1, 1]