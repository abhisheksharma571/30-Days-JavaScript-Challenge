//Task 5: Use the spread operator to creat a new array that includes all elements of an existing array plus additional elemetns, and log the new array to the console.

let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr, 6, 7, 8, 9];
console.log(arr2)

// Existing array
let existingArray = [1, 2, 3, 4, 5];

// New elements to add
let additionalElements = [6, 7, 8];

// Using the spread operator to create a new array
let newArray = [...existingArray, ...additionalElements];

// Logging the new array to the console
console.log(newArray);

//The spread operator (...) is used to unpack the elements of the arrays into the new array.

//task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.

function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Function to sum an arbitrary number of arguments
function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Example usage
let result = sumAll(1, 2, 3, 4, 5);
console.log(result); // Output: 15

result = sumAll(10, 20, 30);
console.log(result); // Output: 60


