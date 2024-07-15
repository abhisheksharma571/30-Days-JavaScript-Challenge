//Task 3: Write a program to find the largest of three numbers using if-else statements.
let a = 50;
let b = 40;
let c = 30;
if(a > b){
    if(a > c){
        console.log(`${a} is the largest number`);
    } else if (a < c){
        console.log(`${c} is the largest number`);
    }
} else if (b > c){
    if(b > a){
        console.log(`${b} is the largest number`);
    } else if (b < a){
        console.log(`${a} is the largest number`);
    }
} else if (c > b){
    if(c > a){
        console.log(`${c} is the largest number`);
    } else if (c < a){
        console.log(`${a} is the largest number`);
    }
}