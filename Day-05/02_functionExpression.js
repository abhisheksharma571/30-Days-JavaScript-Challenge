//Task 3: Write a function expresion to find the maximum of two numbers and log the result to the console.

const findMax = function(a, b) {
    return a > b ? a : b;
};

const num1 = 5;
const num2 = 10;
const maxNumber = findMax(num1, num2);

console.log("The maximum number is:", maxNumber);

//Task 4: Write a function expression to concatenate two strings and return the result.

const concatStrings = function(str1, str2) {
    return str1 + str2;
};

const str1 = "Hello";
const str2 = " World";
const concatenatedString = concatStrings(str1, str2);
console.log(`The concatenated string is: ${concatenatedString}`);

//Function Expressions are not hoisted, meaning they can only be used after they are defined. 
//They can be anonymous or named.
