//Task - 03: Implement a Stack class with methods push (add elements), pop(remove element), peek(view the top element).
class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length == 0){
            console.log("Stack is empty");
            return null
        }
        return this.items.pop()
    }
    peek(){
        if(this.items.length == 0){
            console.log("Stack is empty");
            return null
        }
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length == 0
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element is:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Top element after pop is:", stack.peek());

//Task - 04: Use a Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str){
    let stack = new Stack();
    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }
    let reversed = '';
    while(!stack.isEmpty()){
        reversed += stack.pop();
    }
    return reversed;
}

const originalString = "Hello, World!";
const reversed = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversed);