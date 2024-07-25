//Create a module that exports a single function using default export. Import and use this functions in another script.

import product from './multiply.mjs'

const result = product(10, 20);
console.log(`The product of 10 and 20 is ${result}.`);

//Default exports allow you to export a single value from a module. Each module can have only one default export. 
//When importing a default export, you can use any name you like for the imported value.

//You can combine named and default exports in the same module.