//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    name: "The library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        }
    ]
}

//task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);