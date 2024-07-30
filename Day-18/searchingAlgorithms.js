// Task - 04: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1; 
  }
  
  const array1 = [64, 34, 25, 12, 22, 11, 90];
  const target1 = 22;
  const targetIndex1 = linearSearch(array1, target1);
  console.log(`Target value ${target1} found at index: ${targetIndex1}`);
  

// Task - 05: Implement the binary search algorithm to find a target value in an array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      } else if (arr[mid] < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
    return -1; 
  }
  
  const array2 = [11, 12, 22, 25, 34, 64, 90]; 
  const target2 = 22;
  const targetIndex2 = binarySearch(array2, target2);
  console.log(`Target value ${target2} found at index: ${targetIndex2}`);
  