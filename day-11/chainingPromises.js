//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promise to log messages in a specific order.
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return `Fetched data from ${url}: ${JSON.stringify(data)}`;
        });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then((message) => {
        console.log(message); // Log message after fetching data1
        return fetchData("https://jsonplaceholder.typicode.com/todos/2");
    })
    .then((message) => {
        console.log(message); // Log message after fetching data2
        return fetchData("https://jsonplaceholder.typicode.com/todos/3");
    })
    .then((message) => {
        console.log(message); // Log message after fetching data3
        return fetchData("https://jsonplaceholder.typicode.com/todos/4");
    })
    .then((message) => {
        console.log(message); // Log message after fetching data4
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });