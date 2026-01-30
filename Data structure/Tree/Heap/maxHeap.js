// MAX HEAP

// parent(i) = Math.floor((i - 1) / 2)
// left(i)   = 2*i + 1
// right(i)  = 2*i + 2

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);

            if(this.heap[parentIndex] >= this.heap[index]) break;
            
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    remove(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleDown(){
        let index = 0;
        const length = this.heap.length;
        while(true){
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;
            if(left < length && this.heap[left] > this.heap[largest]) largest = left;
            if(right < length && this.heap[right] > this.heap[largest]) largest = right;
            
            if(index === largest) break;
            
            [this.heap[index] , this.heap[largest]] = [this.heap[largest] , this.heap[index]];
            index = largest;
        } 
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2);
maxHeap.insert(8);

console.log(maxHeap.heap); 

console.log(maxHeap.remove()); 
console.log(maxHeap.remove()); 