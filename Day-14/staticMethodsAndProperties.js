//Task - 05: Add a static method to the Person class that returns a greeting message. Call this static method without creating an instance of the class and log the message.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static greet(){
        return `Hello, Welcome!`;
    }
}

console.log(`Greet message with static method: ${Person.greet()}`);

//Task -06: add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student{
    static totalStudents = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
        Student.totalStudents++;
    }
}

const student1 = new Student("Abhishek Sharma", 20);
const student2 = new Student("Rahul Singh", 21);
const student3 = new Student("John Doe", 22);

console.log(`Total number of students created is : ${Student.totalStudents}`);

