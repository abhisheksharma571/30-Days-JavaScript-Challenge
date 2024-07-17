//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
checkEvenOdd(10)

//Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return num * num;
}
let number = 5;
let result = square(number)
console.log(`The square of ${number} is ${result}.`)

//Function Declarations are hoisted and can be called before they are defined. 
//They are always named.