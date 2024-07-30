//Task - 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    if (n <= 1) return n;
  
    const fib = [0, 1]; // Base cases
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib;
  }
  
  const n = 10;
  const fibonacciNumbers = fibonacci(n);
  console.log(`Fibonacci numbers up to ${n}:`, fibonacciNumbers);
  

//Task - 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  const values = [60, 100, 120];
  const weights = [10, 20, 30];
  const capacity = 50;
  const maxValue = knapsack(values, weights, capacity);
  console.log(`Maximum value that can be obtained: ${maxValue}`);
  