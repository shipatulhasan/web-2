function add(num1: number, num2: number): number {
  return num1 + num2;
}
const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(5, 4));

const person: {
  name: string;
  balance: number;
  addMoney(moneny: number): void;
} = {
  name: "Shakib",
  balance: 500,
  addMoney(money: number) {
    return `My new balance is ${this.balance + money}`;
  },
};
console.log(person.addMoney(100));
