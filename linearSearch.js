function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Checking index ${i}, value = ${arr[i]}`);

    if (arr[i] === target) {
      return i; // found
    }
  }
  return -1; // not found
}

let arr = [15, 3, 9, 22, 7, 30];
console.log("Index:", linearSearch(arr, 22));
// Output : found at index 3
