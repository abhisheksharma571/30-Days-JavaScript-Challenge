//Task 5: Write a program to print numbers from 1 to 5 using do-while loop.

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


//task 6: Write a program to calculate the factorial of a number using do-while loop.

let num = 5;
let fact = 1;
do {
    fact *= num;
    num--;
} while (num > 1);
console.log(`The factorial of the given number is ${fact}.`);

