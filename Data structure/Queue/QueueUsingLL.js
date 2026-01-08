class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.rear) {
      this.front = this.rear = node;
      return;
    }

    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (!this.front) return null;

    const value = this.front.value;
    this.front = this.front.next;

    if (!this.front) this.rear = null;

    return value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.dequeue()