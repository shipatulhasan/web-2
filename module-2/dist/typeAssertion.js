"use strict";
let emni;
emni = "hello me";
emni.length;
function kgToGram(param) {
    if (typeof param === "string") {
        return `the gram is ${parseFloat(param) * 1000}`;
    }
    if (typeof param === "number") {
        return param * 1000;
    }
}
const returnValueNumber = kgToGram(199);
console.log(returnValueNumber);
