class Queue{
    constructor(size = 10){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.items[this.rear] = value;
        this.rear++;
    }
    dequeue(){
        if(this.rear === this.front) return null;
        const value = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return value;
    }
    peek(){
        return this.items[this.front] ?? null;
    }
    isEmphy(){
        return this.front === this.rear;
    }
    size(){
        return this.rear - this.front;
    }
}


const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
