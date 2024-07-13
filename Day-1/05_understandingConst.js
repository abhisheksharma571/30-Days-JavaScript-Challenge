//Task 5: try reassigning a variable declared with const and observe the error.
const a = 10;
console.log(`Initial value of a is ${a}`);
a = 20;
console.log(`Value of a after reassignment is ${a}`);
// TypeError: Assignment to constant variable.
// we can not reassign the value of a, because it is a constant, constant is immutable