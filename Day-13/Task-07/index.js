//Install a third-party module(e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from 'axios'

async function fetchData() {
    try {
        const respone = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(respone.data)
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
    }
}

fetchData()


//Axios is a popular JavaScript library used for making HTTP requests. 
//It is widely used in both Node.js and browser environments due to its simplicity and powerful features.