"use strict";
const myWife = (x) => {
    const me = "Shakib";
    const newData = Object.assign(Object.assign({}, x), { myself: me });
    return newData;
};
console.log(myWife({ name: "Sayanty", age: 23 }));
const addUser = (user) => {
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
