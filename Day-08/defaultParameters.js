//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of callling this function with and without the second parameter.

function multiply(num1, num2 = 1) {
    return num1 * num2;
}

console.log(multiply(5, 10));
console.log(multiply(5));