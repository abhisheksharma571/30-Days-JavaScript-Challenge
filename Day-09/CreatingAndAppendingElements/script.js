//Task 3: Create a new div element with some text content and append it to the body.

// Step 1: Create a new div element
let newDiv = document.createElement("div");
// Step 2: Set its text content
newDiv.textContent = "This is a new div element";
// Step 3: Append the div element to the body
document.body.appendChild(newDiv)
//The appendChild method is used in JavaScript to add a new node as the last child of a specified parent node.

//task 4: Create a new li element and add it to an existing ul list.
let ulElement = document.querySelector("ul");
let newLiElement = document.createElement("li");
newLiElement.textContent = "This is a new li element";
ulElement.appendChild(newLiElement)



let newLiElement2 = document.createElement("li");
newLiElement2.textContent = "This is another new li element appended at the first position";
//Insert the new li element at the beginning of the ul element
ulElement.insertBefore(newLiElement2, ulElement.firstChild)


let newLiElement3 = document.createElement("li");
newLiElement3.textContent = "This is a new li element appended at a specific position";
//Insert the new li element before the second li element
ulElement.insertBefore(newLiElement3, ulElement.children[1])

