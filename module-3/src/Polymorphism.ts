class Person {
  getNap(): string {
    return `I will nap 5 hours`;
  }
}
class Student extends Person {
  getNap(): string {
    return `I will nap 8 hours`;
  }
}
class Developers extends Person {
  getNap(): string {
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
  getArea(): void {}
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): void {
    console.log(Math.PI * this.radius * this.radius);
  }
}
const circle = new Circle(10);
circle.getArea();
