class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.size === this.front) {
      return "Queue Full";
    }

    if (this.front === -1) this.front = 0;

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) return "Queue Empty";

    const value = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return value;
  }
}


const circularQueue = new CircularQueue();
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.dequeue();
circularQueue.dequeue();