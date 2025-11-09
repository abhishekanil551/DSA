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