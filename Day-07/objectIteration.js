//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
for(let property in book){
    console.log(`${property}: ${book[property]}`);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));
