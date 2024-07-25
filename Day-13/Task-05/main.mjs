//Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as math from './mathUtils.mjs'

console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);

const sum = math.add(4,6)
console.log(`Sum: ${sum}`)

const difference = math.subtract(10,6)
console.log(`Subtract: ${difference}`)

const product = math.multiply(4,6)
console.log(`Product: ${product}`)


