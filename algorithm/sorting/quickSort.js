 function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Sorted:", quickSort(arr));




function quickSort(arr){
  if(arr.length<=1) return arr;
  let pivot=arr[arr.length-1];
  let left=[];
  let right=[];
  for(let i=0; i<arr.length-1; i++){
      if(arr[i]<pivot) left.push(arr[i]);
      else right.push(arr[i]);
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([3,2,1]));



//or



// function quickSort(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         const pivotIndex = partition(arr, low, high);
//         quickSort(arr, low, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, high);
//     }
//     return arr;
// }

// function partition(arr, low, high) {
//     const pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }

// console.log(quickSort([8,6,7,4,3,2,9,1]));
