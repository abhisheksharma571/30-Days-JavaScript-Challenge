//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function printTimes(num, func) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

printTimes(5, function () {
    console.log("Hello");
})

//OR

const repeatFunction = (fn, times) => {
    for(let i = 0; i < times; i++){
        fn();
    }
}

const sayHello = () => {
    console.log("Hello!");
}

repeatFunction(sayHello, 5)

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyBoth = (fn1, fn2, value) => {
    return fn1(value) + fn2(value);
}

const add = (num) => {
    return num + 5;
}

const multiply = (num) => {
    return num * 5;
}

console.log(applyBoth(add, multiply, 10))