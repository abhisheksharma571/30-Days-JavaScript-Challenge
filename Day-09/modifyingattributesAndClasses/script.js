//task 7: Select an element and change one of its attributes(e.g. src of an img tag).

let imgElement = document.querySelector("#myImage");

imgElement.setAttribute("src", "new-image.png");  //Sets or updates the value of an attribute.
console.log(imgElement.getAttribute("alt"));  // Retrieves the value of an attribute.
imgElement.setAttribute("alt", "New Image");
imgElement.removeAttribute("alt");  //Removes an attribute from an element.



//task 8: Add and remove a CSS class to/from an HTML element.
let paragraph = document.querySelector("#myParagraph");

// Add class immediately when the script runs
paragraph.classList.add("highlight");


//replace the class after 2 seconds
setTimeout(function () {
    paragraph.classList.replace("highlight", "important");
}, 2000)


// Remove the class after 4 seconds
setTimeout(function () {
    paragraph.classList.remove("important");
}, 4000);


// contains(className): Checks if the element has the specified class name. Returns true if the class is present, otherwise false.
console.log(paragraph.classList.contains("highlight"));


//toggle(className, force): Toggles the class on and off. If the class is not present, it will be added. If the class is present, it will be removed.
//The force parameter is optional. If provided, it can force the class to be added (if true) or removed (if false), ignoring the current state.
//element.classList.toggle('toggle-class'); // Adds if not present, removes if present
//element.classList.toggle('toggle-class', true); // Always adds
//element.classList.toggle('toggle-class', false); // Always removes



//The classList property in JavaScript provides a convenient way to interact with the classes of an HTML element.
