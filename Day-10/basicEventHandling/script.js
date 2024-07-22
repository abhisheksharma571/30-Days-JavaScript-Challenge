//Task 1: Add a click event listener to a button that change the text content of a paragraph.

const myButton = document.getElementById("myButton");
const myParagraph = document.getElementById("myParagraph");

myButton.addEventListener("click", () => {
    myParagraph.textContent = "The text has been changed!"
})

//task 2: Add a double-click event listener to an image that toggles its visibility.

const myImage = document.getElementById("myImage");
const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', () => {
//     if (myImage.style.display === 'none') {
//         myImage.style.display = 'block';
//     } else {
//         myImage.style.display = 'none';
//     }
// });

toggleButton.addEventListener('click', () => {
    if (myImage.style.visibility === 'hidden') {
        myImage.style.visibility = 'visible';
    } else {
        myImage.style.visibility = 'hidden';
    }
});