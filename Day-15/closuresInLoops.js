//Task - 05: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctinArray(){
    const functions = [];

    for(let i=0;i<10;i++){
        functions.push(function(){
            console.log(i);
        })
    }
    return functions;
}

const functionArray = createFunctinArray();

for(let j=0;j<functionArray.length;j++){
    functionArray[j]();
}