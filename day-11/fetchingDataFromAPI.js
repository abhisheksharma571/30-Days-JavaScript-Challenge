//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log('Response data using promises:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Response data using async/await:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();