//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr = [1, 2, 3, 4, 5];
let doubledArr = arr.map(num => num * 2)
console.log(doubledArr);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr2 = [1, 2, 3, 4, 5];
let evenArr = arr2.filter(num => num % 2 == 0);
console.log(evenArr);

//Tsk 9: Use the reduce method to calculate the sum of all the numbers in the array and loog the result.
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((acc, num) => acc + num, 0);
console.log(sum);