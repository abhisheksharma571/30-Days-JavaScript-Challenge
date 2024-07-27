//Task - 01: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        //accessing the outer variable
        return `Outer variable: ${outerVariable}, Inner variable: ${innerVariable}`;
    }
}

const innerFuncInstance = outerFunction('outer variable');

const result = innerFuncInstance('inner variable');

console.log(result);


//Task - 02: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
    // Private counter variable
    let counter = 0;
    function increment() {
        counter += 1;
    }
    function getValue() {
        return counter;
    }

    // Returning an object with the increment and getValue functions
    return {
        increment,
        getValue
    };
}

const counterInstance = createCounter();

counterInstance.increment();
counterInstance.increment();

console.log(counterInstance.getValue()); // Output: 2

counterInstance.increment();

console.log(counterInstance.getValue()); // Output: 3
