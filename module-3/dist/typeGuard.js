"use strict";
const add = (p1, p2) => {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    else {
        return p1.toString() + p2.toString();
    }
};
console.log(add(1, 3));
console.log(add("1", "3"));
