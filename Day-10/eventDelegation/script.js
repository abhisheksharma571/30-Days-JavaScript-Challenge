//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const myList = document.getElementById('myList');
myList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

//tagName Property
//event.target.tagName returns the tag name of the element that triggered the event.
//This value is a string representing the tag name of the element, and it is always in uppercase. For example, if event.target is an <li> element, event.target.tagName will be 'LI'.


//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const container = document.getElementById('container');
const addButton = document.getElementById('addButton');

container.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON' && event.target.textContent === 'Add Item'){
        const newButton = document.createElement('button');
        newButton.textContent = 'New Button';
        container.appendChild(newButton);
    } else if (event.target.tagName === 'BUTTON' && event.target.textContent === 'New Button'){
        console.log(`Dynamically added button clicked: ${event.target.textContent}`);
    }
})
