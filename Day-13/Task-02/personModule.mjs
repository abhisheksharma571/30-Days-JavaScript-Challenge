
export const person = {
    name: 'Abhishek Sharma',
    age:20,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};