function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Checking index ${i}, value = ${arr[i]}`);

    if (arr[i] === target) {
      return i; // found
    }
  }
  return -1; // not found
}

let array = [15, 3, 9, 22, 7, 30];
console.log("Index:", linearSearch(array, 22));
// Output : found at index 3




function linear(arr,target){
  for(let row=0; row<arr.length; row++){
      for(let col=0; col<arr[row].length; col++){
          if(arr[row][col]==target){
              return {row, col}
          }
      }
  }
  return null
}

const arr = [
[1, 3, 5],
[7, 9, 11],
[13, 15, 17]
];

console.log(linear(arr, 15));
