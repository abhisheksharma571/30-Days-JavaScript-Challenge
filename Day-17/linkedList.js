//Task - 01: Implement a Node class to represent an linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


//Task - 02: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor(){
        this.head = null
    }

    addToEnd(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        } else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    removeFromEnd(){
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
              current = current.next;
            }
            current.next = null;
        }
    }

    display(){
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new LinkedList();

list.addToEnd(10);
list.addToEnd(20);
list.addToEnd(30);

console.log("Linked list after adding nodes:");
list.display();

list.removeFromEnd();
console.log("Linked list after removing the last node:");
list.display();