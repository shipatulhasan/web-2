interface IPerson{
  name: string,
  age:number
}

const problem_2 = (arr:Array<IPerson>): Array<IPerson>  => {
const filteredArr = arr.filter(i=>i.age>=18)
  return filteredArr
}
console.log(problem_2([
  {
    name:'shakib',age:26
  },
  {
    name:'mahbub',age:20
  },
  {
    name:'hasib',age:16
  },
  {
    name:'jojo',age:18
  },
]))
