function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1; 
    }
  }

  return -1; 
}

let sortedArr = [2, 5, 7, 9, 12, 15, 19, 22, 30];
console.log("Index:", binarySearch(sortedArr, 22));




// Recursive Binary Search

function recursion(arr, target, a = 0, z = arr.length - 1) {
  if (a > z) {
    return -1;
  }
  let mid = Math.floor((a + z) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (target < arr[mid]) {
    return recursion(arr, target, a, mid - 1);
  } else {
    return recursion(arr, target, mid - 1, z);
  }
}

let arr = [2, 5, 7, 9, 12, 15, 19, 22, 30];
console.log("Index:", recursion(arr, 15));




// binary search in nexted array

function binarysearch(arr,target){
    for(let i=0; i<arr.length; i++){
        let start=0,end=arr[i].length-1;
        while(start<=end){
            const mid=Math.floor((start+end)/2);
            if(arr[i][mid]==target){
                return {i,mid}
            }
            if(target>arr[i][mid]) start=mid+1;
            else end=mid-1;
        }
    }
    return null
}


let array=[
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17]
];

console.log(binarysearch(array,8))





// binary search in nexted array in rec way

function binarysearch(arr,target,row=0,start=0,end=arr[row].length-1){
    if(row >= arr.length)return null;
    if (start > end) {
        if (row + 1 < arr.length)
        return binarysearch(arr, target, row + 1, 0, arr[row + 1].length - 1);
        return null;
    }
    const mid=Math.floor((start+end)/2);
    if(arr[row][mid]==target) return {row ,mid};
    else if(arr[row][mid]<target) return binarysearch(arr,target,row,mid+1,end);
    else return binarysearch(arr,target,row,start,mid-1);
}


let arr1=[
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17]
]

console.log(binarysearch(arr1,15))






