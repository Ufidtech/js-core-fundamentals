// Find the Greatest Common Divisor using the Euclidean Algorithm
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// Find the Least Common Multiple of two numbers
const lcm = (a, b) => (a * b) / gcd(a, b);
function smallestCommons(arr) {
  // 1. Sort the input to handle [5, 1] or [1, 5]
  const [min, max] = arr.sort((a, b) => a - b);
  
  // 2. Create the range of numbers
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  // 3. Use reduce to find the LCM of the entire range
  // It calculates LCM(1, 2), then LCM(result, 3), then LCM(result, 4)...
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

// Test case

console.log(smallestCommons([1, 5])); // Output: 60

