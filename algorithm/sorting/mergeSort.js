function meargeSort(arr){
  if(arr.length<=1) return arr;
  let mid=Math.floor(arr.length/2);
  let left=meargeSort(arr.slice(0,mid));
  let right=meargeSort(arr.slice(mid));
  return mearge(left,right);
}

function mearge(left,right){
  let sorted=[];
  let i=0, j=0;
  
  while(i<left.length && j<right.length){
      if(left[i]<right[j]){
          sorted.push(left[i]);
          i++;
      }else{
          sorted.push(right[j])
          j++;
      }
  }
  return [...sorted,...left.slice(i),...right.slice(j)]
}

console.log(meargeSort([5, 3, 8, 4, 2]));


// or


let arr=[2,1,3,2,1]

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
    return merge(left,right)
}

function merge(left,right){
    let sorted=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift());
        }
    }
    return [...sorted,...left,...right]
}

console.log(mergeSort(arr));
