const problem_3 = (a: unknown): void=>{
  if (typeof a === "string") {
    console.log(a)
  } else {
    console.error('please provide a string type value')
  }
}

problem_3(10)