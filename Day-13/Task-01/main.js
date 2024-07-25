//Create a module that exports a function to add two numbers. Import and use this module in another script.

const addTwoNumbers = require('./mathModule')

const num1 = 7;
const num2 = 5;

const sum = addTwoNumbers(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
