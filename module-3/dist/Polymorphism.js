"use strict";
class Person {
    getNap() {
        return `I will nap 5 hours`;
    }
}
class Student extends Person {
    getNap() {
        return `I will nap 8 hours`;
    }
}
class Developers extends Person {
    getNap() {
        return `I will nap 3 hours`;
    }
}
const person1 = new Student();
const person2 = new Developers();
const person3 = new Person();
console.log(person1.getNap());
console.log(person2.getNap());
console.log(person3.getNap());
class Shape {
    getArea() { }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        console.log(Math.PI * this.radius * this.radius);
    }
}
const circle = new Circle(10);
circle.getArea();
