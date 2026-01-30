// Heapify (Build heap from array)
let arr = [4, 10, 3, 5, 1]
function buildMinHeap(arr){
    let heap = arr.slice();
    for(let i=Math.floor(heap.length/2)-1; i>=0; i--){
        heapifyDown(heap,i)
    }
    return heap;
}

function heapifyDown(heap,index){
    let length = heap.length;
    while(true){
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
        if(left < length && heap[left] < heap[smallest]) smallest = left;
        if(right < length && heap[right] < heap[smallest]) smallest = right;

        if(index === smallest) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

console.log(buildMinHeap(arr))