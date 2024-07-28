//Task - 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sum(arr){
    if(arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));  //add the first element to the sum of the rest of the array
}

console.log(`Sum of [1, 2, 3, 4, 5] is: ${sum([1, 2, 3, 4, 5])}`);  // 15
console.log(`Sum of [10, 20, 30, 40] is: ${sum([10, 20, 30, 40])}`);  // 100
console.log(`Sum of [7] is: ${sum([7])}`);  // 7
console.log(`Sum of [] is: ${sum([])}`);  // 0

//Task- 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxInArray(arr){
    if(arr.length === 1) return arr[0];
    return Math.max(arr[0], maxInArray(arr.slice(1)));
}

console.log(`Maximum of [1, 2, 3, 4, 5] is: ${maxInArray([1, 2, 3, 4, 5])}`);  // 5
console.log(`Maximum of [10, 20, 30, 40] is: ${maxInArray([10, 20, 30, 40])}`);  // 40
console.log(`Maximum of [7] is: ${maxInArray([7])}`);  // 7
console.log(`Maximum of [5, 3, 8, 2, 9, 1] is: ${maxInArray([5, 3, 8, 2, 9, 1])}`);  // 9
