//create person class
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`);
    }
}

module.exports = Person;//exposes person class as a module
//module represents the current module
//exports is an object that will be exposed as a module