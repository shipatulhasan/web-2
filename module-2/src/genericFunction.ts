const myWife = <T>(x: T) => {
  const me = "Shakib";
  const newData = { ...x, myself: me };
  return newData;
};
console.log(myWife({ name: "Sayanty", age: 23 }));

// we can use constains here
interface UserInterface {
  name: string;
  email: string;
  age: number;
}
const addUser = <T extends UserInterface>(user: T) => {
  const arr = [];
  arr.push(user);
  const users = [...arr, user];
  return users;
};

const user1 = {
  name: "Akib",
  email: "akib@gmail.com",
  age: 12,
  type: "khrap",
};
const user2 = {
  name: "Shakib",
  email: "Shakib@gmail.com",
  age: 26,
};
console.log(addUser(user1));
