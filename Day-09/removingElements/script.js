//Task 5: Select an HTML element and remove it from the DOM.
let paragraph = document.getElementById("para");
//The remove() method is used to remove an element from the DOM tree. It is a method available on all HTML elements.
paragraph.remove()

//Task 6: Remove the last child of a specific HTML element.
let myList = document.getElementById("myList");
console.log(myList.lastElementChild);
//lastElementChild: Only returns element nodes, ignoring text and comment nodes. It is useful when you only want to work with element nodes and exclude any non-element nodes.
console.log(myList.lastChild);
//lastChild: Includes all types of nodes (element, text, comment, whitespace, etc.). It might return nodes like text or comment nodes if they are the last in the list.
myList.lastElementChild.remove()
// myList.lastChild.remove()

