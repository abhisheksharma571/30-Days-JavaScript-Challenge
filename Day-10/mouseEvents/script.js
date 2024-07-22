//Task 3: Add a mouseover event to an element that changes its background color.

const element = document.getElementById("myDiv");

element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "red";
})

//Task 4: Add a mouseout event listener to an element that resets its background color.

element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "white";
})