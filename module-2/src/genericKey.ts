type person1 = {
  name: string;
  age: number;
};
type keyOfObject = keyof person1;
const a: keyOfObject = "age";

function getProperty<x, y extends keyof x>(obj: x, key: y) {
  return obj[key];
}

const properties = getProperty({ name: "Shakib", age: 20 }, "age");
console.log(properties);
