class queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue(element) {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const Queue = new queue();
console.log(Queue.isEmpty());
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
console.log(Queue.size);
Queue.print();
console.log(Queue.dequeue());
console.log(Queue.peek());

// Queue:-A queue is a linear data structure that follows the principle first in first out (FIFO)

// Use Cases:
// Task scheduling
// Handling of requests in web servers
// call back queue in js

// Operations:
// Enqueue	O(1)	Add to rear (end of queue)
// Dequeue	O(1)	Remove from front
// Peek / Front	O(1)	Get the front item
// isEmpty	O(1)	Check if queue is empty
// Traverse	O(n)	Loop through all elements
