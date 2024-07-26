//Task 01: Define a class Person with properties name and age, and method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    updateAge(newAge){
        this.age = newAge
    }
}

const person = new Person("Abhishek Sharma", 20);
console.log(person.greet());


//Task 02: Add a method to the Person class that updates the age property and logs the updated age.
console.log(`Person Age before update: ${person.age}`);
person.updateAge(21);
console.log(`Person Age after update: ${person.age}`);
