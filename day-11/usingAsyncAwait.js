//task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function createPromise(value, delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

async function logResolvedValue(){
    try {
        const value = await createPromise(`Resolved value`, 2000);
        console.log(value);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

logResolvedValue();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function createRejectedPromise(errorMessage, delay) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(errorMessage));
        }, delay);
    });
}
async function handleRejectedPromise(){
    try {
        const value = await createRejectedPromise(`Promise rejected`, 2000);
        console.log(value);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
handleRejectedPromise();