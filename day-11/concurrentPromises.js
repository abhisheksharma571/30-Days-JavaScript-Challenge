//Task 8: Use Promise.all to wait for multiple promise to resolve and then log all their values.

const promise1 = new Promise((resolve) => setTimeout(() => resolve('First promise resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second promise resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Third promise resolved'), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('First promise resolved:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// Promise.allSettled: Waits for all promises to settle, regardless of outcome.
// Promise.any: Resolves with the first fulfilled promise or rejects if all are rejected.
// Promise.resolve: Creates a promise that is immediately resolved.
// Promise.reject: Creates a promise that is immediately rejected.
// Promise.finally: Executes a callback after a promise is settled.