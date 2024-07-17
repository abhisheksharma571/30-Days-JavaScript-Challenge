//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => a + b;
let num1 = 5;
let num2 = 10;
console.log(`The sum of ${num1} and ${num2} is ${sum(num1, num2)}.`);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (str, char) => str.includes(char);
let str = "Hello";
let char = "l";
console.log(`The string ${str} contains the character ${char}?: ${containsChar(str, char)}.`);
