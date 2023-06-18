type PersonType = {
  name: string;
  profession: string;
  address: string;
  age?: number;
};
const baby: PersonType = {
  name: "Sayanty",
  profession: "Student",
  address: "Chittagong",
};
const me: PersonType = {
  name: "Shakib",
  age: 26,
  profession: "Software Engineer",
  address: "Dhaka",
};
type Opration = (x: number, y: number) => number;
const calculate = (number1: number, number2: number, operation: Opration) =>
  operation(number1, number2);
console.log(calculate(2, 20, (x, y) => x + y));
console.log(calculate(2, 20, (x, y) => x * y));
