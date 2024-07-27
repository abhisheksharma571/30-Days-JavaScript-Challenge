//Task - 07: Write a function that memoizes the result of another function. Use a closure to store the results of previous computations.


//Task - 08: Create a memoized version of a function that calculates the factorial of a number.


function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log(`Fetching from cache for arguments: ${args}`);
            return cache.get(key);
        }
        
        console.log(`Calculating result for arguments: ${args}`);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Calculating and caching result
console.log(memoizedFactorial(5)); // Fetching from cache
console.log(memoizedFactorial(6)); // Calculating and caching result
console.log(memoizedFactorial(6)); // Fetching from cache
console.log(memoizedFactorial(7)); // Calculating and caching result
console.log(memoizedFactorial(7)); // Fetching from cache
