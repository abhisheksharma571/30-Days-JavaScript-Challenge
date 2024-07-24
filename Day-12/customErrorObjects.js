//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);  // Call the parent class (Error) constructor
        this.name = "CustomError";  // Set the error name to CustomError
    }
}

function throwErrorFunction() {
    throw new CustomError("This is a custom error");
}

try {
    throwErrorFunction()
} catch (error) {
    if(error instanceof CustomError) {
        console.log("Caught a custom error.");
        console.error("Error name: " + error.name);
        console.error("Error message: " + error.message);
    } else {
        console.log("Caught a generic error.");
        console.error("Error name: " + error.name);
        console.error("Error message: " + error.message);
    }
}


//Task 5:Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateInput(input) {
    if(typeof input !== 'string' || input.trim() === ''){
        throw new ValidationError('Input is not a valid string');
    }
    return 'Input is valid string';
}

try {
    let input = "  ";
    let result = validateInput(input);
    console.log(result);
} catch (error) {
    if(error instanceof ValidationError) {
        console.log("Caught a validation error.");
        console.error("Error name: " + error.name);
        console.error("Error message: " + error.message);
    } else {
        console.log("Caught a generic error.");
        console.error("Error name: " + error.name);
        console.error("Error message: " + error.message);
    }
}