const problem_4 = <T extends string>(...arr1: T[]): T[]=> {
  const reversArray = arr1.reverse()
  return reversArray
}
console.log(problem_4('abul','babul','habul'))