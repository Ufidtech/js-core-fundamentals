
function destroyer (arr, ...more) {
  return arr.filter(elem => !more.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Result: [1, 1]