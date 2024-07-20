//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name = 'John Doe';
const age = 30;

const person = {
    // Shorthand property names
    name,
    age,

    // Method definition shorthand
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },

    // Computed property names
    ['property_' + (age + 1)]: 'I am a computed property'
};

console.log(person);
person.greet();


//Enhanced object literals in JavaScript allow you to create objects with shorthand property names, method definitions, and computed property names, making the syntax more concise and expressive.

//Task 9: Create an object with computed property names based on variables and log the object to the console.
const propertyName1 = 'firstName';
const propertyName2 = 'lastName';
const propertyName3 = 'age';

const personObject = {
    [propertyName1]: 'John',
    [propertyName2]: 'Doe',
    [propertyName3]: 30
};

console.log(personObject);

//A computed property is a feature in JavaScript that allows you to dynamically assign property names to an object using expressions. This is especially useful when you want to use variables or expressions to define property names instead of static, hard-coded strings.

