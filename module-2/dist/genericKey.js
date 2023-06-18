"use strict";
const a = "age";
function getProperty(obj, key) {
    return obj[key];
}
const properties = getProperty({ name: "Shakib", age: 20 }, "age");
console.log(properties);
