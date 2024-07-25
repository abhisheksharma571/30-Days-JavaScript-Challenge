//Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from "./personModule.mjs";

console.log(`${person.name} is ${person.age} years old.`);

person.greet()

person.haveBirthday()
person.haveBirthday()

console.log(`${person.name} age after two birthdays is ${person.age}.`);


//to use modern ES6 module syntax with import and export keywords, we need to use a .mjs file extension.