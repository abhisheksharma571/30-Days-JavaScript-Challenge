//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwErrorFunction(){
    throw new Error("This is an intentional error")
}

try {
    throwErrorFunction()
} catch (error) {
    console.log("An error occured:", error.message);
}


//Task 2: Create  a function that divides two numbers and throws an error if the denomnator is zero. Use a try-catch block to handle this error.

function divide(numerator, denominator){
    if(denominator === 0){
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

try {
    const result = divide(10, 0)
    console.log("Result", result);
} catch (error) {
    console.log("Error:", error.message);
}