//task 8: Use the fetch API to request data from an invalid URL and handle the errors using .catch(). Log an appropriate error message to the console.

let url = 'https://invalidurl.com';

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok: '+ response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    })

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    const invalidUrl = 'https://invalidurl.com';
    try {
        const response = await fetch(invalidUrl);
        if(!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.log('Error fetching data:', error.message);
    }
}
fetchData()