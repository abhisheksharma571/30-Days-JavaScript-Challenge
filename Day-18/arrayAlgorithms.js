//Task - 08: Write a function to rorate an array by k positions. Log tge sorted array.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is greater than array length
    if (k < 0) {
      k += n; // In case k is negative
    }
    const reverse = (array, start, end) => {
      while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
      }
    };
    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the rest of the array
    reverse(arr, k, n - 1);
  
    return arr;
  }
  
  const arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const rotatedArray = rotateArray(arrayToRotate, k);
  console.log("Rotated array:", rotatedArray);
  

//Task - 09: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements of arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements of arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  const sortedArray1 = [1, 3, 5, 7];
  const sortedArray2 = [2, 4, 6, 8];
  const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log("Merged sorted array:", mergedArray);
  