//Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffledNumbers = _.shuffle(numbers);

console.log(`Original array: ${numbers}`);
console.log(`Shuffled array: ${shuffledNumbers}`);



//Ensure that your package.json file includes "type": "module" to support ES6 module syntax (import)


//Lodash is a versatile and powerful utility library that simplifies many common programming tasks. 
//By providing a wide range of functions for data manipulation, collection handling, and performance optimization, Lodash can make your code more efficient, readable, and easier to maintain.