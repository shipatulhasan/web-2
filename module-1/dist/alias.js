"use strict";
const baby = {
    name: "Sayanty",
    profession: "Student",
    address: "Chittagong",
};
const me = {
    name: "Shakib",
    age: 26,
    profession: "Software Engineer",
    address: "Dhaka",
};
const calculate = (number1, number2, operation) => operation(number1, number2);
console.log(calculate(2, 20, (x, y) => x + y));
console.log(calculate(2, 20, (x, y) => x * y));
