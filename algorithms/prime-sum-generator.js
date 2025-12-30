function sumPrimes(num) {
  // 1. Define the helper function properly
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) { 
      if (n % i === 0) { 
        return false;
      }
    }
    return true; 
  }
}

  let sum = 0;

  // 2. Loop through numbers and accumulate
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i; // Accumulate sum of primes
  }

  return sum; 
}

console.log(sumPrimes(10)); // Result: 17


