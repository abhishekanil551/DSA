class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
  
    getLeftChildIndex(i) {
      return 2 * i + 1;
    }
  
    getRightChildIndex(i) {
      return 2 * i + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    shiftUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    shiftDown(index) {
      let minIndex = index;
      const size = this.heap.length;
  
      const leftIndex = this.getLeftChildIndex(index);
      if (leftIndex < size && this.heap[leftIndex] < this.heap[minIndex]) {
        minIndex = leftIndex;
      }
  
      const rightIndex = this.getRightChildIndex(index);
      if (rightIndex < size && this.heap[rightIndex] < this.heap[minIndex]) {
        minIndex = rightIndex;
      }
  
      if (minIndex !== index) {
        this.swap(index, minIndex);
        this.shiftDown(minIndex);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return min;
    }
  
    peek() {
      return this.heap[0];
    }

    
  }

  
  
const heap = new MinHeap();
[5, 3, 8, 1, 2].forEach(x => heap.insert(x));
console.log(heap.heap); 
console.log(heap.extractMin()); 
console.log(heap.heap); 