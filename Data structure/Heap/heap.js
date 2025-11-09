class Heap{
    constructor(){
        this.heap=[];
    }
    getParentIndex(){
        return Math.floor((i-1)/2);
    }
    getLeftChildIndex(){
        return 2 * i + 1;
    }
    getRightChildIndex(){
        return 2 * i + 2;
    }
    swap( i , j ){
        [ this.heap[i] , this.heap[j] ] = [ this.heap[j] , this.heap[i] ];
    }
    insert(value){
        this.heap.push(value);
        this.shift(this.heap.length-1);
    }
    // * Moves a node up the tree if it's smaller than its parent.
    shift(index){
        let parentIndex = this.getParentIndex(index);
        while(index>0 && this.heap[index] < this.heap[parentIndex]){
            this.swap(index,parentIndex);
            index=parentIndex;
            parentIndex=this.getParentIndex(index);
        }
    }

}

const heap = new Heap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(4);
heap.insert(2);
console.log(heap.heap);
