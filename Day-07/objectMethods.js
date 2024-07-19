//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getDetails: function(){
        return `${this.title} was written by ${this.author}`;
    }
};
console.log(book.getDetails());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(year){
    this.year = year;
}
book.updateYear(2020);
console.log(book);


//OR


let book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    updateYear2: function(year){
        this.year = year;
    }
}

book2.updateYear2(2025);
console.log(book2);