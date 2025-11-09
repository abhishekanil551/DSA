let arr = [5, 3, 8, 4, 2];

for (let i = 1; i < arr.length; i++) {
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
}

console.log(arr);

// its flow

// 3,5,8,4,2
// 3,5,4,8,2
// 3,4,5,8,2
// 3,4,5,2,8
// 3,4,2,5,8
// 3,2,4,5,8
// 2,3,4,5,8
