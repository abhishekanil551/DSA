// fibonacci find use recursion

// function recursionfboncci(n){
//   if(n<2){
//     return n
//   }

//   return recursionfboncci(n-1)+recursionfboncci(n-2)
// }

// console.log(recursionfboncci(6))


// find factorial use recusion 

function recursionFactroial(n){
  if(n===0){
    return 1
  }
  return n*recursionFactroial(n-1)
}

console.log(recursionFactroial(5))
console.log(recursionFactroial(4))
console.log(recursionFactroial(3))