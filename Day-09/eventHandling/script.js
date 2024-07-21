//Task 9: Add a click event listener to a button that changes the text of a paragraph.

const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

//Triggers when the element is clicked.
button.addEventListener("click", () => {
    paragraph.textContent = "Text changed!"
})

//Triggers when the element is double-clicked.
button.addEventListener("dblclick", () => {
    paragraph.textContent = "Text changed after double click!"
})


//Task 10: Add a mouseover event listener to an element that changes its border color.
const element = document.getElementById("myElement");

//mouseover triggers when the mouse pointer enters the element. mouseout triggers when the mouse pointer leaves the element.
element.addEventListener("mouseover", () => {
    element.style.borderColor = "red";
})

element.addEventListener("mouseout", () => {
    element.style.borderColor = "black";
})


const input = document.getElementById('textInput');
//Triggers when a key is pressed down.
input.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

const display = document.getElementById('display');
//Triggers when the value of an input element changes.
input.addEventListener('change', () => {
    display.textContent = `Current Value: ${input.value}`;
});


const form = document.getElementById('myForm');
//Triggers when a form is submitted.
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    alert('Form submitted!');
});


const focusInput = document.getElementById('focusInput');
//focus triggers when an element gains focus. blur triggers when an element loses focus.
focusInput.addEventListener('focus', () => {
    focusInput.style.background = "pink";
});
focusInput.addEventListener('blur', () => {
    focusInput.style.background = 'white';
});