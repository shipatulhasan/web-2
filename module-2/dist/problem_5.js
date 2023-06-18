"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `The name of this person is ${this.name}. Age is ${this.age}`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
const student1 = new Student("Shakib", 27, 3.23);
console.log(student1.getDetails());
