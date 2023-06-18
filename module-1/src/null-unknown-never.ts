const searchME = (x: string | null) => {
  if (x === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching..........");
  }
};
searchME(null);

const speedChecker = (a: unknown) => {
  if (typeof a === "number") return a * 1000;
  if (typeof a === "string") return parseFloat(a.split(" ")[0]) * 1000;
};
console.log(speedChecker(10));
console.log(speedChecker("10 km"));

// const errorMsg = (msg: string): never => {
//   throw new Error(msg);
// };
// errorMsg("err");
