//Task - 07: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

//Task - 08: Add a setter method to the Person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const person = new Person("Abhishek", "Sharma");
console.log(`Initial full name: ${person.fullName}`);

person.fullName = 'Rahul Kumar';

console.log(`Updated full name: ${person.fullName}`);

