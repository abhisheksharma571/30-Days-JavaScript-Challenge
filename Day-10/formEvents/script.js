//Task 7: Add a submit event listener to a form that prevents the default submission and log the form data to the console.
const myForm  = document.getElementById('myForm');
myForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    
    const formData = new FormData(myForm);
        for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
})
//Task 8: Add a change event listener to a select dropdown that displays the selected value value in a paragraph.
const dropdown = document.getElementById('dropdown');
const selectedValue = document.getElementById('selectedValue');
dropdown.addEventListener('change', () => {
    selectedValue.textContent = `Selected value: ${dropdown.value}`;
});