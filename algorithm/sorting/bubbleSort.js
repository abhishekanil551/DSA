function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [5, 3, 8, 4, 2];
console.log("Sorted:", bubbleSort(arr));






function bubbleSort(arr1) {
    let swapped;
    do {
        swapped = false; 
        for (let i = 0; i < arr1.length - 1; i++) {
            if (arr1[i] > arr1[i + 1]) {
                let temp = arr1[i];
                arr1[i] = arr1[i + 1];
                arr1[i + 1] = temp;
                swapped = true; 
            }
        }
    } while (swapped);
    return arr1;
}

let arr1 = [5, 3, 8, 4, 2];
console.log("Sorted:", bubbleSort(arr));



