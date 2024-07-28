//Task - 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target for few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; 
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

console.log(`Index of 3 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 3)}`);  // 2
console.log(`Index of 6 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 6)}`);  // -1
console.log(`Index of 1 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 1)}`);  // 0
console.log(`Index of 5 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 5)}`);  // 4



//Task - 8: Write a recursive function to count the occurrence of a target in an array. Log the result for few test cases.
function countOccurrences(arr, target, index = 0) {
    if(index  >= arr.length) return 0;
    const count = arr[index] === target ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1)
}
console.log(`Occurrences of 3 in [1, 2, 3, 3, 3, 4, 5]: ${countOccurrences([1, 2, 3, 3, 3, 4, 5], 3)}`);  // 3
console.log(`Occurrences of 6 in [1, 2, 3, 4, 5]: ${countOccurrences([1, 2, 3, 4, 5], 6)}`);  // 0
console.log(`Occurrences of 1 in [1, 1, 1, 1, 1]: ${countOccurrences([1, 1, 1, 1, 1], 1)}`);  // 5
console.log(`Occurrences of 2 in [1, 2, 2, 3, 4, 2, 2]: ${countOccurrences([1, 2, 2, 3, 4, 2, 2], 2)}`);  // 4
