//Task 3: Use array destructuring to extract the first and second element from an array of numbers and log them to the console.

let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first);
console.log(second);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Destructuring the first and second elements, and using rest syntax to get the remaining elements
let [first2, second2, ...rest] = numbers;

// Extracting the last element from the rest array
let last2 = rest.pop();

console.log(`First element: ${first2}`);
console.log(`Second element: ${second2}`);
console.log(`Last element: ${last2}`);


//Task 4: Use object destructuring to extract thetitle and author froma book object and log them to the console.

let book = {
    title: "The Great Gatsby",
    year: 1925,
    author: "F. Scott Fitzgerald"
};

// Using object destructuring to extract title and author
let { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
