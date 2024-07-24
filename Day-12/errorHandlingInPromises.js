//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise(){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if(randomNumber < 0.5){
                resolve("Promise resolved");
            } else {
                reject("Promise rejected");
            }
        }, 2000);
    })
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Caught an error: ", error);
    })


//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

function randomPromise2(){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(()=> {
            if(randomNumber < 0.5){
                resolve("Promise resolved");
            } else {
                reject("Promise rejected");
            }
        }, 2000);
    })
}

async function handleRandomPromise(){
    try {
        const message = await randomPromise2()
        console.log(message);
    } catch (error) {
        console.log("Error: ", error);
    }
}

handleRandomPromise()