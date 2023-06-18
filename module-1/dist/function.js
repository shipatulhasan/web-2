"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 4));
const person = {
    name: "Shakib",
    balance: 500,
    addMoney(money) {
        return `My new balance is ${this.balance + money}`;
    },
};
console.log(person.addMoney(100));
