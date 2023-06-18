"use strict";
const problem_2 = (arr) => {
    const filteredArr = arr.filter(i => i.age >= 18);
    return filteredArr;
};
console.log(problem_2([
    {
        name: 'shakib', age: 26
    },
    {
        name: 'mahbub', age: 20
    },
    {
        name: 'hasib', age: 16
    },
    {
        name: 'jojo', age: 18
    },
]));
