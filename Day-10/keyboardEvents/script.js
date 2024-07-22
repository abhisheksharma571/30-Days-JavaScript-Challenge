//Task 5: Add a keydown event listener to an input field thta logs the key pressed to the console.
const textInput = document.getElementById('textInput');
textInput.addEventListener("keydown", (event)=> {
    console.log(event.key);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const displayValue = document.getElementById('displayValue');
textInput.addEventListener("keyup", () =>{
    displayValue.textContent = `Current value: ${textInput.value}`
})
