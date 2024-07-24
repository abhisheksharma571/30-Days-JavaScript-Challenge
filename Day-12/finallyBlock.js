//Task 3: Write a script that includes a try-catch block and finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function throwErrorFunction() {
    throw new Error("This is an error");
}

try {
    console.log("This is inside the try block");
    throwErrorFunction();
    console.log("This message won't be logged due to an error");
} catch (error) {
    console.log("This is inside the catch block");
    console.log("Error:",error.message);
} finally {
    console.log("This is inside the finally block");
    // This block will always execute regardless of whether an error occurred

}