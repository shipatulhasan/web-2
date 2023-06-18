class Person {
  constructor(private name: string, private age: number) {}
  public getDetails(): string {
    return `The name of this person is ${this.name}. Age is ${this.age}`;
  }
}
class Student extends Person {
  constructor(name: string, age: number, private grade: number) {
    super(name, age);
  }
  public getGrade(): number {
    return this.grade;
  }
}
const student1 = new Student("Shakib", 27, 3.23);
console.log(student1.getDetails());
