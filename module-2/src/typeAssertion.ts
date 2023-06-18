let emni: any;
emni = "hello me";
(emni as string).length;
function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    return `the gram is ${parseFloat(param) * 1000}`;
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}
const returnValueNumber = <number>kgToGram(199);
console.log(returnValueNumber);
