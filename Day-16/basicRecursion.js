//Task - 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 5 is: ${factorial(5)}`);  // 120
console.log(`Factorial of 0 is: ${factorial(0)}`);  // 1
console.log(`Factorial of 7 is: ${factorial(7)}`);  // 5040

//Task - 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Fibonacci of 0 is: ${fibonacci(0)}`);  // 0
console.log(`Fibonacci of 1 is: ${fibonacci(1)}`);  // 1
console.log(`Fibonacci of 5 is: ${fibonacci(5)}`);  // 5
console.log(`Fibonacci of 10 is: ${fibonacci(10)}`);  // 55