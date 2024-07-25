//Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { sum as add, subtract, multiply, divide } from './mathModule.mjs';

const num1 = 10;
const num2 = 5;

console.log(`Adding ${num1} and ${num2}: ${add(num1, num2)}`);
console.log(`Subtracting ${num2} from ${num1}: ${subtract(num1, num2)}`);
console.log(`Multiplying ${num1} and ${num2}: ${multiply(num1, num2)}`);
if(num2 != 0){
    console.log(`Dividing ${num1} by ${num2}: ${divide(num1, num2)}`);
} else {
    try {
        console.log(`Dividing ${num1} by 0: ${divide(num1, 0)}`);
    } catch (error) {
        console.error(error.message);
    }
}


//Named exports allow you to export multiple values from a module. 
//Each exported value must be explicitly named, and you can export multiple values from the same module. 
//When importing named exports, you must use the same names as the exported values.

//When using named exports, you can also use aliasing to import the values with different names.

