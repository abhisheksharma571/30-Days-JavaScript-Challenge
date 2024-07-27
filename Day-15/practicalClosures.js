//Task - 03: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createIDGenerator() {
    let lastID = 0; // Private variable to keep track of the last generated ID

    return function() {
        lastID += 1;
        return lastID; 
    };
}

// Create an instance of the ID generator
const generateID = createIDGenerator();

console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2
console.log(generateID()); // Output: 3
console.log(generateID()); // Output: 4

//Task - 04: Create a closure that captures user's name and returns a function that greets the user by name.

function createGreeting(name){
    return function(){
        return `Hello ${name} !`
    }
}

const greetAbhishek = createGreeting('Abhishek');
const greetRahul = createGreeting('Rahul');

console.log(greetAbhishek());
console.log(greetRahul());
