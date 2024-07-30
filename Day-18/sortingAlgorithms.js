//Task - 01: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
    let n = arr.length
    let swapped

    for(let i = 0; i < n; i++) {
        swapped = false

        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if(!swapped) break
        //If no elements were swapped during an inner loop iteration (swapped remains false), the array is already sorted, and the algorithm terminates early.
    }

    return arr
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);

const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);

//Task - 02: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr){
    let n = arr.length

    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr
}

const array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array2);

const sortedArray2 = selectionSort(array2);
console.log("Sorted array:", sortedArray2);


//Task - 03: Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    // Partition the array into two subarrays
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage of quickSort function
  const array3 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", array3);
  
  const sortedArray3 = quickSort(array3);
  console.log("Sorted array:", sortedArray3);
  