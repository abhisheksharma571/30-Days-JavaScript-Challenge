//Task - 05: Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front(view the first element).
class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.items.length === 0){
            console.log("Queue is empty");
            return null;
        }
        return this.items.shift();
    }
    front(){
        if(this.items.length === 0){
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length == 0
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("First element is:", queue.front());
console.log("Dequeued element:", queue.dequeue());
console.log("First element after dequeue is:", queue.front());

//Task - 06: Use the Queue class to simulate a simple queue where print jobs are added to the queue and processed in order.

class PrintQueue{
    constructor(){
        this.queue = new Queue();
    }

    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
    }

    processPrintJobs() {
        while (!this.queue.isEmpty()) {
          const job = this.queue.dequeue();
          console.log(`Processing print job: ${job}`);
        }
    }
}

const printQueue = new PrintQueue();
printQueue.addPrintJob("Document1.pdf");
printQueue.addPrintJob("Document2.pdf");
printQueue.addPrintJob("Document3.pdf");

console.log("Processing print jobs:");
printQueue.processPrintJobs();