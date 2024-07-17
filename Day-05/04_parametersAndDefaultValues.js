//Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function multiply(num1, num2 = 1){
    return num1 * num2;
}
console.log(multiply(5, 10));
console.log(multiply(5));

//task 8: Write a function that takes a person's name and age and return a greeting message. provide a default value for the age.


function greet(name, age = 18){
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Abhishek", 21));
console.log(greet("Rahul"));