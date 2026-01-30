// HEAP SORT (Using Max Heap)
// Time: O(n log n)
// Space: O(1) extra (in-place)

// Build Max Heap
function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, n, i);
  }
}

// Heapify
function heapifyDown(arr, heapSize, index) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapifyDown(arr, heapSize, largest);
  }
}

// Heap Sort \\
function heapSort(arr){
    const length = arr.length;
    buildMaxHeap(arr);
    for(let i = length-1; i > 0; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]];
        heapifyDown(arr , i ,0)
    }
    return arr;
}


let arr = [5, 3, 8, 4, 2, 7, 1];

console.log("Original:", arr);
console.log("Sorted:", heapSort(arr));
