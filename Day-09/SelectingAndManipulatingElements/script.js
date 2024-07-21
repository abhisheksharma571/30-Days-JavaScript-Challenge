//Task 1: select an HTML element by its ID and change its text content.

let heading = document.getElementById("heading");
heading.textContent = "This is changed text";

//Task 2: Select an HTML element by its class and change its background color.

let paragraph = document.getElementsByClassName("para");
// Change background color of the first element only
paragraph[0].style.backgroundColor = "red";


//We use a loop in this case because the class selector might match multiple elements on the page. 
let elements = document.getElementsByClassName("myClass");
// Loop through the elements and change their background color
for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lightblue";
}