interface IUser {
  age: number,
  name:string
}
interface IEUser extends IUser{
  role:string
}
const myUser: IUser = {
  age: 10,
  name:'shakib'
} 
const newUser: IEUser = {
  age: 10,
  name: 'shakib',
  role:'CEO'
} 
console.log(myUser,newUser)