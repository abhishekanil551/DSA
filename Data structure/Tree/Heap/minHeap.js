// MIN HEAP

// parent(i) = Math.floor((i - 1) / 2)
// left(i)   = 2*i + 1
// right(i)  = 2*i + 2

class MinHeap{
  constructor(){
    this.heap = [];
  }
  
  insert(value){
    this.heap.push(value);
    this.bubbleUp();
  }
  
  bubbleUp(){
    let index = this.heap.length-1;
    while(index > 0){
      let parentIndex = Math.floor((index - 1)/2);
      if(this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  remove(){
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    bubbleDown();
    return min;
  }

  bubbleDown(){
    let index = 0;
    const length = this.heap.length;
    while(true){
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;
      if(left < length && this.heap[left] < this.heap[smallest]) smallest = left;
      if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;

      if(index === smallest) break;
      
      [this.heap[index] , this.heap[smallest]] = [this.heap[smallest] , this.heap[index]];
      index = smallest;
    }
  }
}

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(8);

console.log(minHeap.heap); 

console.log(minHeap.remove()); 
console.log(minHeap.remove()); 