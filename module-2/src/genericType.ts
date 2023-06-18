const friends: Array<string> = ["Abul", "bubul"];
const rollNumber: Array<number> = [2, 4, 5, 6];
type userType = { name: string; email: string; age: number };
type GenericArray<T> = Array<T>;
const usersArray: GenericArray<userType> = [
  { name: "Shakib", email: "shipatulhasan328@gmail.com", age: 26 },
];
console.log(usersArray);
