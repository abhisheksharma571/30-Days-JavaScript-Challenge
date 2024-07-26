//Task 03: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student iD.
//task 04: Override the greeting method int the Student class to include Student ID in the message. Log the overridden greeting message.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);  // Call the parent class (Person) constructor
        this.studentId = studentId;
    }
    getStudentId(){
        return this.studentId;
    }
    greet(){
         return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.getStudentId()}`
    }

}

const student = new Student("Abhishek Sharma", 20, 12345);
console.log(`Student ID: ${student.getStudentId()}`);
console.log(`Overridden greeting: ${student.greet()}`);


